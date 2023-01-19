import express from 'express';
import cors from 'cors';
import usersRouter from './routers/users';
import authRouter from './routers/auth';
import postsRouter from './routers/posts';
const db = require("../models/index.js")
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.use("/api/auth", authRouter)
app.use("/api/users", usersRouter)
app.use("/api/posts", postsRouter)

db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	})
})