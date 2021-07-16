// const cpuInformation = process.memoryUsage();
 
// console.log(cpuInformation);
/**
 * {
  rss: 19623936,
  heapTotal: 4468736,
  heapUsed: 2604760,
  external: 828493,
  arrayBuffers: 9898
}
 */

// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });
// SET NODE_ENV=production && node app.js


/**
 * TODO 1 : Isi dengan nilai heapUsed dari instance process.memoryUsage.
 * TODO 2 : Isi dengan nilai index ke-2 dari process.argv.
 * TODO 3 : Isi dengan nilai NODE_ENV dari process.env.
 * TODO 4 : Isi dengan nilai heapUsed dari instance process.memoryUsage.
 */


const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let i = 0; i <= 10000; i++){

}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
