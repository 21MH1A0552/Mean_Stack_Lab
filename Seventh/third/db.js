const express=require('express')
const app=express();
const mongoose=require('mongoose')
const User=require('./model')

const url='mongodb://localhost:27017/MNST'

mongoose.connect(url)
     .then(()=>{
        console.log("Database connected Suceesfully..")
     }).catch((err)=>{
        console.log("Connection Failed")
     })


     app.listen(3000,(req,res)=>{
        console.log("Server is running on port number 3000");
     })
     app.use(express.json());

     app.post('/data', async (req, res) => {
        try {
          const { username, email, age } = req.body;
          const newUser = new User({ username, email, age });
          await newUser.save();
          res.status(201).send("Data inserted successfully.");
        } catch (error) {
          res.status(500).send("Error inserting data."+error);
        }
      });