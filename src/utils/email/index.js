const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER_NAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

module.exports = transporter;
