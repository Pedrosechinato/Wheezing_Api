const fs = require('fs');
const path = require('path');

const UserControl = require('./controllers/UserControl');
const AuthenticateControl = require('./controllers/AuthenticateControl');
const InsGenControl = require('./controllers/InsGenControl');
const PropostaControl = require('./controllers/PropostaControl');
const AvaliacaoControl = require('./controllers/AvaliacaoControl');
const HistoricoPropostaControl = require('./controllers/HistoricoPropostaControl');

const multer = require('multer');
const multerConfig = require('./config/multer');
const UserModel = require('./models/User');
const { response } = require('express');

module.exports = function (app) {
  app
    .get('/users', UserControl.getAllUsers)
    .post('/user', UserControl.createUser)
    .put('/user', UserControl.updateUser)
    .get('/user/:id', UserControl.getUserById)
    .delete('/user/:id', UserControl.archiveUser)

    .post('/auth', AuthenticateControl.login)
    .get('/hasEmail/:email', AuthenticateControl.hasEmail)
    .get('/hasUserName/:username', AuthenticateControl.hasUserName)
    .get('/hasDocumento/:documento', AuthenticateControl.hasDoc)

    .get('/generos', InsGenControl.getGeneros)
    .get('/instrumentos', InsGenControl.getInstrumentos)

    .post('/proposta', PropostaControl.store)
    .get('/proposta', PropostaControl.showAll)
    .get('/propostas', PropostaControl.showMy)
    .get('/propostasest', PropostaControl.showMyEst)
    .get('/propostainfo/:id', PropostaControl.showPropostaInfo)
    .put('/propostarej/:id', PropostaControl.rejectUser)
    .put('/propostaaccep/:id', PropostaControl.acceptUser)
    .put('/proposta/:id', PropostaControl.updateUser)

    .post('/avaliacao', AvaliacaoControl.store)
    .get('/avaliacao/musico/:id', AvaliacaoControl.getByMusico)
    .get('/avaliacao', AvaliacaoControl.showMy)
    .put('/avaliacao/:id', AvaliacaoControl.updateNota)

    .post('/historico', HistoricoPropostaControl.store)
    .get('/historico/:id', HistoricoPropostaControl.selectAllById)

    .post('/posts',multer(multerConfig).single('file'), async (req,res, next) =>{
      const {filename} = req.file;
      const aux = filename.substring(21,46);
      const id = aux.substring(24,0);
      console.log(id);
      const filter = { _id: id}
      const update = {img: filename} 

      // await UserModel.findOne({ _id: id }, (err, user) => {
      //   if (err) {
      //     next(err);
      //   } else {
      //     ImagemUsuario = user.img;
      //     res.json(user);
      //   }
      // });

      // if(ImagemUsuario){
      //   const imagesPath = path.resolve(__dirname, '..', '..', 'tmp', 'uploads');
      //   const userAvatarFilePath = path.join(imagesPath, ImagemUsuario); 

      //   try{
      //     await fs.promises.unlink(userAvatarFilePath);
      //   } catch(err){}
      // }

      // console.log(userAvatarFilePath);
  
      await UserModel.findOneAndUpdate(filter, update, {
        new: true
      });

     return res.status(200).send();
      
    });
};
