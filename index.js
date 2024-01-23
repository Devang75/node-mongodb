import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { UserRoute } from './router/user/UserRegis.js';
import cors from 'cors';

const app = express();
const port = 5500;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res) => {
    res.send("Hello World")
})

//router
app.use('/',UserRoute);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });


app.listen(port, () => {
    console.log('Server is running on port ' + port);
  });