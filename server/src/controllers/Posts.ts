const {Posts} = require("../../models");

export const getPosts = async (req:any, res:any) =>{
	const posts = await Posts.findAll();
	res.json(posts)
}

export const getPost = async (req:any, res:any) =>{
	const {id} = req.params;
	const posts = await Posts.findOne({where: {id:id}})
	res.json(posts);
}

export const createPost = async (req:any, res:any) =>{
	const {title, desc, img, cate, date } = req.body; 
	await Posts.create({title:title, desc:desc, img:img, cate:cate, date:date});
}

export const deletePost = async (req:any, res:any) =>{
	const {id} = req.params;
	const deletePost = await Posts.destroy({where:{id:id}});
	res.json({deletePost:deletePost});
}

export const updatePost = async (req:any, res:any) =>{
	const {id, title, desc, img, cate, date } = req.body; 
	await Posts.update({title:title, desc:desc, img:img, cate:cate, date:date}, {where:{id:id}});
	res.json("success");
}
