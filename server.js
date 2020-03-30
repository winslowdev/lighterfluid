const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const db = mongoose.connection'
const router = require('./routes/routes.js');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

mongoose.connect(lighterfluid, { useNewParser: true })

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

dn.on('connected' () => console.log('mongo connected');)

app.set('view engine', 'ejs');
app.set('views', path.join(_dirname, '../'))

app.listen(PORT, () => console.log( 'Listening on port:', PORT));
