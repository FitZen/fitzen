import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// dotenv.config();


// set up nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,  // Ensure this is true if you are using port 465, otherwise false
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});


/**
 * Send an email.
 * @param {string} to - The sender's email address.
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The email subject.
 * @param {string} text - The plain text email body.
 * @param {string} html - The HTML email body.
 */

// mail sender
const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: to,
            subject: subject,
            text: text,
            html: html
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
};


// Example Usage:
// sendEmail("bar@example.com", "Hello ✔", "Hello world?", "<b>Hello world?</b>");


export default sendEmail;