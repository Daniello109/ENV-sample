require('dotenv').config();
const MY_NAME = process.env.sample.MY_NAME;
const MY_CITY = process.env.sample.MY_CITY;
const MY_LANGUAGE = process.env.sample.MY_LANGUAGE;

console.log(`I am ${MY_NAME}, wilder in ${MY_CITY}, and I love ${MY_LANGUAGE}`);

