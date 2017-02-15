var express = require('express');
var router = express.Router();
var memosController = require('../controllers/memosController.js');

/*
 * GET
 */
router.get('/', memosController.list);

/*
 * GET
 */
router.get('/:id', memosController.show);

/*
 * POST
 */
router.post('/', memosController.create);

/*
 * PUT
 */
router.put('/:id', memosController.update);

/*
 * DELETE
 */
router.delete('/:id', memosController.remove);

module.exports = router;
