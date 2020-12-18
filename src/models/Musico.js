const mongoose = require('mongoose');

const MusicoSchema = new mongoose.Schema({
  username: String,
  apelido: String,
  email: String,
  documento: String,
  descricao: String,
  endereco: String,
  cidade: String,
  uf: String,
  generos: Object,
  instrumentos: Object,
  senha: String,
  latitude: String,
  longitude: String,
  bio: String,
  img: String,
  typeUser: String
});

module.exports = mongoose.model('Musico', MusicoSchema);
