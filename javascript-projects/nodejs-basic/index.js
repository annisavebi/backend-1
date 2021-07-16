// const pet = (name) => {
// console.log (`My pet is ${name}`);
// }

// pet("Chansu");

// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });


const moment = require('moment');
 
const date = moment().format("MMM Do YY");
console.log(date);
 
/**
 * output:
 * Jan 11th 21
 */

