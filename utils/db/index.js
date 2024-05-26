// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.DB_NAME
        });
        console.log('✅ Connected to MongoDB');
    } catch (err) {
        console.error('❌ Could not connect to MongoDB', err);
        process.exit(1); // Exit the Node.js process with failure
    }
};

module.exports = connectDB;
