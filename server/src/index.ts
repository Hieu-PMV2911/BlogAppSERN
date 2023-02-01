import express from 'express';
import cors from 'cors';
import usersRouter from './routers/users';
import authRouter from './routers/auth';
import postsRouter from './routers/posts';
import multer from 'multer';
const db = require("../models/index.js")
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, '../client/public/')
	},
	filename: function (req, file, cb) {
	  cb(null, Date.now() + file.originalname)
	}
      })
const upload = multer({ storage : storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
	const file:any = req.file;
	res.status(200).json(file.filename);
})

app.use("/api/auth", authRouter)
app.use("/api/users", usersRouter)
app.use("/api/posts", postsRouter)

db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	})
})