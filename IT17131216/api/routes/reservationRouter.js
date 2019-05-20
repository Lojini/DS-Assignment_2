const express = require("express");
const router = express.Router();

const reservationController = require('../controllers/reservationController');
const checkAuth = require('../middleware/check-auth');

router.get('/',checkAuth,reservationController.get_booking_info);

router.post('/',checkAuth,reservationController.book_ticket);

module.exports = router;


