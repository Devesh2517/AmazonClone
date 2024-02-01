const Mongoose = require("mongoose")
const { Schema }= Mongoose

const BucketSchema = new Schema({
    user:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
    ,
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

const bucket = Mongoose.model('bucket',BucketSchema)
module.exports = bucket