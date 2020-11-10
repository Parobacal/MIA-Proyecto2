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
        this.router.post('/login', userController.login);
        this.router.put('/update',userController.update);
        this.router.get('/getUser/:username',userController.getUser);
    }
}

const userRoute = new UserRoute();
export default userRoute.router; // AQUI DEBERIA ACTUALIZAR

