// path.resolve(__dirname, 'notes.txt');

// const fs = require('fs');

// const data = fs.readFileSync('notes.txt', 'utf-8');
// console.log(data);



const fs = require('fs');
// const { resolve } = require('path');

const fileReadCallback = (error, data) => {
  if(error) {
    console.log('Gagal membaca berkas');
    return;
  }
  console.log(data);
};

// fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);

fs.readFile('notes.txt', 'UTF-8', fileReadCallback);