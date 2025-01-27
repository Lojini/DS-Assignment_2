const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const userRoutes = require("./api/routes/userRouter");
const trainInfoRoutes = require("./api/routes/traininfoRouter");
const reservationRoutes = require('./api/routes/reservationRouter');
/* cardPayRoutes = require('./api/routes/creditCardPayRouter');
const dialogPayRoutes = require('./api/routes/dialogPayRouter');*/

mongoose.connect('mongodb://localhost/TicketBooking');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests
app.use("/user", userRoutes);
app.use("/trains", trainInfoRoutes);
app.use("/booking", reservationRoutes);
/*app.use('/creditcard',cardPayRoutes);
app.use('/dialogpay',dialogPayRoutes);*/



app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
