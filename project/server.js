const express = require("express");
var bodyParser = require('body-parser');
const dbConnect= require("./dbConnect");
const Visitor = require("./models/visitor");
let path = require('path');
const app = express();
const port = process.env.PORT || 8080;
app.use("/",express.static(__dirname+"/views/build"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.post("/",function(req,res,next){
    var user = new Visitor();
    user.fname = req.body.fname;
    user.lname = req.body.lname;
    user.email = req.body.email;
    user.subject = req.body.subject;
    user.message = req.body.message;

    user.save(function(err){
        if(err){
            throw err;
        }
        else{
            res.sendFile(__dirname + '/views/thankyou.html');
        }
    });

})


app.listen(port,()=>{
    console.log(`Server started at ${port}`);
});
