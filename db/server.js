// Import required modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
// import path from 'path';
import uploadsRoute from './routes/uploads.js';

// Initialize Express
const app = express();

// Load environment variables from a .env file
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URI from environment variables
const dbURI = process.env.MONGO_URI;

// Connect to MongoDB Atlas
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));


app.use('/', uploadsRoute); 

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
