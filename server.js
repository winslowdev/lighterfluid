const express = require('express');
const router = require('./routes/routes.js');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(_dirname, '../'))