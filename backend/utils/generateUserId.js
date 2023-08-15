// generate user id for given user role

const generateUserId = (role) => {
    let prefix;

    switch (role) {
        case 'Admin':
            prefix = 'AD';
            break;
        case 'Receptionist':
            prefix = 'RT';
            break;
        case 'Shake Bar Manager':
            prefix = 'SM';
            break;
        case 'Trainer':
            prefix = 'TR';
            break;
        case 'Physiotherapist':
            prefix = 'PT';
            break;
        case 'Virtual Member':
            prefix = 'VM';
            break;
        case 'Physical Member':
            prefix = 'PM';
            break;
        default:
            throw new Error("Invalid role provided");   // Handle unexpected roles
    }

    // Generate a random 4-digit number
    const code = Math.floor(Math.random() * 9000) + 1000;

    return `${prefix}${code}`;
}

export default generateUserId;