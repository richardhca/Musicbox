const faker = require('faker');

// Need playlist name and playlist image here
// [{playlist_name, image_path}, ...]
exports.getUserPlaylistInfo = function (req, res, next) {
    faker.image();
    next();
};