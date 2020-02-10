let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');

let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
}

http.createServer((req, res) => {
    console.log(req.method, url);
    if(req.method == 'GET') {
        let pathName = url.parse(req.url).path;
        if(pathName == '/') {
            pathName = '/index.html';
        }
        let extName = path.extname(pathName);
        let mimeType = mimeTypes[extName];
        pathName = pathName.substring(1, pathName.length);
        /*fs.readFile(pathName, 'utf-8', (err, data) => {
            if(err) {
                res.statusCode = 404;
                res.end();
            } else {
                res.writeHead(200, {
                    'Content-Type': mimeType
                });
                res.end(data);
            }
        });*/
        let newFileStream = fs.createReadStream(pathName);
        res.writeHead(200, {
            'Content-Type': mimeType
        })
        newFileStream.pipe(res);
        newFileStream.on('error', () => {
            console.log(err);
        });
    } else {
        let pathName = url.parse(req.url).path;
        pathName = pathName.substring(1, pathName.length);

        let newFileStream = fs.createWriteStream(pathName);

        req.on('close', () => {
            res.statusCode = 200,
            res.end();
        });

        req.pipe(newFileStream);

        /*req.on('data', (chunk) => {
            newFileStream.write(chunk);
        });
        req.on('end', () => {
            newFileStream.end();
            res.statusCode = 200;
            res.end();
        });*/

        /*let stdData = '';

        req.on('readable', () => {
            let chunk;
            while((chunk = req.read()) !== null) {
                stdData +=chunk;
            }
        });

        req.on('end', () => {
            console.log(stdData);
            console.log(decodeURI(stdData));
            res.statusCode = 200;
            res.end();
        });

        req.on('data', (chunk) => {
            stdData += chunk;
        });

        req.on('end', () => {
            console.log(stdData);
            res.statusCode = 200;
            res.end(stdData);
        });*/
    }
}).listen(8080);