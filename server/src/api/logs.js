const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const entries = await LogEntry.findById(req.params.id);
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  LogEntry.findByIdAndDelete(req.params.id)
    .then(entry => {
      if (!entry) {
        return res.status(404).send({
          message: `Product not found with id ${req.params.id}`,
        });
      }
      res.send({ message: 'Product deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: `Product not found with id ${req.params.id}`,
        });
      }
      return res.status(500).send({
        message: `Could not delete product with id ${req.params.id}`,
      });
    });
});

router.put('/:id', async (req, res) => {
  // validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Log entry content can not be empty',
    });
  }

  // find and update product with the request body
  LogEntry.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    phone: req.body.phone,
    accepted: req.body.accepted,
    website: req.body.website,
  })
    .then(entry => {
      if (!entry) {
        return res.status(404).send({
          message: `Product not found with id ${req.params.id}`,
        });
      }
      res.send(entry);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `entry not found with id ${req.params.id}`,
        });
      }
      return res.status(500).send({
        message: `something went wrong updating the id ${req.params.id}`,
      });
    });
});

module.exports = router;
