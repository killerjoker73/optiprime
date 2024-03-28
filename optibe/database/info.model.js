const mongoose = require("mongoose")

const detailedInfoSchema = new mongoose.Schema(
    {
        modelMake:{
            type: String,
            required: true
        },
        datePurchase:{
            type: Date,
            required: true
        },

        lastMaintenance:{
            type: Date,
            required: true
        },

        upcomingMaintenance:{
            type: Date,
            required: true
        },

        airIntakeMethod:{
            tpye: mongoose.Schema.Types.ObjectId,
            ref: "Specifications"
        }




    }
)

const DetailedInfo = mongoose.model('DetailedInfo', detailedInfoSchema)

module.exports = {DetailedInfo}