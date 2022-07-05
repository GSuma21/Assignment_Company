

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
require("./db/conn");
const UserPublisher = require('./models/user.model')
const UserAuthor = require('./models/author.model')

app.use(cors())
app.use(express.json())


app.get('/hello',(req,res)=>{
    res.send("hello world")
})
app.post('/api/register',(req,res)=>{
    console.log(req.body)
    try{
        const user = UserPublisher.create({
            fname:req.body.fname,
            lname:req.body.lname,
            orgname:req.body.orgname,
            email:req.body.email,
            password:req.body.password,
        })
        const registered =  user.save();
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
    }
    res.json({status:'ok'})
})

app.post('/api/loginauthor',(req,res)=>{
    console.log(req.body)
    try{
        const user = UserAuthor.create({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:req.body.password,
        })
        const registered =  user.save();
        res.json({status:'ok'})
    }catch(err){
        console.log(err)
    }
    res.json({status:'ok'})
})

app.listen(8000,() =>{
    console.log("server started")
})