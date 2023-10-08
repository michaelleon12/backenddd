let express = require('express');
let router = express.Router();

const CategoriaController = require('../controllers/cate_controller')

const control = new CategoriaController

/* GET home page. */
router.get('/', function(req, res, next) {
  let data1 = control.mostrar()
  let data2 = control.mostrar_mod()
  res.render('categorias.ejs', {cat_data: data1 , mod_data: data2})
});

router.post('/crear', function(req, res, next) {
    res.send(control.crear(req.body.name, req.body.mod_id)) 
});

router.put('/editar', function(req, res, next) {
    res.send(control.editar(req.body.id,req.body.name, req.body.mod_id));
});

router.delete('/eliminar', function(req, res, next) {
    res.send(control.eliminar(req.body.id));
});

router.post('/crear/modalidad', function(req, res, next) {
    res.send(control.crear_mod(req.body.name)) 
});

module.exports = router;