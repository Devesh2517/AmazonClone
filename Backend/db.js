const mongoose = require("mongoose")

const mongoURI = "mongodb://127.0.0.1:27017/Amazonclone?directConnection=true"

//connecting mongodb 
const connectToMongo = async () => {

    mongoose.connect(mongoURI, await console.log("connected to mongodb"))

}

module.exports = connectToMongo