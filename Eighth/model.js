const mongoose = require('mongoose');
const { type } = require('os');
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    default: 18,
    min: 18,
    max: 120
  }
});

const NoteSchema=new mongoose.Schema({
    noteid:{
        type:Number,
        required: true
    },
    title:{
     type:String,
     required: true
    },
    content:{
        type:String,
        required: true
    }
})
const Note=mongoose.model('Note',NoteSchema);

// Create a Mongoose model based on the schema
const User = mongoose.model('User', UserSchema);

module.exports ={
    User,Note
} 
