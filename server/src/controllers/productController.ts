import {Request, Response} from 'express';
const database = require('../database/database');

class ProductController { 

    public async odbAddProduct(req: Request, res:Response){  
        const { fk_idCategoria, fk_correo, nombre, detalle_producto, palabras_clave, precio, me_gusta, no_me_gusta, estado} = req.body;
        const imagen  = req.file.path;
        let query = `INSERT INTO producto (fk_idCategoria,fk_correo,imagen,nombre,detalle_producto,palabras_clave,precio,me_gusta,no_me_gusta,estado) 
                     VALUES ('${fk_idCategoria}','${fk_correo}','${imagen}','${nombre}','${detalle_producto}','${palabras_clave}','${precio}','${me_gusta}','${no_me_gusta}','1')`;           
        await database.simpleExecute(query);   
        res.json({text: 'Product created'});
        console.log("Product created");
    }
    
    public async odbProductList(req: Request, res: Response){
        let query = `SELECT * FROM producto`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        //res.json({text: "Product list sent"})
        console.log("Product list sent");
    }

    public async odbProductDetail(req: Request, res: Response){
        const{id} = req.params;
        let query = `SELECT * FROM producto WHERE idProducto = ${id}`;
        const result = await database.simpleExecute(query);
        res.send(result.rows[0]);
        //res.json({text: 'Product detail sent'});
        console.log("Product detail sent");
    }

    public async odbAddLike(req: Request, res: Response){
        let likes: number = req.body.ME_GUSTA + 1;
        let query = `UPDATE producto SET me_gusta = ${likes} WHERE idProducto = ${req.body.IDPRODUCTO}`;
        await database.simpleExecute(query);
        res.json({text: "Likes updated"});
    }

    public async odbAddDeslike(req: Request, res: Response){
        let deslikes: number = req.body.NO_ME_GUSTA + 1;
        let query = `UPDATE producto SET no_me_gusta = ${deslikes} WHERE idProducto = ${req.body.IDPRODUCTO}`;
        await database.simpleExecute(query);
        res.json({text: "DesLikes updated"});
    }
}

export const productController = new ProductController();