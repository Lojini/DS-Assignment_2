const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,

    train : {
        type: mongoose.Schema.Types.ObjectId ,
        ref : 'Train'
    },

    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    passengers:{
        type:Number,
        required:true
    }



});

module.exports =mongoose.model('Reservation',reservationSchema);