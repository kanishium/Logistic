import nodemailer from "nodemailer";
import dns from "dns";

// Force IPv4 — Node 18+ resolves to IPv6 first, which fails on many Windows setups
dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // true for 465, false for 587 (STARTTLS)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    // Explicitly use IPv4 address to bypass DNS resolution issues
    name: "localhost",
    tls: {
        rejectUnauthorized: false,
    },
});

// Verify connection on startup (delayed to ensure DNS setting takes effect)
setTimeout(() => {
    transporter.verify((err) => {
        if (err) {
            console.error("❌ SMTP connection failed:", err.message);
        } else {
            console.log("✅ SMTP ready — emails will be sent via", process.env.SMTP_HOST);
        }
    });
}, 500);

export default transporter;
