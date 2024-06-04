const express = require('express');
const connectDB = require('./config/db_config');
// const dotenv = require('dotenv').config()
// OR
require('dotenv').config();

const app = express();
// const PORT = 5000
const PORT = process.env.PORT || 5050;


// DB Connection
connectDB();


// MIDDLEWARE - BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Default Route
app.get('/' , (req, res) => {
    res.json({
        msg : 'Welcome to CRUD API 1.0'
    });
});

app.use('/api/user', require("./routes/userRoutes"));

app.listen(PORT, ()=> {
    console.log(`Server is running at PORT : ${PORT}`)
});
