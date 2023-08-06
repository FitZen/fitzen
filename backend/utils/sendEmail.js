import nodemailer from 'nodemailer';


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
    }
});


const sendEmail = async (to, subject, text) => {
    let mailOptions = {
        from: 'your-email@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending email: ', err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


export default sendEmail;