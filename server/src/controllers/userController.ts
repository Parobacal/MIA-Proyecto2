import {Request, Response} from 'express';
const database = require('../database/database');

class UserController { 

    public async registerUser(req: Request, res:Response){  
        const { nombre, apellido, clave, correo, fecha_nacimiento, pais, credito, estado} = req.body;
        const fotografia  = req.file.path;
        let query = `INSERT INTO usuario (nombre,apellido,clave,correo,imagen,fecha_nacimiento, pais, credito, estado) 
                     VALUES ('${nombre}','${apellido}','${clave}','${correo}','${fotografia}',to_date('${fecha_nacimiento}','YYYY-MM-DD'),'${pais}','${credito}','${estado}')`;           
        await database.simpleExecute(query);   
        
        res.json({text: 'User created'});
        console.log("User created");
    }

}

export const userController = new UserController();