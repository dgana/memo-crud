const mongoose = require('mongoose')
var memosModel = require('../models/memosModel.js');
const seedMemos = require('../seeders/memosSeed');
var format = require('date-format');

/**
 * memosController.js
 *
 * @description :: Server-side logic for managing memoss.
 */
module.exports = {
  seed: function(req, res) {
    mongoose.connection.db.dropCollection('memos', function(err, result) {
      if (err) {
        return res.status(500).json({
          message: 'Error when drop collection memos',
          error: err
        });
      }
      console.log('Dropped collection: memos')
    })
    memosModel.create(seedMemos, function(err, memos){
      if (err) {
        return res.status(500).json({
          message: 'Error when seeding memos',
          error: err
        });
      }
      return res.status(201).json(memos);
    })
  },

  seedKey: function (req, res, next) {
    if(req.header('auth') === 'admin123') {
      next()
    } else {
      res.send('You dont have access!')
    }
  },

  list: function (req, res) {
    memosModel.find(function (err, memoss) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting memos.',
          error: err
        });
      }
      return res.json(memoss);
    });
  },

  show: function (req, res) {
    var id = req.params.id;
    memosModel.findOne({_id: id}, function (err, memos) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting memos.',
          error: err
        });
      }
      if (!memos) {
        return res.status(404).json({
          message: 'No such memos'
        });
      }
      return res.json(memos);
    });
  },

  create: function (req, res) {
    var memos = new memosModel({  		title : req.body.title,  		memo : req.body.memo,  		created_at : format('dd/MM/yy, hh:mm', new Date()),  		updated_at : format('dd/MM/yy, hh:mm', new Date())
    });

    memos.save(function (err, memos) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating memos',
          error: err
        });
      }
      return res.status(201).json(memos);
    });
  },


  update: function (req, res) {
    var id = req.params.id;
    memosModel.findOne({_id: id}, function (err, memos) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting memos',
          error: err
        });
      }
      if (!memos) {
        return res.status(404).json({
          message: 'No such memos'
        });
      }

      memos.title = req.body.title ? req.body.title : memos.title;      memos.memo = req.body.memo ? req.body.memo : memos.memo;      memos.updated_at = format('dd/MM/yy, hh:mm', new Date()) ? format('dd/MM/yy, hh:mm', new Date()) : memos.updated_at;
      memos.save(function (err, memos) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating memos.',
            error: err
          });
        }
        return res.json(memos);
      });
    });
  },

  remove: function (req, res) {
    var id = req.params.id;
    memosModel.findByIdAndRemove(id, function (err, memos) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the memos.',
          error: err
        });
      }
      // return res.status(204).json(memos);
      return res.status(201).json(memos);
    });
  }
};
