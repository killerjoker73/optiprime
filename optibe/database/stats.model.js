const mongoose = require("mongoose")

const statsSchema = new mongoose.Schema({
    voltage:{
        required: true,
        type: Number
    },
    current:{
        required: true,
        type: Number
    },
    powerKW:{
        required: true,
        type: Number
    },
    powerKVA:{
        required: true,
        type: Number
    },
    frequency:{
        required: true,
        type: Number
    },
    enigneRPM:{
        required: true,
        type: Number
    },
    coolantTemp:{
        required: true,
        type: Number
    },
    oilPressure:{
        required: true,
        type: Number
    },

})

const Stat = mongoose.model('Stat', statsSchema)

module.exports = {Stat}