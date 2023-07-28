import { mailOptions, transporter } from "../../config/nodemailer";
import { MuyalogyWelcomeEmail } from "../emails/muyalogy-welcome-3";

const handler = async () => {
  try {
    await transporter.sendMail({
      ...mailOptions,
    });
    console.log("Message sent");
    return {
      statusCode: 200,
      body: "Message sent",
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
export default handler;
