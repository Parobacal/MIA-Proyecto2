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
exports.productController = void 0;
const database = require('../database/database');
class ProductController {
    odbAddProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fk_idCategoria, fk_correo, nombre, detalle_producto, palabras_clave, precio, me_gusta, no_me_gusta, estado } = req.body;
            console.log(fk_idCategoria);
            const imagen = req.file.path;
            let query = `INSERT INTO producto (fk_idCategoria,fk_correo,imagen,nombre,detalle_producto,palabras_clave,precio,me_gusta,no_me_gusta,estado) 
                     VALUES ('${fk_idCategoria}','${fk_correo}','${imagen}','${nombre}','${detalle_producto}','${palabras_clave}','${precio}','${me_gusta}','${no_me_gusta}','1')`;
            yield database.simpleExecute(query);
            res.json({ text: 'Product created' });
            console.log("Product created");
        });
    }
    odbAddComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fk_idProducto, fk_correo, descripcion, fecha } = req.body;
            let query = `INSERT INTO comentario (fk_idProducto,fk_correo,descripcion,fecha)
                     VALUES ('${fk_idProducto}','${fk_correo}','${descripcion}',to_date('${fecha}','YYYY-MM-DD'))`;
            yield database.simpleExecute(query);
            res.json({ text: 'Comment created' });
            console.log("Comment created");
        });
    }
    odbGetComments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let query = `SELECT * FROM comentario WHERE fk_idProducto = ${id}`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            console.log("Comments sent");
        });
    }
    odbAddDenunce(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fk_idProducto, fk_correo, descripcion } = req.body;
            let query = `INSERT INTO denuncia (fk_idProducto,fk_correo,descripcion)
                     VALUES ('${fk_idProducto}','${fk_correo}','${descripcion}')`;
            yield database.simpleExecute(query);
            res.json({ text: 'Comment created' });
            console.log("Comment created");
        });
    }
    odbGetDenunce(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM denuncia`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            console.log("Denunces sent");
        });
    }
    odbProductList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM producto`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            //res.json({text: "Product list sent"})
            console.log("Product list sent");
        });
    }
    odbMore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM producto ORDER BY precio DESC`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            //res.json({text: "Product list sent"})
            console.log("Product list sent");
        });
    }
    odbLess(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM producto ORDER BY precio ASC`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            //res.json({text: "Product list sent"})
            console.log("Product list sent");
        });
    }
    odbOrderByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let query = `SELECT * FROM producto WHERE fk_idCategoria = ${id}`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            console.log("Product detail sent");
        });
    }
    odbCategoryList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM categoria`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            console.log("Product list sent");
        });
    }
    odbProductDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let query = `SELECT * FROM producto WHERE idProducto = ${id}`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows[0]);
            //res.json({text: 'Product detail sent'});
            console.log("Product detail sent");
        });
    }
    odbGetCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let query = `SELECT * FROM carrito WHERE fk_correo = '${id}'`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            console.log("Cart sent");
        });
    }
    odbClearCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let query = `DELETE carrito WHERE fk_correo = '${id}'`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            console.log("Cart CLEAR");
        });
    }
    odbDeleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let query1 = `DELETE comentario WHERE fk_idProducto = '${id}'`;
            let query2 = `DELETE denuncia WHERE fk_idProducto = '${id}'`;
            let query4 = `DELETE carrito WHERE fk_idProducto = '${id}'`;
            let query3 = `DELETE producto WHERE idProducto = '${id}'`;
            yield database.simpleExecute(query2);
            yield database.simpleExecute(query1);
            yield database.simpleExecute(query4);
            yield database.simpleExecute(query3);
            res.json({ text: "PRODUCT CLEAR" });
            console.log("PRODUCT CLEAR");
        });
    }
    odbDeleteDenunce(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let query = `DELETE denuncia WHERE fk_idProducto = '${id}'`;
            yield database.simpleExecute(query);
            res.json({ text: "DENUNCE CLEAR" });
            console.log("DENUNCE CLEAR");
        });
    }
    odbBuyCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let query1 = `SELECT fk_idProducto, fk_correo, vendedor, precio FROM carrito WHERE fk_correo = '${id}'`;
            const result1 = yield database.simpleExecute(query1);
            if (result1.rows.length > 0) {
                for (let i = 0; i < result1.rows.length; i++) {
                    let query2 = `UPDATE usuario SET credito = credito + '${result1.rows[i].PRECIO}' WHERE correo = '${result1.rows[i].VENDEDOR}'`;
                    let query3 = `UPDATE usuario SET credito = credito - '${result1.rows[i].PRECIO}' WHERE correo = '${id}'`;
                    let query4 = `UPDATE producto SET estado = estado + 1 WHERE idProducto = '${result1.rows[i].FK_IDPRODUCTO}'`;
                    yield database.simpleExecute(query2);
                    yield database.simpleExecute(query3);
                    yield database.simpleExecute(query4);
                }
            }
            res.json({ text: "Compra realizada" });
        });
    }
    odbAddLike(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let likes = req.body.ME_GUSTA + 1;
            let query = `UPDATE producto SET me_gusta = ${likes} WHERE idProducto = ${req.body.IDPRODUCTO}`;
            yield database.simpleExecute(query);
            res.json({ text: "Likes updated" });
        });
    }
    odbAddDeslike(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let deslikes = req.body.NO_ME_GUSTA + 1;
            let query = `UPDATE producto SET no_me_gusta = ${deslikes} WHERE idProducto = ${req.body.IDPRODUCTO}`;
            yield database.simpleExecute(query);
            res.json({ text: "DesLikes updated" });
        });
    }
    odbAddCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { seller, fk_idProducto, fk_correo, nombre, cantidad, precio } = req.body;
            let query = `INSERT INTO carrito (vendedor,fk_idProducto,fk_correo,nombre,cantidad,precio) 
                     VALUES ('${seller}','${fk_idProducto}','${fk_correo}','${nombre}',1,'${precio}')`;
            yield database.simpleExecute(query);
            res.json({ text: 'Product created' });
            console.log("Product created");
        });
    }
}
exports.productController = new ProductController();
