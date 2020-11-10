import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import path from 'path';

const database = require('./database/database');

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.setup();
        this.routes();
    }

    setup(): void{
        this.app.set('port', 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use('/uploads',express.static(path.resolve('uploads')))
    }

    routes():void{
        this.app.use('/user', userRoute);
        this.app.use('/product', productRoute);
    }

    start(): void{
        database.initialize();
       this.app.listen(this.app.get('port'), () => {
           console.log("Server listening on port ", this.app.get('port'));
       });
    }
}

const server = new Server();
server.start();