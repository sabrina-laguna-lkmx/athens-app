import { getEmailTransporter } from "../config/email-configuration.js";
import {
  Logo,
  icon_facebook,
  icon_instagram,
  icon_linkedin,
  icon_x,
  icon_youtube,
} from "../template/img/logo.js";

export async function sendEmail(to, subject, message, html) {
  const transporter = await getEmailTransporter();

  try {
    return transporter.sendMail({
      from: "Athens Services <athensservicesdevelopment@gmail.com>",
      to: `${to}`,
      subject,
      text: message,
      html: html,
      attachments: logos,
    });
  } catch (error) {
    throw error;
  }
}

export async function sendEmailWithEvidence(
  to,
  subject,
  message,
  html,
  evidences
) {
  const transporter = await getEmailTransporter();

  try {
    return transporter.sendMail({
      from: "Athens Services <athensservicesdevelopment@gmail.com>",
      to: `${to}`,
      subject,
      text: message,
      html: html,
      attachments: [logos, ...evidences],
    });
  } catch (error) {
    throw error;
  }
}

export async function sendEmailRent(to, subject, message, html, evidences) {
  const transporter = await getEmailTransporter();

  try {
    return transporter.sendMail({
      from: "Athens Services <athensservicesdevelopment@gmail.com>",
      to: `${to}`,
      subject,
      text: message,
      html: html,
      attachments: [...logos, ...evidences],
    });
  } catch (error) {
    throw error;
  }
}

const logos = [
  {
    filename: "logo.png",
    content: Logo,
    encoding: "base64",
    cid: "logo-image",
  },
  {
    filename: "facebook.png",
    content: icon_facebook,
    encoding: "base64",
    cid: "facebook-image",
  },
  {
    filename: "instagram.png",
    content: icon_instagram,
    encoding: "base64",
    cid: "instagram-image",
  },
  {
    filename: "x.png",
    content: icon_x,
    encoding: "base64",
    cid: "x-image",
  },
  {
    filename: "linkedin.png",
    content: icon_linkedin,
    encoding: "base64",
    cid: "linkedin-image",
  },
  {
    filename: "youtube.png",
    content: icon_youtube,
    encoding: "base64",
    cid: "youtube-image",
  },
];
