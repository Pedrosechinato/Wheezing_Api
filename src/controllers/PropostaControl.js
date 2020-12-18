const Proposta = require('../models/Proposta');

module.exports ={
    async store(request,response) {
        const {
            descricao,
            data,
            hora,
            dataInicio,
            dataFim,
            pagamento,
            duracao,
            musico,
            estabelecimento,
            contratanteId,
            contratadoId
        } = request.body;

        const status = false;

        const prop = await Proposta.create({
            descricao,
            data,
            hora,
            dataInicio,
            dataFim,
            pagamento,
            duracao,
            status,
            musico,
            estabelecimento,
            contratanteId,
            contratadoId,
            contraProposta: false,
        })

        return response.json(prop);
    },

    async showAll(request,response) {
        const propostas = await Proposta.find();

        return response.json(propostas);
    },

    async showMy(request,response) {
        const { id, status } = request.query;
        console.log(id);
        
        const propostas = await Proposta.find({
            contratadoId: id,
            status,
        });

        return response.json(propostas);
    },

    async showMyEst(request,response) {
      const { id, status } = request.query;
      console.log(id);
      
      const propostas = await Proposta.find({
          contratanteId: id,
          status,
      });

      return response.json(propostas);
  },

  async showPropostaInfo(request,response) {
    console.log(request.params);
    const { id } = request.params;
    console.log(id);
    
    const proposta = await Proposta.findOne({
        _id: id,
    });
    console.log(proposta);

    return response.json(proposta);
},

updateUser(req, res, next) {
  const { body, params, query } = req;
  console.log({ body, params, query });

  Proposta.findOneAndUpdate(
    { _id: params.id },
    body,
    { new: true },
    (err, user) => {
      if (err) {
        next(err);
      } else {
        res.json(user);
      }
    }
  );
},

    async rejectUser(req, res, next) {
        const {params} = req;
        console.log(params);
    
        Proposta.findOneAndUpdate({ _id: params.id }, { status : 'reject'},{ new: true },
          (err, user) => {
            if (err) {
              next(err);
            } else {
              res.json(user);
            }
          }
        );
      },

      async acceptUser(req, res, next) {
        const {params} = req;
        console.log(params);
    
        Proposta.findOneAndUpdate({ _id: params.id }, { status : 'accepted'},{ new: true },
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