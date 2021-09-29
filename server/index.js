import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import todoRoutes from './routes/lists.js';


const app = express();
dotenv.config();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

app.use(cors());

//Sets which routes file to use for what url
app.use('/todo', todoRoutes)


//Sets a default message when navigating to the API
app.get('/', (req,res) =>{
    res.send("Hello to Liam's ToDo List API");
})

const PORT = process.env.port || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error))
