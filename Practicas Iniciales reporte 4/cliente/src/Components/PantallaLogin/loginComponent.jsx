import React, {useState} from 'react'
import "./loginComponent.css"
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

const LoginComponent = (props) => {

	const navigate = useNavigate();
	const [Password, setPassword] = useState("")
	const [Correo, setCorreo] = useState("")
	props.changelogin(false);
	const login = () =>{
		Axios.post("http://localhost:3001/api/login",{
			us_correo: Correo,
			us_password: Password,
		}).then((res)=>{
			var data = res.data
			if (data.length === 1){
				props.cambiarSesion(data[0].id);
				props.changelogin(true);
				alert("login exitoso");
				navigate("/principal")
			}else{
				alert("no se consiguio el usuario");
			}
		})
		setCorreo("");
		setPassword("");
	};
	return (
		<div className="container">
			<h1>Bienvenido!</h1>
			<div className="myform">
				<label>Correo</label>
				<input type="text" name="Correo" value={Correo} onChange={(e)=>{setCorreo(e.target.value);}}/>
				<label>Contraseña</label>
				<input type="password" name="Contra" value={Password} onChange={(e)=>{setPassword(e.target.value);}}/>
				<button onClick={login}> Entrar</button>
				<div  className="vinculo" onClick={()=>{alert("vamos a registrarte"); navigate("/registrar")}}>
					registrarse
				</div>
			</div>
		</div>
		);
}
export {LoginComponent};
