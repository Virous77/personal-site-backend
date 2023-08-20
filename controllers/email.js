import { sendEmail } from "../utils/sendEmail.js";

export const sendAutoMatedEmail = async (req, res, next) => {
  const { userName, message, email } = req.body;

  const sent_from = "reetesh.ics@outlook.com";
  const subject = "New Email from Reetesh-website!";
  const send_to = process.env.SEND_TO;
  const reply_to = "virous77@noreply.com";
  const template = "newMessage";

  try {
    await sendEmail(
      subject,
      send_to,
      sent_from,
      reply_to,
      template,
      userName,
      message,
      email
    );
    res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
