const mongoose =require('mongoose');

const creditCardpaySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref :'User'
    },

    name : {
        type:String,
        required:true
    },

    cardNo :{
        type:Number,
        required:true
    },

    cvc : {
        type:Number,
        required :true
    },

    total :{
        type :Number,
        required:true
    },

    subTotal :{
        type:Number,
        required :true
    }


});

module.exports = mongoose.model('CreditCard' , creditCardpaySchema);