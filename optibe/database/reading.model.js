const mongoose = require('mongoose');

// Define the schema for the Reading model
const readingSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  sensor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sensor' // Assuming you have a Sensor model associated with the reading
  }
});

// Create the Reading model
const Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;
