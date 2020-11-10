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
        this.router.get('/product-list/:id', productController.odbProductDetail);
        this.router.put('/add-like', productController.odbAddLike);
        this.router.put('/add-deslike', productController.odbAddDeslike);
        this.router.post('/add-product',multer.single('image'), productController.odbAddProduct);
        //console.log("SI ENTRE");
    }
}

const productRoute = new ProductRoute();
export default productRoute.router; // AQUI DEBERIA ACTUALIZAR

