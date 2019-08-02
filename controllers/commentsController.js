const path = require('path');
const pug = require('pug');
const {body, validationResult} = require('express-validator');
const {sanitizeBody} = require('express-validator');
const connection = require('typeorm').getConnection();
const playlistUtilities = require('../utilities/playlistUtilities');

//Delete comment for my playlist
//two scenarios：
//1. User can delete any comment as long as user own the playlist.
//2. User can only delete his/her comments in any playlist.
//=> User can access the playlist
//=> User own the comment that he/sher want to delete.


//For scenario 1
exports.comment_delete = async function (req, res, next) {
    const get_comments = connection.getRepository('Comments');
    const current_comment = await get_comments.findOne(req.params.comment_id);
    const result = await get_comments.remove(current_comment);
    return result;
};

//For scenario 2
//Assumption: User can access the playlist
//only need to check ownership of comments
exports.comment_user_comments_delete = async function(req, res, next) {
    const commentsRepo = connection.getRepository('Comments');
    const comment_delete = await commentsRepo.findOne(
        {
            id: req.params.id,
            owner_id: req.session.userId
        },
        {
            relations: ['owner_id']
        }
    );

    //if user id != owner_id, such comment does not exist
    if(!comment_delete){
        return res.status(404).send("Access denied.");
    }
    else{
        await commentsRepo.remove(comment_delete);
        return res.status(200).send("Successfully delete");ß
    }


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