const dbconnection= require("./db")
const cors = require('cors');
const express = require("express");
const app = express();
const conatactUsRouters = require("./contactUsRouters");
const applicationFormRouters = require("./applicationFormRouters");
const classesRouters = require('./classRouters')
const bodyParser = require("body-parser");
const subscribeRouters = require("./subscribeRouters")
const chatBotRouter = require('./chatBotRouters')
const scholarshipFormRouter= require('./scholarshipFormRouters')
const ProjectKitFormRouters= require('./projectKitFormRouter')
const CountRouter= require('./countRouter')
const JobOpeingRouter= require('./JobOpeningRouter')
const PopupSettingsRouter= require('./popUsRouter')


app.use(express.json());

app.use(cors());

app.use('/resume', express.static('resume'));
app.use('/paymentSleep', express.static('paymentSleep'));
app.use('/markSheet', express.static('markSheet'));
app.use('/popUpImage', express.static('popUpImage'));
app.use(cors({
    origin: 'http://192.168.0.3:4200' // Replace with your frontend URL
  }));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Define URL handler



const HOST = '192.168.0.3';
app.use("/", conatactUsRouters);
app.use("/",applicationFormRouters);
app.use("/",classesRouters)
app.use("/",subscribeRouters)
app.use("/",chatBotRouter)
app.use("/",scholarshipFormRouter)
app.use("/",ProjectKitFormRouters)
app.use("/",CountRouter)
app.use("/",JobOpeingRouter)
app.use("/",PopupSettingsRouter)

// Start the server
const PORT = 3006;
app.listen(PORT,HOST,() => {
    console.log(`Server is running on port ${PORT}`); 
});




module.exports = app;
