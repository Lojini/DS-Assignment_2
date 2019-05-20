const mongoose = require('mongoose');

const dialogPaySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,

    name:{
        type:String,
    },

    phoneNumber :{
        type:Number,
        require:true
    }

});

module.exports = mongoose.model('DialogPay',dialogPaySchema);