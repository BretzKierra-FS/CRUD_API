const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: [20, 'Max Character lenght: 20'],
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model('Blog', blogSchema);
