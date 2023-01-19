"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Users = require('../../models');
const Auth_1 = require("../controllers/Auth");
const router = (0, express_1.default)();
router.post('/register', Auth_1.register);
router.post('/login', Auth_1.login);
router.post('/logout', Auth_1.logout);
exports.default = router;
