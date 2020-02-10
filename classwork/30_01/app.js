/*const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('click', () => {
    console.log("Click handler");
});

eventEmitter.emit('click');
*/

const http = require('http');

const port = 8080;

const server = http.createServer()

server.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello');

    res.on('error', (error) => {
        console.log(error);
    });
});

server.on('listening', (req, res) => {
    console.log('Server is on port ' + port);
});

server.on('connection', () => {
    console.log("New TCP connection ");
});

server.listen(port);