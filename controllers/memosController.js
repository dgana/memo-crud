var memosModel = require('../models/memosModel.js');

/**
 * memosController.js
 *
 * @description :: Server-side logic for managing memoss.
 */
module.exports = {

    /**
     * memosController.list()
     */
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

    /**
     * memosController.show()
     */
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

    /**
     * memosController.create()
     */
    create: function (req, res) {
        var memos = new memosModel({			title : req.body.title,			memo : req.body.memo,			created_at : req.body.created_at,			updated_at : req.body.updated_at
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

    /**
     * memosController.update()
     */
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

            memos.title = req.body.title ? req.body.title : memos.title;			memos.memo = req.body.memo ? req.body.memo : memos.memo;			memos.created_at = req.body.created_at ? req.body.created_at : memos.created_at;			memos.updated_at = req.body.updated_at ? req.body.updated_at : memos.updated_at;			
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

    /**
     * memosController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        memosModel.findByIdAndRemove(id, function (err, memos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the memos.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
