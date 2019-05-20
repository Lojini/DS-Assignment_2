const express = require("express");
const router = express.Router();

const trainInfoController = require('../controllers/trainInfoController');
const checkAuth = require('../middleware/check-auth');

router.get('/',checkAuth,trainInfoController.get_train_info);

router.post('/',checkAuth,trainInfoController.add_train_info);

module.exports = router;


