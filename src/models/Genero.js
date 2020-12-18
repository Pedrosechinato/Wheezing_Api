const mongoose = require('mongoose');

const GeneroSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Genero', GeneroSchema);