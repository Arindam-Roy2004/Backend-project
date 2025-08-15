import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
// import express from 'express';
import { app } from './app.js';

// const app = express();

dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
    console.log("Connected to MongoDB");
    app.on('error', (err) => {
        console.error('Error in Express app:', err);
    });
})
.catch(error => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit process with failure
});

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