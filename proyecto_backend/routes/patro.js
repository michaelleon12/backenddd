let express = require('express');
let router = express.Router();

const PatroController = require('../controllers/patro_controller')

const control = new PatroController

router.post('/crear', function(req, res, next) {
    res.send(control.crear(req.body.name, req.body.lider_name, req.body.cat_id)) 
});

module.exports = router;