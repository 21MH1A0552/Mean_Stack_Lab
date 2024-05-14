const express=require('express');
const Routes=express.Router();

Routes.get('/',(req,res)=>{
    res.send("Welcome to AdventureTrails Application..")
})
Routes.get('/about',(req,res)=>{
    res.send("Welcome to About Section of this website")
})
Routes.get('/contact',(req,res)=>{
    res.send("Welcome to Contact Page of this Website..")
})

module.exports=Routes;
