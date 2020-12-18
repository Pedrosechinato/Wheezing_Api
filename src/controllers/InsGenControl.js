const GenModel = require('../models/Genero');
const InsModel = require('../models/Instrumento');

module.exports = {
  getGeneros(req, res, next) {
    GenModel.find({}, (err, items) => {
      if (err) {
        next(err);
      } else {
        res.json(items);
      }
    });
  },

  getInstrumentos(req, res, next) {
    InsModel.find({}, (err, items) => {
      if (err) {
        next(err);
      } else {
        res.json(items);
      }
    });
  },
};
