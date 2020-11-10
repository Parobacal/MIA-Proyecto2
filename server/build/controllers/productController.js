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
            const imagen = req.file.path;
            let query = `INSERT INTO producto (fk_idCategoria,fk_correo,imagen,nombre,detalle_producto,palabras_clave,precio,me_gusta,no_me_gusta,estado) 
                     VALUES ('${fk_idCategoria}','${fk_correo}','${imagen}','${nombre}','${detalle_producto}','${palabras_clave}','${precio}','${me_gusta}','${no_me_gusta}','1')`;
            yield database.simpleExecute(query);
            res.json({ text: 'Product created' });
            console.log("Product created");
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
}
exports.productController = new ProductController();
