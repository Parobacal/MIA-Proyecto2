"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const multer_1 = __importDefault(require("../libs/multer"));
class UserRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/register', multer_1.default.single('image'), userController_1.userController.registerUser);
        this.router.post('/login', userController_1.userController.login);
        this.router.put('/update', userController_1.userController.update);
        this.router.get('/getUser/:username', userController_1.userController.getUser);
    }
}
const userRoute = new UserRoute();
exports.default = userRoute.router; // AQUI DEBERIA ACTUALIZAR
