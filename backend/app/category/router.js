var express = require('express');
var router = express.Router();
const {
  index,
  viewCreate,
  actionCreate,
  viewEdit,
  actionEdit,
  actionDelete,
} = require('./controller');

/* GET home page. */
router.get('/category', index);
router.get('/category/create', viewCreate);
router.post('/category/create', actionCreate);
router.get('/category/edit/:id', viewEdit);
router.put('/category/edit/:id', actionEdit);
router.delete('/category/delete/:id', actionDelete);

module.exports = router;
