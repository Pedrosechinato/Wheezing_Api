const UserModel = require('../models/User');

module.exports = {
  createUser(req, res, next) {
    let user = new UserModel(req.body);

    user.save(function (err) {
      if (err) {
        next(err);
      } else {
        res.json(user);
      }
    });
  },

  updateUser(req, res, next) {
    const { body, params, query } = req;
    console.log({ body, params, query });

    UserModel.findOneAndUpdate(
      { _id: body._id },
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

  getUserById(req, res, next) {
    UserModel.findOne({ _id: req.params.id }, (err, user) => {
      if (err) {
        next(err);
      } else {
        res.json(user);
      }
    });
  },

  getAllUsers(req, res, next) {
    const { typeUser, cidade, uf, instrumentos, generos } = req.query;

    const query = {
      'generos.name': { $in: generos },
      'instrumentos.name': { $in: instrumentos },
      uf: { $regex: uf, $options: 'gmi' },
      cidade: { $regex: cidade, $options: 'gmi' },
      typeUser: { $eq: typeUser },
      archived: { $ne: true },
    };

    function cleanQuery(query) {
      Object.entries(query).forEach(([key, value]) =>
        Object.values(value).map((item) => !item && delete query[key])
      );
      return query;
    }

    UserModel.find(cleanQuery(query), function (err, users) {
      if (err) {
        next(err);
      } else {
        res.json(users);
      }
    });
  },

  archiveUser(req, res, next) {
    UserModel.findOne({ id: req.params.id }, (err, user) => {
      if (err) {
        next(err);
      } else {
        user.archived = true;
        user.save();
      }
    });
  },
};
