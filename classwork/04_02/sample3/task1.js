const fs = require('fs');

let file = fs.readFileSync(process.argv[2], 'utf-8');

let cnt = 0;

for(let i=0; i<file.length;i++) {
    if(file[i] === '\n') {
        cnt++;
    }
}

console.log(cnt);