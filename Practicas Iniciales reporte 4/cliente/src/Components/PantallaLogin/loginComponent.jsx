import React, {useState, useEffect} from 'react'
import "./loginComponent.css"
import Axios from 'axios'

const LoginComponent = () => {

	const [Password, setPassword] = useState("")
	const [Correo, setCorreo] = useState("")
	const [Sesion, setSesion] = useState("")

	const login = event =>{
		Axios.post("http://localhost:3001/api/login",{
			us_correo: Correo,
			us_password: Password,
		}).then((res)=>{
			var data = res.data
			if (data.length == 1){
				setSesion(data[0].id);
				alert("login exitoso");
			}else{
				alert("no se consiguio el usuario");
			}
			
		})
		event.target.reset();
	};
	return (
		<div className="container">
			<h1>Bienvenido!</h1>
			<form onSubmit={login} className="myform">
				<label>Correo</label>
				<input type="text" name="Correo" onChange={(e)=>{setCorreo(e.target.value);}}/>
				<label>Contraseña</label>
				<input type="text" name="Contra" onChange={(e)=>{setPassword(e.target.value);}}/>
				
				<button type="submit">Entrar</button>
			</form>
		</div>
		);
}
export {LoginComponent};
