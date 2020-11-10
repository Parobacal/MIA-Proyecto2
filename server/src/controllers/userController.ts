import {Request, Response} from 'express';
const database = require('../database/database');

class UserController { 

    public async registerUser(req: Request, res:Response){  
        const { nombre, apellido, clave, correo, fecha_nacimiento, pais, credito, estado} = req.body;
        const fotografia  = req.file.path;
        let query = `INSERT INTO usuario (nombre,apellido,clave,correo,imagen,fecha_nacimiento, pais, credito, estado) 
                     VALUES ('${nombre}','${apellido}','${clave}','${correo}','${fotografia}',to_date('${fecha_nacimiento}','YYYY-MM-DD'),'${pais}','${credito}','1')`;           
        await database.simpleExecute(query);   
        // Aqui podria ir lo del correo de confirmacion
        res.json({text: 'User created'});
        console.log("User created");
    }
    
    public async login(req: Request, res: Response) {
        //console.log(req.body.mail);
        let query = `SELECT * FROM usuario WHERE correo = '${req.body.correo}'`;
        const result = await database.simpleExecute(query);
        //console.log(result.rows[0].ESTADO);
        if(result.rows.length > 0){
            if(result.rows[0].ESTADO == 1){
                const dataUser = {
                    user: result.rows[0].nombre,
                }
                if(result.rows[0].CLAVE === req.body.password){
                    res.json({text: 'User logged'});
                    console.log("User logged");
                    res.send(dataUser);
                }else
                    res.status(501).json({Error: "Clave incorrecta"});
            }else
                res.status(500).json({Error:"Usuario inactivo"});
        }else
        res.status(404).json({Error: "El usuario no existe"});
    }
    

}

export const userController = new UserController();