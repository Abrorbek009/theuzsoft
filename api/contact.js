const https = require("https");

function sendToTelegram({ name, phone, message, language }) {
  return new Promise((resolve, reject) => {
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

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

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { name, phone, message, language } = req.body;

    if (!name || !phone || !message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    await sendToTelegram({ name, phone, message, language: language || "uz" });
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      error: error.message || "Failed to send message"
    });
  }
};
