const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  starts: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }
})

module.exports = mongoose.model('Comment', commentSchema);
