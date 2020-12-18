const HistoricoProposta = require('../models/HistoricoProposta');

module.exports ={
    async store(request,response) {
        const {
            propostaId,
            proposta,
        } = request.body;

        const prop = await HistoricoProposta.create({
            propostaId,
            proposta,
        })

        return response.json(prop);
    },

    async selectAllById(request,response) {
        const { id } = request.params;
            
        const propostas = await HistoricoProposta.find({
            propostaId: id,
        });

        return response.json(propostas);
    },
}