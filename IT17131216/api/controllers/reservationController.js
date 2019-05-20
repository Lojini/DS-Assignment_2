const mongoose = require('mongoose');

const Reservation = require("../models/reservation");

exports.book_ticket = function(req,res,next){
     const bookingInfo = new Reservation({
         _id:mongoose.Types.ObjectId,
         train:req.body.trainId,
         user:req.user,
         passengers: req.body.passengers

     })
    bookingInfo.save()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error:err
            })
        })
};

exports.get_booking_info = function(req,res,next){
    Reservation.find()
        .exec()
        .then(result =>{
            res.status(200).json(result)
            }
        )
        .catch(err =>{
            res.status(500).json({
                error:err
            })
        })
};

