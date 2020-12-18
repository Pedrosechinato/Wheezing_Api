const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: String,
  apelido: String,
  username: String,
  email: String,
  senha: String,
  documento: String,
  descricao: String,
  endereco: String,
  cidade: String,
  uf: String,
  generos: [Object],
  instrumentos: [Object],
  cep: String,
  logradouro: String,
  bairro: String,
  complemento: String,
  bio: String,
  img: String,
  typeUser: String,
  arquivado: Boolean,
  nota: Number,
});

module.exports = mongoose.model('User', UserSchema);
