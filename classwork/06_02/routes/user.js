const express = require('express');
const router = express.Router();

//http://localhost:8080/user/hello
router.get('/hello', function(req, res, next) {
    res.send('Hello user');
});

module.exports = router;