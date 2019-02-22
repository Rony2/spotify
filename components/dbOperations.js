var connection = require('./connectToDB');

function getSongList(cb) {
    connection.query('SELECT * FROM spotify ORDER BY `rank` ASC LIMIT 50', function (error, results, fields) {
        if (error) {
            return cb(error, null);
        }
        return cb(null, results)
    });
}

function getSongsBasedOnSearch(searchInput, cb) {
    searchInput = `\"${searchInput}\"`;
    connection.query(`SELECT * FROM spotify WHERE artists LIKE ${searchInput} OR name LIKE ${searchInput} LIMIT 50`, function (error, results, fields) {
        if (error) {
            return cb(error, null);
        }
        return cb(null, results);
    });
}

module.exports = {
    getSongList,
    getSongsBasedOnSearch
}