"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("./routers/users"));
const auth_1 = __importDefault(require("./routers/auth"));
const posts_1 = __importDefault(require("./routers/posts"));
const db = require("../models/index.js");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT || 8080;
app.use("/api/auth", auth_1.default);
app.use("/api/users", users_1.default);
app.use("/api/posts", posts_1.default);
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});
