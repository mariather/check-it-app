const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');


/*const routes = require('./controllers');
const sequelize = require('./config/connection');*/

const app = express();
const PORT = process.env.PORT || 8080;