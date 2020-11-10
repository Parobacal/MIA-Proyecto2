"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const database = require('../database/database');
class AdminController {
    odbReport1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT  p.nombre AS PRODUCTO, u.nombre AS NOMBRE, u.apellido AS APELLIDO, p.me_gusta AS TOTAL FROM producto p, usuario u WHERE u.correo = p.fk_correo ORDER BY TOTAL DESC FETCH NEXT 10 ROWS ONLY`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            console.log("Report1 sent");
        });
    }
    odbReport2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT  p.nombre AS PRODUCTO, u.nombre AS NOMBRE, u.apellido AS APELLIDO, p.no_me_gusta AS TOTAL FROM producto p, usuario u WHERE u.correo = p.fk_correo ORDER BY TOTAL DESC FETCH NEXT 10 ROWS ONLY`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            console.log("Report2 sent");
        });
    }
    odbReport3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT  u.nombre, u.correo, u.credito, COUNT(*) AS TOTAL FROM producto p, usuario u WHERE u.correo = p.fk_correo GROUP BY u.nombre, u.correo, u.credito ORDER BY TOTAL DESC FETCH NEXT 10 ROWS ONLY`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            console.log("Report3 sent");
        });
    }
    odbReport4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT u.nombre, u.correo, u.fecha_nacimiento, u.credito FROM usuario u ORDER BY u.credito DESC`;
            const result = yield database.simpleExecute(query);
            res.send(result.rows);
            console.log("Report4 sent");
        });
    }
}
exports.adminController = new AdminController();
