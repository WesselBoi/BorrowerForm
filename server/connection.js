const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connectToMongoDb() {
    try {
        return await mongoose.connect(process.env.MONGO_URI)
        .then(()=> console.log("Connected to MongoDB successfully!"))
        .catch((err) => console.error("Error connecting to MongoDB:", err));
    } catch (err) {
        console.error("Error in connectToMongoDb:", err);
    }
} 

module.exports = connectToMongoDb;