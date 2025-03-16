const express = require('express');
const router = express.Router();
const CommentController = require('../Controllers/comment');
const auth = require('../Middleware/Authentication');


// router.post('/comment',CommentController.addComment);
router.post('/comment',auth,CommentController.addComment);
router.get('/comment/:videoId',CommentController.getCommentByVideoId);

module.exports = router