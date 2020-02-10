const stream = require('stream');

class ToUpperCase extends stream.Transform {
    constructor() {
        super();
    }

    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}

module.exports = ToUpperCase;