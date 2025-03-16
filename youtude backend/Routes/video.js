
const express = require('express');
const router = express.Router();
const videoController = require('../Controllers/video');
const auth = require('../Middleware/Authentication');

router.post('/video',auth,videoController.uploadVideo);
router.get('/allvideo',videoController.getAllVideo);
router.get('/getVideoById/:id',videoController.getVideoById);
router.get('/:userId/channel',videoController.getAllVideoByUserID);




;

module.exports = router;