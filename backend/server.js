const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session')
require('dotenv').config();
const app = express();
const db = mongoose.connection;

const PORT = 4000;
const LIGHTERFLUID_DB = process.env.LIGHTERFLUID_DB || 'mongodb://localhost:27017/'+ 'lighterfluid';
app.use(cors());
app.use(bodyParser.json());

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(LIGHTERFLUID_DB, {useNewUrlParser: true});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', LIGHTERFLUID_DB));

app.use(express.json());
app.use(express.static('public'));
app.use(session({
   secret: process.env.SECRET,
   resave: false,
   saveUninitialized: false
}));

app.get('/app', (req, res) => {
   if(req.session.currentUser) {
      res.json(req.session.currentUser)
   } else {
      res.status(401).json({
         status: 401,
         message: 'not logged in'
      })
   }
});

const userRoutes = require('./controllers/users.js')
app.use('/api/users', userRoutes);

const sessionsController = require('./controllers/sessions.js');
app.use('/api/sessions', sessionsController);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
