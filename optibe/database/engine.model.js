const mongoose = require('mongoose')

const engineSchema = new mongoose.Schema(
    {
        battery:{
            type: Number,
            required: true
        },

        temperature:{
            tpye: Number,
            required: true
        },

        voltageLinetoLine:{
            type: Number,
            required: true
        },
        
        voltageLinetoNeutral:{
            type: Number,
            required: true
        },

        current:{
            type: Number,
            required: true
        },

        powerFactor:{
            type: Number,
            required: true
        },

        frequency:{
            type: Number,
            required: true
        },

        

    }
)


const Engine = mongoose.model('Engine', engineSchema)

module.exports = {Engine}