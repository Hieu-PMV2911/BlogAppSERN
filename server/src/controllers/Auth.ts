import express from 'express';
import bcrypt from 'bcrypt';
import {sign} from 'jsonwebtoken';
const {Users} = require('../../models')
const router = express();

export const register = async (req:any, res:any) => {
	const {username, password, email, location, img} = req.body;
	const User = await Users.findOne({where: {email: email}});
	if(User) return res.status(400).json({errors: 'User exist'});
	const salt = await bcrypt.genSalt();
	await bcrypt.hash(password, salt).then((hash) => {
		Users.create({
			username: username,
			password: hash,
			email: email,
			location: location,
			img: img
		})
	});
	res.json("Success");
};

export const login = async (req:any, res:any) => {
	const {password, email} = req.body;
	const User = await Users.findOne({where: {email: email}});
	if(!User) return res.status(400).json({errors: 'User does not exist'});
	await bcrypt.compare(password, User.password).then((match) => {
		if(!match) return res.status(400).json({errors:"Wrong User or Password!!!"});
		const accessToken = sign({email: User.email, id: User.id}, "AccessToken");
		res.status(200).json({token: accessToken, email: email, user: User});
	});
};

export const logout = (req:any, res:any) => {
	res.localStorage.removeItem('currentUser');
};

