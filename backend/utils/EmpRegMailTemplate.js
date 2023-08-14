// mail template for employee registration

const getSubject = () => {
    return "Your FitZen Account Activation";
}


const getBody = (firstName, email, password) => {
    return `
    <div style="font-family: Arial, sans-serif; padding: 15px; line-height: 1.5;">
        <p>Dear ${firstName},</p>

        <p>Welcome to FitZen!</p>

        <p>
            An account has been created for you by our administration team. To ensure the security of your information,
            we have provided you with a temporary password. Please make sure to change this password upon your first login
            for security reasons.
        </p>

        <p>
            <strong>Username:</strong> ${email}<br>
            <strong>Temporary Password:</strong> ${password}
        </p>

        <p>Please log in to FitZen using the provided credentials.</p>

        <p>For your security, please follow these best practices:</p>

        <ul>
            <li>Log in with the provided temporary password.</li>
            <li>Navigate to the 'Change Password' section under account settings.</li>
            <li>Choose a strong, unique password.</li>
            <li>Do not share your password with anyone.</li>
            <li>Always log out when you've finished your session.</li>
        </ul>

        <p>
            If you did not request this account or believe this email was sent in error, please get in touch with us
            through our contact page or platform.
        </p>

        <p>Thank you for being a part of FitZen.</p>

        <p>Best regards,<br>FitZen Support Team</p>
    </div>`;
}


export {
    getSubject,
    getBody,
}