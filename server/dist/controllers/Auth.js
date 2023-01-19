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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Users = require('../../models');
const router = (0, express_1.default)();
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email, location, img } = req.body;
    yield bcrypt_1.default.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
            email: email,
            location: location,
            img: img
        });
    });
    res.json("Success");
});
exports.register = register;
const login = (req, res) => {
    res.send('login');
};
exports.login = login;
const logout = (req, res) => {
    res.send('login');
};
exports.logout = logout;
