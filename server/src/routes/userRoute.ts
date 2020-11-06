import {Router} from 'express';
import {userController} from '../controllers/userController';
import multer from '../libs/multer';

class UserRoute{

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/register',multer.single('image'), userController.registerUser);
    }
}

const userRoute = new UserRoute();
export default userRoute.router; // AQUI DEBERIA ACTUALIZAR

