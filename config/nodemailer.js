import nodemailer from "nodemailer";
import { renderToString } from "react-dom/server";
import MuyalogyWelcomeEmail from "../pages/emails/muyalogy-welcome-3";
import CodepenChallengersEmail from "../pages/emails/test";
import { render } from "@react-email/render";

const html = render(<MuyalogyWelcomeEmail />);
const html2 = renderToString(<CodepenChallengersEmail />);
const emailHtml = render(<CodepenChallengersEmail />);

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hundaol74@gmail.com",
    pass: "szxqrrkeunutayvd",
  },
});

export const mailOptions = {
  from: "hundaol74@gmail.com", // sender address
  to: "tinsayesimeneh608@gmail.com",
  subject: "Muyalogy Welcome Email", // Subject line
  html: html, // html body
};
