const mongoose = require("mongoose");

module.exports= mongoose.connect('mongomongodb://sudeepjoel:Amma745^&@ds249311.mlab.com:49311/sudeepdb',{ useNewUrlParser: true },function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Successfully Connected to the DataBase");
    }
})
