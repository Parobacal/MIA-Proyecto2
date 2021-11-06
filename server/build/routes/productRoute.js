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
        this.router.get('/get-categorys-more', productController_1.productController.odbMore);
        this.router.get('/get-categorys-less', productController_1.productController.odbLess);
        this.router.get('/get-categorys', productController_1.productController.odbCategoryList);
        this.router.get('/product-list/:id', productController_1.productController.odbProductDetail);
        this.router.get('/order-category/:id', productController_1.productController.odbOrderByCategory);
        this.router.put('/add-like', productController_1.productController.odbAddLike);
        this.router.put('/add-deslike', productController_1.productController.odbAddDeslike);
        this.router.post('/add-product', multer_1.default.single('image'), productController_1.productController.odbAddProduct);
        this.router.post('/add-cart', multer_1.default.single('image'), productController_1.productController.odbAddCart);
        this.router.get('/cart/:id', productController_1.productController.odbGetCart);
        this.router.get('/cart-buy/:id', productController_1.productController.odbBuyCart);
        this.router.get('/get-comment/:id', productController_1.productController.odbGetComments);
        this.router.post('/add-comment', multer_1.default.single('image'), productController_1.productController.odbAddComment);
        this.router.post('/add-denunce', multer_1.default.single('image'), productController_1.productController.odbAddDenunce);
        this.router.get('/get-denunce', productController_1.productController.odbGetDenunce);
        this.router.delete('/cart-clear/:id', productController_1.productController.odbClearCart);
        this.router.delete('/delete-product/:id', productController_1.productController.odbDeleteProduct);
        this.router.delete('/delete-denunce/:id', productController_1.productController.odbDeleteDenunce);
    }
}
const productRoute = new ProductRoute();
exports.default = productRoute.router; // AQUI DEBERIA ACTUALIZAR
