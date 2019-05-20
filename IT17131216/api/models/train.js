const mongoose = require('mongoose');

const trainSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,

    trainNo:{
        type:Number ,
        required :true},

    name: {
        type:String ,
        required: true},

    startTime :{
        type: Number ,
        required :true},

    endTime:{
        type:Number ,
        required :true},

    startStation :{
        type:String ,
        required :true},

    endStation :{
        type:String ,
        required :true},

    ticketPrice : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Train',trainSchema);