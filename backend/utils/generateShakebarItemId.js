// generate shakebar item id

const generateShakebarItemId = () => {
    const prefix = 'IT';

    // Generate a random 4-digit number
    const code = Math.floor(Math.random() * 9000) + 1000;

    return `${prefix}${code}`;
}

export default generateShakebarItemId;