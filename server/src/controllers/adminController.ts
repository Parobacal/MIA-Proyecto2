import {Request, Response} from 'express';
const database = require('../database/database');

class AdminController { 
    
    public async odbReport1(req: Request, res: Response){
        let query = `SELECT  p.nombre AS PRODUCTO, u.nombre AS NOMBRE, u.apellido AS APELLIDO, p.me_gusta AS TOTAL FROM producto p, usuario u WHERE u.correo = p.fk_correo ORDER BY TOTAL DESC FETCH NEXT 10 ROWS ONLY`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        console.log("Report1 sent");
    }

    public async odbReport2(req: Request, res: Response){
        let query = `SELECT  p.nombre AS PRODUCTO, u.nombre AS NOMBRE, u.apellido AS APELLIDO, p.no_me_gusta AS TOTAL FROM producto p, usuario u WHERE u.correo = p.fk_correo ORDER BY TOTAL DESC FETCH NEXT 10 ROWS ONLY`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        console.log("Report2 sent");
    }

    public async odbReport3(req: Request, res: Response){
        let query = `SELECT  u.nombre, u.correo, u.credito, COUNT(*) AS TOTAL FROM producto p, usuario u WHERE u.correo = p.fk_correo GROUP BY u.nombre, u.correo, u.credito ORDER BY TOTAL DESC FETCH NEXT 10 ROWS ONLY`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        console.log("Report3 sent");
    }

    public async odbReport4(req: Request, res: Response){
        let query = `SELECT u.nombre, u.correo, u.fecha_nacimiento, u.credito FROM usuario u ORDER BY u.credito DESC`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        console.log("Report4 sent");
    }

    public async odbReport5(req: Request, res: Response){
        let query = `SELECT p.nombre AS PRODUCTO, u.nombre AS CLIENTE, p.estado AS VENTAS FROM usuario u, producto p WHERE p.fk_correo = u.correo ORDER BY VENTAS DESC FETCH NEXT 10 ROWS ONLY`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        console.log("Report5 sent");
    }
    
}

export const adminController = new AdminController();