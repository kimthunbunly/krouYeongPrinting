var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/:model')
  .get( async (req, res) => {
    try {
      const model = req.params.model;
      const docs = await models[model].find();

      res.json(docs);
    } catch (e) {
      res.status(402).json({error: e.message});
    }
  })
  .post( async (req, res) => {
    try {
      const model = req.params.model,
            body = req.body;
      const doc = new models[model](body);
      const result = await doc.save();

      res.json(result);
    } catch (e) {
      res.status(402).json({error: e.message});
    }
  });

router.route('/:model/:id')
  .all(async (req, res, next) => {
      next();
    })
  .get(async (req, res) => {
      try {
        const model = req.params.model,
              id = req.params.id;

        const doc = await models[model].findById(id);

        res.json(doc);
      } catch (e) {
        res.status(402).json({error: e.message});
      }
    })
  .put(async (req, res) => {
      try {
        const model = req.params.model,
              id = req.params.id,
              body = req.body;

        const doc = await models[model].findById(id);

        for (field in body) { doc[field] = body[field]; }

        const result = await doc.save();

        res.json(result);

      } catch (e) {
        res.status(402).json({error: e.message});
      }
    })
  .delete(async (req, res) => {
      try {
        const model = req.params.model,
              id = req.params.id;

        const result = await models[model].findByIdAndRemove(id);

        res.json(result);

      } catch (e) {
        res.status(402).json({error: e.message});
      }
    });

module.exports = router;
