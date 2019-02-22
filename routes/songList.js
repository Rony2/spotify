var express = require('express');
var router = express.Router();

var getTopSongs = require('../components/dbOperations').getTopSongList;
var getAllSongs = require('../components/dbOperations').getSongList;

router.get('/top', function (req, res, next) {
    getTopSongs((error, result) => {
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

router.get('/all', function (req, res, next) {
    getAllSongs((error, result) => {
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