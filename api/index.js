require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')

//middleware
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));
//database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL);

//routes
app.use(userRoute)
app.use(postRoute);

app.listen(4000, console.log("server started"));
