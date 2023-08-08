// generate id for the user
const generateId = (type) => {
    let prefix;

    switch (type) {
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
    }

    // generate a random number between 1000 and 9999.
    let code = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    return `${prefix}${code}`;
};


export default generateId;