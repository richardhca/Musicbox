const path = require('path');
const pug = require('pug');
const {body, validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');
const connection = require('typeorm').getConnection();
const playlistUtilities = require('../utilities/playlistUtilities');

//Delete comment for my playlist

exports.comment_delete = async function (req, res, next) {
    const results = req.params.comment_id;
    return res.send (results);
};


//Create comment for a playlist

exports.comment_create_post = [
    body('comment')
        .trim()
        .exits()
        .isLength({max: 140}).withMessage('Comment cannot be more than 140 characters.'),
    
    
    //Handle request.
    async function (req, res, next) {
        const errors = validationResult(req);

        var commentData ={
            created_on: new Date(),
            owner_id: req.session.userId,
            content: req.body.comment,
            //save playlist name, not sure
            playlist_id: req.params.id,
        };

        if (!errors.isEmpty()) {
            return res.status(400).send({errors: errors.array()});
        }

        const commentsRepository = connection.getRepository("Comments");

        const comment = await commentsRepository.save(commentData);

        res.send(comment);

    }


];