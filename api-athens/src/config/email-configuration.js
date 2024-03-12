import nodemailer from "nodemailer";

export async function getEmailTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_SENDER,
      pass: process.env.MAIL_SENDER_PASSWORD,
      expires: 1235,
    },
  });
}
