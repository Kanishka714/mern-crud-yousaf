const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create and export model
module.exports = mongoose.model('User', userSchema);
