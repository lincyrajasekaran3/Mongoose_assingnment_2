const mongoose = require('mongoose');

// Comment Schema (Subdocument)
const commentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  commentedAt: { type: Date, default: Date.now },
});

// Blog Post Schema
const blogPostSchema = new mongoose.Schema({
  title: { type: String, unique: true, minlength: 5 },
  content: { type: String, required: true, minlength: 50 },
  author: { type: String },
  tags: [String],
  category: { type: String, default: "General" },
  likes: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  comments: [commentSchema],
});

// Export the model
module.exports = mongoose.model('BlogPost', blogPostSchema);
