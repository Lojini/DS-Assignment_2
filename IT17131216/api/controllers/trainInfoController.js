const mongoose = require('mongoose');

const Train = require("../models/train");

exports.get_train_info =(req,res,next) => {
    Train.find({startStation:req.query.from ,endStation:req.query.dest})
        .select('-__v -_id')
        .exec()
        .then(result =>{
            res.status(200).json(result)
        })
        .catch(err=> {
            res.status(500).json({
                error:err
            })
        })
};

exports.add_train_info =(req,res,next) =>{
    const TrainInfo= new Train({
        _id:mongoose.Types.ObjectId(),
        trainNo:req.body.trainNo,
        name:req.body.name,
        startTime:req.body.startTime,
        endTime:req.body.endTime,
        startStation:req.body.startStation,
        endStation:req.body.endStation,
        ticketPrice:req.body.ticketPrice
    })
    TrainInfo.save()
        .then(result =>{
            res.status(200).json(result)
        })
        .catch(err =>{
            res.status(500).json({
                error:err
            })
        })
}