const path = require('path');
const pug = require('pug');
const connection = require('typeorm').getConnection();
const albumUtilities = require('../utilities/albumUtilities');
const trackDurationParser = require('../utilities/trackDurationParser.js');

exports.track_page_get = async function (req, res, next) {
    const info = req.query.info;
    const type = req.query.type;
    const userId = req.session.userId;
    const tracks = await connection.getRepository('Tracks')
        .createQueryBuilder("track")
        .where("track.owner_id = :userId", {userId})
        .leftJoinAndSelect("track.album_id", "album_id")
        .getMany();

    // console.log(tracks[0].duration);
    var track;
    for (track of tracks) {
        track.duration = trackDurationParser.durationParser(track.duration);
    }
    console.log(tracks);
    if (info && type) {
        console.log('server receive a req, type: ', type, ' , info: ', info);
        const p_track_page_tool_bar = path.join(__dirname,
            '../views/track_page_tool_bar.pug');
        const fn_track_page_tool_bar = pug.compileFile(
            p_track_page_tool_bar, null);

        const p_track_page = path.join(__dirname,
            '../views/track_page.pug');
        const fn_track_page = pug.compileFile(p_track_page, null);

        const html = fn_track_page_tool_bar() + fn_track_page({tracks: tracks});
        res.send(html);
    }
    else {
        console.log('server receive a empty req: /track');

        res.render('index',
            {page: 'track_page_get', tracks: tracks});
    }
};

exports.track_detail_get = async (req, res, next) => {
    const id = parseInt(req.params.id);

    // If an id character can't be converted to an int, parseInt returns NaN.
    // Ex: 'abc'
    if (isNaN(id)) {
        return res.send({});
    }

    // Find track
    const track = await connection.getRepository('Tracks').findOne({id: id}, {relations: ['album_id']});

    // If no track found, return empty object
    res.send(track || {});
};

exports.track_delete = async (req, res, next) => {
    const id = parseInt(req.params.id);

    // If an id character can't be converted to an int, parseInt returns NaN.
    // Ex: 'abc'
    if (isNaN(id)) {
        return res.send({});
    }

    const tracksRepo = connection.getRepository('Tracks');
    const track = await tracksRepo.findOne(
        {id: id, owner_id: req.session.userId},
        {relations: ['album_id']},
    );

    if (track == null) {
        return res.status(404).send("404 Not Found!")
    }

    const album = track.album_id;
    const file_name = track.file_name;
    const cover_art_file_name = track.cover_art_file_name;

    console.log(file_name);
    console.log(cover_art_file_name);

    const path_track = './public/tracks/' + file_name;
    try {
        fs.unlinkSync(path_track);
        //file removed
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }

    if (cover_art_file_name) {
        const path_cover = './public/covers/' + cover_art_file_name;
        try {
            fs.unlinkSync(path_cover);
            //file removed
        } catch (err) {
            console.error(err);
            return res.status(500).send();
        }
    }

    await tracksRepo.remove(track);

    // Update album cover art
    albumUtilities.updateAlbumCover(album, cover_art_file_name);

    return res.send("Success");

};

exports.track_modify_put = [
    // Validate fields.
    body('title')
        .trim()
        .exists()
        .withMessage('Invalid track title.'),
    body('published_on', 'Invalid published date')
        .isISO8601(),
    body('artist')
        .trim()
        .exists()
        .isLength({max: 70}).withMessage('Artist name cannot be longer than 70 characters'),

    // Sanitize input.
    sanitizeBody('title').escape(),
    sanitizeBody('published_on').toDate(),
    sanitizeBody('artist').escape(),


    // Handle request.
    async function (req, res, next) {
        const errors = validationResult(req);

        var newTrackData = {
            title: req.body.title,
            published_on: req.body.published_on,
            last_name: req.body.artist,
        };

        // If form fields have validation errors.
        if (!errors.isEmpty()) {
            return res.status(400).send({submittedData: newUserData, errors: errors.array()});
        }

        const tracksRepo = connection.getRepository('Tracks');
        var track = await usersRepo.findOne({id: req.session.trackId});

        // Merge new data (new fields replace old ones)
        track = Object.assign(track, newTrackData);
        await trackRepo.save(track);

        res.send("Track updated.");
    }
];