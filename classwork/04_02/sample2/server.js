const ToUpperCase = require('./upperCase');
const tUS = new ToUpperCase();
/*
tUS.on('data', (chunk) => {
    console.log(chunk.toString());
});

tUS.write('Hello');
tUS.write('World');
tUS.end('!');
*/

process.stdin.pipe(tUS).pipe(process.stdout);