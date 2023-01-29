const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  telephoneNumber: {
    type: String,
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

module.exports = mongoose.model('Booking', bookingSchema);