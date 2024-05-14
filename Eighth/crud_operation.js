const express=require('express')
const app=express();
const mongoose=require('mongoose')
const {User,Note} =require('./model')

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
app.get('/getData', async (req, res) => {
    try{
       const Data=await User.find();
       res.json(Data);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
      }
 })

 app.put('/:age', async (req, res) => {
    const age = req.params.age;
    const newData = req.body;
    try {
      const updatedData = await User.updateMany({ age: age }, newData, { new: true });
      res.json(updatedData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app.delete('/:username', async (req, res) => {
    const nameToDelete = req.params.username;
    console.log(nameToDelete)
    try {
        const deletedData = await User.findOneAndDelete({ username: nameToDelete });
        if (!deletedData) {
            return res.status(404).json({ message: "Data not found." });
        }
        res.json(deletedData);
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: error.message });
    }
});

app.post('/Notedata', async (req, res) => {
    try {
      const data = req.body;
      const newNote = new Note(data);
      await newNote.save();
      res.status(201).send("Data inserted successfully.");
    } catch (error) {
      res.status(500).send("Error inserting data."+error);
    }
  });


app.get('/note/getData', async (req, res) => {
    try{
       const Data=await Note.find();
       res.json(Data);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
      }
 })
 app.get('/note/getData/:title', async (req, res) => {
    const title=req.params.title;
    try{
        const data = await Note.findOne({ title: title });

       res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
      }
 })
 app.put('/note/updateData/:title', async (req, res) => {
    const title = req.params.title;
    const newData = req.body;

    try {
        const updatedData = await Note.findOneAndUpdate({ title: title }, newData, { new: true });
        if (!updatedData) {
            return res.status(404).json({ message: "Note not found." });
        }
        res.json(updatedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
