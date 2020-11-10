import {Router} from 'express';
import {adminController} from '../controllers/adminController';

class AdminRoute{ 

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/report1', adminController.odbReport1);
        this.router.get('/report2', adminController.odbReport2);
        this.router.get('/report3', adminController.odbReport3);
        this.router.get('/report4', adminController.odbReport4);
    }
}

const adminRoute = new AdminRoute();
export default adminRoute.router; 