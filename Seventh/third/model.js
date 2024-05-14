const mongoose = require('mongoose');
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

// Create a Mongoose model based on the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;
