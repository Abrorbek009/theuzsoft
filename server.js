const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const rootDir = __dirname;
const port = Number(process.env.PORT || 3000);
const telegramToken = process.env.TELEGRAM_BOT_TOKEN || "";
const telegramChatId = process.env.TELEGRAM_CHAT_ID || "";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp"
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function serveFile(res, filePath) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    res.end(data);
  });
}

function sendToTelegram({ name, phone, message, language }) {
  return new Promise((resolve, reject) => {
    if (!telegramToken || !telegramChatId) {
      reject(new Error("Telegram env vars are missing"));
      return;
    }

    const text = [
      "TheUzSoft contact form",
      `Language: ${language || "uz"}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Message: ${message}`
    ].join("\n");

    const payload = JSON.stringify({
      chat_id: telegramChatId,
      text,
      parse_mode: "HTML"
    });

    const request = https.request(
      {
        hostname: "api.telegram.org",
        path: `/bot${telegramToken}/sendMessage`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload)
        }
      },
      (response) => {
        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode < 300) {
            resolve(body);
            return;
          }

          reject(new Error(`Telegram API error: ${response.statusCode} ${body}`));
        });
      }
    );

    request.on("error", reject);
    request.write(payload);
    request.end();
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  if (requestUrl.pathname === "/api/contact" && req.method === "POST") {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        req.destroy();
      }
    });

    req.on("end", async () => {
      try {
        const body = raw ? JSON.parse(raw) : {};
        const name = String(body.name || "").trim();
        const phone = String(body.phone || "").trim();
        const message = String(body.message || "").trim();
        const language = String(body.language || "uz").trim();

        if (!name || !phone || !message) {
          sendJson(res, 400, { error: "Missing required fields" });
          return;
        }

        await sendToTelegram({ name, phone, message, language });
        sendJson(res, 200, { ok: true });
      } catch (error) {
        sendJson(res, 500, {
          error: error.message || "Failed to send message"
        });
      }
    });
    return;
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Method not allowed");
    return;
  }

  let pathname = requestUrl.pathname;
  if (pathname === "/") pathname = "/index.html";
  if (pathname.endsWith("/")) pathname += "index.html";

  const filePath = path.normalize(path.join(rootDir, pathname.replace(/^\//, "")));
  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  serveFile(res, filePath);
});

server.listen(port, () => {
  console.log(`TheUzSoft site running at http://localhost:${port}`);
  if (!telegramToken || !telegramChatId) {
    console.log("Telegram env vars missing: set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID");
  }
});
