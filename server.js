const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');

const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

// connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB is connected!'))
  .catch(err => console.log(err));

// passport
app.use(passport.initialize());
//passport config
require('./config/passport')(passport);

// use routes
app.use('/api/users', users);
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server's good to go on port ${port}`));
