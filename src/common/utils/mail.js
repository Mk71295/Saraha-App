import nodemailer from "nodemailer";
export const sendEmail =async(toValue,subjectValue, htmlValue="",textValue="" )=>{
    const transporter = nodemailer.createTransport({
  service:"gmail",
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
try {
  const info = await transporter.sendMail({
    from: process.env.SMTP_USER, // sender address
    to: toValue, 
    subject: subjectValue,
    text: textValue,
    html: htmlValue
  });

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
  console.error("Error while sending mail:", err);
}
}