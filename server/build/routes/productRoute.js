"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const multer_1 = __importDefault(require("../libs/multer"));
class ProductRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/product-list', productController_1.productController.odbProductList);
        this.router.get('/product-list/:id', productController_1.productController.odbProductDetail);
        this.router.put('/add-like', productController_1.productController.odbAddLike);
        this.router.put('/add-deslike', productController_1.productController.odbAddDeslike);
        this.router.post('/add-product', multer_1.default.single('image'), productController_1.productController.odbAddProduct);
        //console.log("SI ENTRE");
    }
}
const productRoute = new ProductRoute();
exports.default = productRoute.router; // AQUI DEBERIA ACTUALIZAR
