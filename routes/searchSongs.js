var express = require('express');
var router = express.Router();

var searchSongs = require('../components/dbOperations').getSongsBasedOnSearch;

router.post('/', function (req, res, next) {
    searchSongs(req.body.searchInput, (error, result) => {
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