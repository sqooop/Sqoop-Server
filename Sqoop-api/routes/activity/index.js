const express = require('express');
const router = express.Router();
const upload = require('../../modules/multer');
const activityController = require('../../controller/activityController');

const twoFieldUpload = upload.fields([{
  name: "imageUrl",
  maxCount: 1
}, {
  name: "fileUrl",
  maxCount: 1
}]);

router.get('/getOneActivity/:ActivityId', activityController.getActivity);
router.post('/create', twoFieldUpload, activityController.createActivity);
router.get('/getAllActivity', activityController.getAllActivity);
router.put('/likeActivity/:ActivityId', activityController.likeActivity);
router.get('/getLikeActivity', activityController.getAllLikeActivity);

module.exports = router;