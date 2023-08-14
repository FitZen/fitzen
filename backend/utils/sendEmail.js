import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


// configure the email transport using nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


// send email using configured transport object
const sendEmail = async (subject, htmlBody, recipient) => {
    try {
        await transporter.sendMail({
            from: `"FitZen Support" <${process.env.EMAIL_USER}>`,
            to: recipient,
            subject: subject,
            html: htmlBody
        });

        console.log("Email sent successfully!");
        return "Success";
    } catch (error) {
        console.error("Error sending email.");
        throw error;
    }
};


export default sendEmail;


// Call
// const result = await sendEmail("adheesha.1999@gmail.com", "Subject Test", "<b>Body test - html</b>");
// console.log(result);