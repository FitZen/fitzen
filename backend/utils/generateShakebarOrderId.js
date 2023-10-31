// generate shakebar order id

const generateShakebarOrderId = () => {
    const prefix = 'OD';

    // Generate a random 8-digit number
    const code = Math.floor(Math.random() * 90000000) + 10000000;

    return `${prefix}${code}`;
}

export default generateShakebarOrderId;