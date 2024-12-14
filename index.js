import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { UserRoute } from './router/user/UserRegis.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/', UserRoute);

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://devangpatil2020:patil2020@cluster0.hnyer30.mongodb.net/mydb';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});