const {response} = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/auth');
const bcrypt = require('bcryptjs');
const {generarJWT} = require('../helpers/jwt')



const crearUsuario = async (req,res = response) => {
    const {email,nombre,password} = req.body;
    try{
        console.log(email,nombre,password);
        const usuario = await Usuario.findOne({email});

        if(usuario){
            return res.status(400).json({
                msg:"ya existe un usuario con ese email"
            });
        }

        const dbUser = new Usuario(req.body);
        console.log(dbUser);
        const salt = bcrypt.genSaltSync(10);
        dbUser.password = bcrypt.hashSync(password,salt)

       const token = await generarJWT(dbUser.id,nombre);

        await dbUser.save();

        return res.status(201).json({
            ok:true,
            uid:dbUser.id,
            nombre,
            token
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg:'se ha producido un error contacte con el administrador'
        })
    }
}

const login = async (req,res = response) => {
    const {email,password} = req.body;

    try{
        const dbUser = await Usuario.findOne({email});

        if(!dbUser){
            return res.status(400).json({
                msg:"el correo no existe"
            });
        }


        const validPassword = bcrypt.compareSync(password,dbUser.password);

        if(!validPassword){
            return res.status(400).json({
                msg:"error de autenticación"
            });
        }

        const token = await generarJWT(dbUser.id,dbUser.nombre);

        return res.json({
            ok:true,
            msg:'bienvenido',
            email,
            token
        });


    }catch(error){

        return res.status(500).json({
            msg:'Por favor contacte con el administrador'
        });

    }
}

const renovarToken = async (req,res) => {
    const {uid,nombre} = req

    const token = await generarJWT(uid,nombre)

    res.status(200).json({
        ok:true,
        uid,
        nombre,
        token
    })
}



module.exports = {
    crearUsuario,
    login,
    renovarToken
  
}