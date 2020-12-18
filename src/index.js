const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const morgan = require('morgan');
const path = require("path");

const app = express();
app.use(morgan(':method :url :response-time'));

mongoose.connect(
  'mongodb+srv://tcc:tcc@cluster0-jfie4.mongodb.net/tcc?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/files', 
express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
);

routes(app);

app.listen(3333);
