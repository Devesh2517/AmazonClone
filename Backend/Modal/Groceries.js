const mongoose = require("mongoose")
const { Schema }= mongoose

const GrocerieSchema = new Schema({


    Title:{
        type:String,
        Requied:true,
    },
    Image:{
        type:String,
        Requied:true
    },
    Price:{
        type:Number,
        Requied:true
    }
})

module.exports = mongoose.model('groceries',GrocerieSchema)