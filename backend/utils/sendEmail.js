import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// dotenv.config();


// set up nodemailer transporter
const transporter = nodemailer.createTransport({
    host: '',
    port: '',
    secure: true,  // Ensure this is true if you are using port 465, otherwise false
    auth: {
        user: '',
        pass: ''
    }
});


/**
 * Send an email.
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The email subject.
 * @param {string} text - The plain text email body.
 * @param {string} html - The HTML email body.
 */
// mail sender
const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: to,
            subject: subject,
            text: text,
            html: html
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

// Example Usage: (You can comment this out later)
sendEmail("bar@example.com", "Hello ✔", "Hello world?", "<b>Hello world?</b>");

export default sendEmail;