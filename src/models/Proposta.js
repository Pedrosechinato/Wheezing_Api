const mongoose = require('mongoose');

const PropostaSchema = new mongoose.Schema({
    descricao: String,
    data: String,
    hora: String,
    duracao: String,
    dataFim: String,
    dataInicio: String,
    pagamento: String,
    status: String,
    musico: Object,
    estabelecimento: Object,
    contraProposta: Boolean,
    contratanteId: String,
    contratadoId: String,
});

module.exports = mongoose.model('Proposta', PropostaSchema);