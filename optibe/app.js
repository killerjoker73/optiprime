const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/iot_data', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define schema for IoT data
const IoTDataSchema = new mongoose.Schema({
    sensorId: String,
    data: Number,
    timestamp: { type: Date, default: Date.now }
});

const IoTData = mongoose.model('IoTData', IoTDataSchema);

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/iot/data', (req, res) => {
    // Query MongoDB for all IoTData documents
    IoTData.find({})
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        console.log('Error fetching data: ', err);
        res.status(500).json({error: 'Error fetching data'});
    });
});

// POST endpoint for receiving data from IoT device
app.post('/iot/data', (req, res) => {
    const { sensorId, data } = req.body;
    if (!sensorId || !data) {
        return res.status(400).json({ error: 'Missing sensorId or data field' });
    }

    // Create new IoTData document
    const newData = new IoTData({
        sensorId,
        data,
        
    });

    // Save data to MongoDB
    newData.save()
    .then(()=>{
        console.log('Data saved successfully');
        res.status(201).json({message:'Data saved successfully'})
    })
    .catch(err =>{
        console.log('Error saving data: ', err);
        res.status(500).json({error: 'Error saving data'})
    })
});

app.get('/', (req,res)=>{
    console.log(newData);
    res.status(200).send("data")
})

const PORT = 3030 ;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
