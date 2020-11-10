"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const database = require('../database/database');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey123456';
class UserController {
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, apellido, clave, correo, fecha_nacimiento, pais, credito, estado } = req.body;
            const fotografia = req.file.path;
            let query = `INSERT INTO usuario (nombre,apellido,clave,correo,imagen,fecha_nacimiento, pais, credito, estado) 
                     VALUES ('${nombre}','${apellido}','${clave}','${correo}','${fotografia}',to_date('${fecha_nacimiento}','YYYY-MM-DD'),'${pais}','${credito}','1')`;
            yield database.simpleExecute(query);
            // Aqui podria ir lo del correo de confirmacion
            res.json({ text: 'User created' });
            console.log("User created");
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = req.params;
            let query = `SELECT * FROM usuario WHERE correo = '${username}'`;
            const result = yield database.simpleExecute(query);
            if (result.rows.length > 0) {
                let date = new Date(`${result.rows[0].FECHA_NACIMIENTO}`);
                let dateFormat = '';
                const dataUser = {
                    NOMBRE: result.rows[0].NOMBRE,
                    APELLIDO: result.rows[0].APELLIDO,
                    CLAVE: result.rows[0].CLAVE,
                    CORREO: result.rows[0].CORREO,
                    FECHA_NACIMIENTO: dateFormat.concat(date.getDate().toString(), '/', (date.getMonth() + 1).toString(), '/', date.getFullYear().toString()),
                    IMAGEN: result.rows[0].IMAGEN,
                    PAIS: result.rows[0].PAIS,
                    CREDITO: result.rows[0].CREDITO
                };
                res.send(dataUser);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `UPDATE usuario
                     SET 
                        nombre = '${req.body.NOMBRE}',
                        apellido = '${req.body.APELLIDO}',
                        clave = '${req.body.CLAVE}',
                        pais = '${req.body.PAIS}'
                     WHERE correo = '${req.body.CORREO}'`;
            console.log(query);
            yield database.simpleExecute(query);
            res.json({ text: 'User updated' });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body.mail);
            let query = `SELECT * FROM usuario WHERE correo = '${req.body.correo}'`;
            const result = yield database.simpleExecute(query);
            //console.log(result.rows[0].ESTADO);
            if (result.rows.length > 0) {
                if (result.rows[0].ESTADO == 1) {
                    const newaccessToken = jwt.sign({ id: result.rows[0].CORREO }, SECRET_KEY);
                    const dataUser = {
                        user: result.rows[0].NOMBRE,
                        mail: result.rows[0].CORREO,
                        accesToken: newaccessToken
                    };
                    if (result.rows[0].CLAVE === req.body.password) {
                        res.send(dataUser);
                    }
                    else
                        res.status(501).json({ Error: "Clave incorrecta" });
                }
                else
                    res.status(500).json({ Error: "Usuario inactivo" });
            }
            else
                res.status(404).json({ Error: "El usuario no existe" });
        });
    }
}
exports.userController = new UserController();
