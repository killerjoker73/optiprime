const mongoose = require('mongoose')


const specificationSchema = new mongoose.Schema(
    {
        location:{
            type: String,
            required: true
        },

        sysVoltage:{
            type: Number,
            required: true
        },

        cylinder:{
            type: String,
            required: true
        },

        baateryAlter:{
            type: String,
            required: true
        },

        intakeAir:{
            type: String,
            required: true
        },

        typeOfDevice:{
            type: String,
            required: true
        }


    }
)

const Specifications = mongoose.model('Stat', specificationSchema)

module.exports = {Specifications}