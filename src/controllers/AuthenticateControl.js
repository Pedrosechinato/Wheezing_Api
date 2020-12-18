const UserModel = require('../models/User');

module.exports = {
  login(req, res, next) {
    UserModel.findOne(
      { email: req.body.email, senha: req.body.senha },
      (err, user) => {
        if (err) {
          next(err);
        } else {
          if (!user) return res.json(false);
          const { _id, typeUser } = user;
          res.json({ _id, typeUser });
        }
      }
    );
  },

  hasEmail(req, res, next) {
    UserModel.findOne({ email: req.params.email }, (err, user) => {
      if (err) {
        next(err);
      } else {
        res.json({ valido: !!user });
      }
    });
  },

  hasUserName(req, res, next) {
    UserModel.findOne({ username: req.params.username }, (err, user) => {
      if (err) {
        next(err);
      } else {
        res.json({ valido: !!user });
      }
    });
  },

  hasDoc(req, res, next) {
    UserModel.findOne({ documento: req.params.documento }, (err, user) => {
      if (err) {
        next(err);
      } else {
        res.json({ valido: !!user });
      }
    });
  },
};
