var express = require('express');
var router = express.Router();

var getSongs = require('../components/dbOperations').getSongList;

router.get('/', function (req, res, next) {
    getSongs((error, result) => {
        if (error) {
            let body = {
                code: 500,
                text: 'Internal Server Error => DB Error'
            }
            res.send(body);
        } else {
            res.send(result);
        }
    });
});

module.exports = router;