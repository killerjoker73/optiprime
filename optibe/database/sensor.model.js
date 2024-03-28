const mongoose = require('mongoose');

// Define the schema for the Sensor model
const sensorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: String,
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
});

// Create the Sensor model
const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
