import transporter from "../config/emailConfig.js";

/**
 * POST /api/contact
 * Sends two emails:
 *   1. Admin notification — full form details to ADMIN_EMAIL
 *   2. User confirmation — thank-you email to the submitter
 */
export const submitContact = async (req, res) => {
    try {
        const { name, email, phone, company, service, message } = req.body;

        // ── Basic validation ──
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: "Name, email, and message are required.",
            });
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        const brandFrom = `"ShipNex" <${process.env.SMTP_USER}>`;

        // ── 1. Email to Admin ──
        const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 24px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%); padding: 32px 28px; }
    .header h1 { color: #FF6B00; margin: 0 0 4px; font-size: 22px; }
    .header p { color: #aaa; margin: 0; font-size: 13px; }
    .body { padding: 28px; }
    .field { margin-bottom: 16px; }
    .field .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #888; margin-bottom: 4px; }
    .field .value { font-size: 15px; color: #222; }
    .message-box { background: #f9f9f9; border-left: 3px solid #FF6B00; padding: 14px 18px; border-radius: 6px; margin-top: 8px; }
    .footer { text-align: center; padding: 16px; color: #999; font-size: 11px; border-top: 1px solid #eee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Submission</h1>
      <p>${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}</p>
    </div>
    <div class="body">
      <div class="field"><div class="label">Name</div><div class="value">${name}</div></div>
      <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${email}">${email}</a></div></div>
      ${phone ? `<div class="field"><div class="label">Phone</div><div class="value">${phone}</div></div>` : ""}
      ${company ? `<div class="field"><div class="label">Company</div><div class="value">${company}</div></div>` : ""}
      ${service ? `<div class="field"><div class="label">Service Interested In</div><div class="value">${service}</div></div>` : ""}
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    <div class="footer">ShipNex Contact Form</div>
  </div>
</body>
</html>`;

        // ── 2. Confirmation email to user ──
        const userHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 24px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%); padding: 40px 28px; text-align: center; }
    .header h1 { color: #FF6B00; margin: 0; font-size: 26px; font-weight: 800; font-style: italic; }
    .header p { color: #ccc; margin: 6px 0 0; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; }
    .body { padding: 32px 28px; }
    .body h2 { color: #222; margin: 0 0 12px; font-size: 20px; }
    .body p { color: #555; line-height: 1.7; font-size: 14px; margin: 0 0 16px; }
    .summary { background: #f9f9f9; border-radius: 8px; padding: 18px; margin: 20px 0; }
    .summary .row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; }
    .summary .row .label { color: #888; }
    .summary .row .val { color: #222; font-weight: 600; }
    .cta { display: inline-block; background: #FF6B00; color: #000; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 13px; letter-spacing: 0.04em; }
    .footer { text-align: center; padding: 20px; color: #999; font-size: 11px; border-top: 1px solid #eee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>its</h1>
      <p>logistics</p>
    </div>
    <div class="body">
      <h2>Thank you, ${name}!</h2>
      <p>We've received your message and our team will get back to you within 24 hours. In the meantime, here's a summary of what you sent us:</p>
      <div class="summary">
        ${service ? `<div class="row"><span class="label">Service</span><span class="val">${service}</span></div>` : ""}
        <div class="row"><span class="label">Message</span><span class="val">${message.length > 80 ? message.substring(0, 80) + "…" : message}</span></div>
      </div>
      <p>If you need immediate assistance, feel free to give us a call or reply directly to this email.</p>
      <p style="text-align:center; margin-top: 24px;">
        <a href="https://itslogistics.com" class="cta">Visit Our Website →</a>
      </p>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} ShipNex — An ECHO Company<br>
      This is an automated confirmation. Please do not reply to this email.
    </div>
  </div>
</body>
</html>`;

        // Send both emails concurrently
        await Promise.all([
            transporter.sendMail({
                from: brandFrom,
                to: adminEmail,
                subject: `New Contact: ${name} — ${service || "General Inquiry"}`,
                html: adminHtml,
            }),
            transporter.sendMail({
                from: brandFrom,
                to: email,
                subject: "We received your message — ShipNex",
                html: userHtml,
            }),
        ]);

        res.status(200).json({ success: true, message: "Emails sent successfully!" });
    } catch (err) {
        console.error("Contact form error:", err);
        res.status(500).json({
            success: false,
            error: "Failed to send email. Please try again later.",
        });
    }
};
