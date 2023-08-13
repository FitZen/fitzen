import generator from 'generate-password';


// generate 8 character long password
const generatePassword = () => {
    const password = generator.generate({
        length: 8,
        numbers: true,
        symbols: false,
        uppercase: true,
        lowercase: true,
        excludeSimilarCharacters: true,  // exclude characters that could be mistaken for others, like '0' and 'O', or 'l' and 'I'
    });

    return password;
}


export default generatePassword;