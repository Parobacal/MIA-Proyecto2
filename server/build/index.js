"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const adminRoute_1 = __importDefault(require("./routes/adminRoute"));
const path_1 = __importDefault(require("path"));
const database = require('./database/database');
class Server {
    constructor() {
        this.app = express_1.default();
        this.setup();
        this.routes();
    }
    setup() {
        this.app.set('port', 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
    }
    routes() {
        this.app.use('/user', userRoute_1.default);
        this.app.use('/product', productRoute_1.default);
        this.app.use('/admin', adminRoute_1.default);
    }
    start() {
        database.initialize();
        this.app.listen(this.app.get('port'), () => {
            console.log("Server listening on port ", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
