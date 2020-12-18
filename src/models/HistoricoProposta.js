const mongoose = require('mongoose');

const HistoricoPropostaSchema = new mongoose.Schema({
    propostaId: String,
    proposta: Object,
});

module.exports = mongoose.model('HistoricoProposta', HistoricoPropostaSchema);