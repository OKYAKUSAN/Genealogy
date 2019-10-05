var express = require("express");
var app = express();
var readpage=require("./readpage.js");

app.set("view engine","ejs");

app.use("/static",express.static("static"));

readpage(app,__dirname);

app.listen(8888,"0.0.0.0",function(){
    console.log("Server is running,port is 8888");
});