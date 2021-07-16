/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

//path.resolve(__dirname, notes.txt);
const fs = require('fs');
const { resolve } = require('path');
// Stream.resolve(__dirname, input.txt);
const readableStream = fs.createReadStream(resolve(__dirname, './input.txt'), {highWaterMark: 15});

readableStream.on('readable',() =>{
    try{
        process.stdout.write(`[${readableStream.read()}]\n`);
    } catch(error){
    }
})

readableStream.on('end', () => {
    
})

const writeableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

writeableStream.end();

///////////////
// const fs = require('fs');
// const { resolve } = require('path');

// const readableStream = fs.createReadStream(resolve(__dirname, './input.txt'), {
//   highWaterMark: 15,
// });

// const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

// readableStream.on('readable', () => {
//   try {
//     writableStream.write(`${readableStream.read()}\n`);
//   } catch (error) {
//     // catch the error when the chunk cannot be read.
//   }
// });

// readableStream.on('end', () => {
//   writableStream.end();
// });