var express = require('express');
var router = express.Router();
const { index, viewCreate, actionCreate } = require('./controller');

/* GET home page. */
router.get('/category', index);
router.get('/category/create', viewCreate);
router.post('/category/create', actionCreate);

module.exports = router;
