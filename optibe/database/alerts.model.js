const mongoose = required('mongoose')

const alertsSchema = new mongoose.Schema(
    {
        alertTitle:{
            type: String,
            required: true
        },

        timeofAlert:{
            type: Date,
            required: true
        },


        alertDetail:{
            type: String,
            required: true
        }

        
        
    }
)

const Alert = mongoose.model('Alert', alertsSchema)

module.exports = {Alert}