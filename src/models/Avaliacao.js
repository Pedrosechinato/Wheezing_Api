const mongoose = require('mongoose');

const AvaliacaoSchema = new mongoose.Schema({
    nota1: Number,
    nota2: Number,
    nota3: Number,
    proposta: Object,
    propostaId : String,
    descricao: String,
    contratanteId: String,
    contratanteNome: String,
    contratadoId: String,
    estado: String,
});

module.exports = mongoose.model('Avaliacao', AvaliacaoSchema);