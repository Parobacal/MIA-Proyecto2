"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
const multer_1 = __importDefault(require("../libs/multer"));
class AdminRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/report1', adminController_1.adminController.odbReport1);
        this.router.get('/report2', adminController_1.adminController.odbReport2);
        this.router.get('/report3', adminController_1.adminController.odbReport3);
        this.router.get('/report4', adminController_1.adminController.odbReport4);
        this.router.get('/report5', adminController_1.adminController.odbReport5);
        this.router.get('/report6', adminController_1.adminController.odbReport6);
        this.router.post('/new-category', multer_1.default.single('image'), adminController_1.adminController.odbAddCategory);
    }
}
const adminRoute = new AdminRoute();
exports.default = adminRoute.router;
