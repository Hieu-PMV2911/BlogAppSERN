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

export const createPost = (req:any, res:any) =>{
	
}

export const deletePost = (req:any, res:any) =>{
	
}

export const updatePost = (req:any, res:any) =>{
	
}
