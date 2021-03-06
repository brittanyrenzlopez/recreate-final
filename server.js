const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');

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

//serve static assets in prod
if (process.env.NODE_ENV === 'production') {
  //static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server's good to go on port ${port}`));
