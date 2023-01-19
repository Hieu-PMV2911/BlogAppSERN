import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext:any = createContext("");

export const AuthContextProvider= ({children}:any) =>{
	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")!) || null);
	
	const login = async (input:any) =>{
		const res = await axios.post('http://localhost:8080/api/auth/login',input);
		setCurrentUser(res.data);
	}

	const logout = async (input:any) =>{
		// await axios.post('http://localhost:8080/api/auth/logout',input);
		localStorage.removeItem('currentUser');
	}

	useEffect(()=>{
		localStorage.setItem('currentUser',JSON.stringify(currentUser));
	},[currentUser])
	return (
		<AuthContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	)

}

