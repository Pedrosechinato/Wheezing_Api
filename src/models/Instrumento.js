const mongoose = require('mongoose');

const InstrumentoSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Instrumento', InstrumentoSchema);