import {Router} from 'express';
import {productController} from '../controllers/productController';
import multer from '../libs/multer';

class ProductRoute{ //

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/product-list', productController.odbProductList);
        this.router.get('/get-categorys-more', productController.odbMore);
        this.router.get('/get-categorys-less', productController.odbLess);
        this.router.get('/get-categorys', productController.odbCategoryList);
        this.router.get('/product-list/:id', productController.odbProductDetail);
        this.router.get('/order-category/:id', productController.odbOrderByCategory);
        this.router.put('/add-like', productController.odbAddLike);
        this.router.put('/add-deslike', productController.odbAddDeslike);
        this.router.post('/add-product',multer.single('image'), productController.odbAddProduct);
        this.router.post('/add-cart', multer.single('image'), productController.odbAddCart);
        this.router.get('/cart/:id', productController.odbGetCart);
        this.router.get('/cart-buy/:id', productController.odbBuyCart);
        this.router.get('/get-comment/:id', productController.odbGetComments);
        this.router.post('/add-comment', multer.single('image'), productController.odbAddComment);
        this.router.post('/add-denunce', multer.single('image'), productController.odbAddDenunce);
        this.router.get('/get-denunce', productController.odbGetDenunce);
        this.router.delete('/cart-clear/:id', productController.odbClearCart);
        this.router.delete('/delete-product/:id', productController.odbDeleteProduct);
        this.router.delete('/delete-denunce/:id', productController.odbDeleteDenunce);

    }
}

const productRoute = new ProductRoute();
export default productRoute.router; // AQUI DEBERIA ACTUALIZAR

