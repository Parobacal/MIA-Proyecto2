"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
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
    }
}
const adminRoute = new AdminRoute();
exports.default = adminRoute.router;
