var express = require('express');
var router = express.Router();
var memosController = require('../controllers/memosController.js');

router.post('/seed', memosController.seedKey, memosController.seed);
router.get('/', memosController.list);
router.get('/:id', memosController.show);
router.post('/', memosController.create);
router.put('/:id', memosController.update);
router.delete('/:id', memosController.remove);

module.exports = router;
