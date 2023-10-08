let express = require('express');
let router = express.Router();

const EquipoController = require('../controllers/equipo_controller')

const control = new EquipoController

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = control.mostrar()
    res.render('equipos.ejs', {data: data})
});

router.post('/crear', function(req, res, next) {
    res.send(control.crear(req.body.name, req.body.lider_name, req.body.cat_id)) 
});

router.put('/editar', function(req, res, next) {
    res.send(control.editar(req.body.id,req.body.name, req.body.lider_name, req.body.cat_id));
});

router.delete('/eliminar', function(req, res, next) {
    res.send(control.eliminar(req.body.id));
});

router.delete('/eliminar/inscripcion', function(req, res, next) {
    res.send(control.eliminar_inscrip(req.body.id));
});

module.exports = router;