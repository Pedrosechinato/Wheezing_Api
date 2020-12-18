const Proposta = require('../models/Avaliacao');

module.exports ={
    async store(request,response) {
        const { proposta, propostaId, contratanteId, contratadoId, descricao, contratanteNome } = request.body;

        const estado = 'pendente';

        const avaliacao = await Proposta.create({
            nota1: 0,
            nota2: 0,
            nota3: 0,
            descricao,
            contratanteNome,
            proposta,
            propostaId,
            contratanteId,
            contratadoId,
            estado,
        })

        return response.json(avaliacao);
    },

    async showMy(request,response) {
      const { id, estado } = request.query;
                      
      const avaliacao = await Proposta.find({
          contratanteId: id,
          estado,
      });

      return response.json(avaliacao);
  },

  async getByMusico(request,response) {
    const { id } = request.params;
    const estado = "avaliado";
                    
    const avaliacao = await Proposta.find({
        contratadoId: id,
        estado,
    });

    return response.json(avaliacao);
},

    async updateNota(req, res, next) {
        const {params} = req;
        console.log(params);
        const {nota1, nota2, nota3, descricao} = req.body
        console.log(req.body);
    
        Proposta.findOneAndUpdate({ _id: params.id }, 
            { estado : 'avaliado',   
                nota1: nota1,
                nota2: nota2,
                nota3: nota3,
                descricao: descricao,
            },{ new: true },
          (err, user) => {
            if (err) {
              next(err);
            } else {
              res.json(user);
            }
          }
        );
      },
    
}