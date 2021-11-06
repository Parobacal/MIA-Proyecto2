import {Request, Response} from 'express';
const database = require('../database/database');

class ProductController { 

    public async odbAddProduct(req: Request, res:Response){  
        const { fk_idCategoria, fk_correo, nombre, detalle_producto, palabras_clave, precio, me_gusta, no_me_gusta, estado} = req.body;
        console.log(fk_idCategoria);
        const imagen  = req.file.path;
        let query = `INSERT INTO producto (fk_idCategoria,fk_correo,imagen,nombre,detalle_producto,palabras_clave,precio,me_gusta,no_me_gusta,estado) 
                     VALUES ('${fk_idCategoria}','${fk_correo}','${imagen}','${nombre}','${detalle_producto}','${palabras_clave}','${precio}','${me_gusta}','${no_me_gusta}','1')`;           
        await database.simpleExecute(query);   
        res.json({text: 'Product created'});
        console.log("Product created");
    }

    public async odbAddComment(req: Request, res:Response){  
        const { fk_idProducto, fk_correo, descripcion, fecha} = req.body;
        let query = `INSERT INTO comentario (fk_idProducto,fk_correo,descripcion,fecha)
                     VALUES ('${fk_idProducto}','${fk_correo}','${descripcion}',to_date('${fecha}','YYYY-MM-DD'))`;           
        await database.simpleExecute(query);   
        res.json({text: 'Comment created'});
        console.log("Comment created");
    }

    public async odbGetComments(req: Request, res: Response){
        const{id} = req.params;
        let query = `SELECT * FROM comentario WHERE fk_idProducto = ${id}`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        console.log("Comments sent");
    }

    public async odbAddDenunce(req: Request, res:Response){  
        const { fk_idProducto, fk_correo, descripcion} = req.body;
        let query = `INSERT INTO denuncia (fk_idProducto,fk_correo,descripcion)
                     VALUES ('${fk_idProducto}','${fk_correo}','${descripcion}')`;           
        await database.simpleExecute(query);   
        res.json({text: 'Comment created'});
        console.log("Comment created");
    }

    public async odbGetDenunce(req: Request, res: Response){
        let query = `SELECT * FROM denuncia`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        console.log("Denunces sent");
    }
    
    public async odbProductList(req: Request, res: Response){
        let query = `SELECT * FROM producto`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        //res.json({text: "Product list sent"})
        console.log("Product list sent");
    }

    public async odbMore(req: Request, res: Response){
        let query = `SELECT * FROM producto ORDER BY precio DESC`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        //res.json({text: "Product list sent"})
        console.log("Product list sent");
    }

    public async odbLess(req: Request, res: Response){
        let query = `SELECT * FROM producto ORDER BY precio ASC`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        //res.json({text: "Product list sent"})
        console.log("Product list sent");
    }

    public async odbOrderByCategory(req: Request, res: Response){
        const{id} = req.params;
        let query = `SELECT * FROM producto WHERE fk_idCategoria = ${id}`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        console.log("Product detail sent");
    }

    public async odbCategoryList(req: Request, res: Response){
        let query = `SELECT * FROM categoria`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
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

    public async odbGetCart(req: Request, res: Response){
        const{id} = req.params;
        let query = `SELECT * FROM carrito WHERE fk_correo = '${id}'`;
        const result = await database.simpleExecute(query);
        
        res.send(result.rows);
        console.log("Cart sent");
    }

    public async odbClearCart(req: Request, res: Response){
        const{id} = req.params;
        let query = `DELETE carrito WHERE fk_correo = '${id}'`;
        const result = await database.simpleExecute(query);
        res.send(result.rows);
        console.log("Cart CLEAR");
    }

    public async odbDeleteProduct(req: Request, res: Response){
        const{id} = req.params;
        let query1 = `DELETE comentario WHERE fk_idProducto = '${id}'`;
        let query2 = `DELETE denuncia WHERE fk_idProducto = '${id}'`;
        let query4 = `DELETE carrito WHERE fk_idProducto = '${id}'`;
        let query3 = `DELETE producto WHERE idProducto = '${id}'`;
        await database.simpleExecute(query2);
        await database.simpleExecute(query1);
        await database.simpleExecute(query4);
        await database.simpleExecute(query3);
        res.json({text:"PRODUCT CLEAR"});
        console.log("PRODUCT CLEAR");
    }

    public async odbDeleteDenunce(req: Request, res: Response){
        const{id} = req.params;
        let query = `DELETE denuncia WHERE fk_idProducto = '${id}'`;
        await database.simpleExecute(query);
        res.json({text:"DENUNCE CLEAR"});
        console.log("DENUNCE CLEAR");
    }

    public async odbBuyCart(req: Request, res: Response){
        const{id} = req.params;
        let query1 = `SELECT fk_idProducto, fk_correo, vendedor, precio FROM carrito WHERE fk_correo = '${id}'`;
        const result1 = await database.simpleExecute(query1);
        if(result1.rows.length > 0)
        {
            for (let i = 0; i < result1.rows.length; i ++)
            {
                let query2 = `UPDATE usuario SET credito = credito + '${result1.rows[i].PRECIO}' WHERE correo = '${result1.rows[i].VENDEDOR}'`;
                let query3 = `UPDATE usuario SET credito = credito - '${result1.rows[i].PRECIO}' WHERE correo = '${id}'`;
                let query4 = `UPDATE producto SET estado = estado + 1 WHERE idProducto = '${result1.rows[i].FK_IDPRODUCTO}'`;

                await database.simpleExecute(query2);
                await database.simpleExecute(query3);
                await database.simpleExecute(query4);
            }
        }
        res.json({text: "Compra realizada"});
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

    public async odbAddCart(req: Request, res: Response){
        const {seller,fk_idProducto, fk_correo, nombre, cantidad, precio} = req.body;
        let query = `INSERT INTO carrito (vendedor,fk_idProducto,fk_correo,nombre,cantidad,precio) 
                     VALUES ('${seller}','${fk_idProducto}','${fk_correo}','${nombre}',1,'${precio}')`;           
        await database.simpleExecute(query);   
        res.json({text: 'Product created'});
        console.log("Product created");
    }
}

export const productController = new ProductController();