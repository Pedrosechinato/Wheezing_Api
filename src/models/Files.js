const mongoose = require('mongoose');

const FilesSchema = new mongoose.Schema({
  img: String,
});

module.exports = mongoose.model('Files', FilesSchema);
