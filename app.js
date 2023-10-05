const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const authRoutes = require('./routes/authroutes');

// middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');


// database connection to mongodb compass
const dbURI = ("mongodb://127.0.0.1:27017/nodetutorial");
mongoose.connect(dbURI, {useNewUrlParser:true, UseUnifiedTopology:true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);

// cookies
app.get('/set-cookies', (req, res) =>{

    res.setHeader('set-cookie', 'newUser=true');

    res.send("You got the cookies!");



})


app.get('/read-cookies', (req, res) => {



});
