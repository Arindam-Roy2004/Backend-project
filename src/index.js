import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})
connectDB();

/*
import express from 'express';

const app = express();

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.on('error', (err) => {
            console.error('Error in Express app:', err);
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})
*/