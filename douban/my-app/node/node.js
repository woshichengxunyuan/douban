var exp=require("express");
var mon=require("mongoose");


var app=exp();

app.get("/login",function(req,res){
    console.log(1234);
    res.send("ok");
})

app.listen(8888);