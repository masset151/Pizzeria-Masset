const { json } = require('express');
const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const auth = require('../controllers/auth.controller')


router.post('/new',auth.crearUsuario);
router.post('/login',auth.login);
router.get('/token',validarJWT,auth.renovarToken);


module.exports = router;