import React, {useState, useEffect} from 'react'
import "./registroComponent.css"
import Axios from 'axios'

const RegistroComponent = () => {
	const [Nombres, setNombres] = useState("")
	const [Apellidos, setApellidos] = useState("")
	const [Carnet, setCarnet] = useState("")
	const [Password, setPassword] = useState("")
	const [Correo, setCorreo] = useState("")

	const registrado = () =>{
		console.log("entramos")
		Axios.post("http://localhost:3001/api/register",{
			us_nombres: Nombres,
			us_apellidos: Apellidos,
			us_carnet: Carnet,
			us_password: Password,
			us_correo: Correo,
		}).then(()=>{
			alert("se ha registrado el usuario: "+Nombres+" "+Apellidos);
		})
	};
	return (
		<div className="container">
			<h1>Registrarse</h1>
			<div className = "form">
				<label>Nombres</label>
				<input type="text" name="Nombres" onChange={(e)=>{setNombres(e.target.value);}}/>
				<label>Apellidos</label>
				<input type="text" name="Apellidos" onChange={(e)=>{setApellidos(e.target.value);}}/>
				<label>Carnet</label>
				<input type="text" name="Carnet" onChange={(e)=>{setCarnet(e.target.value);}}/>
				<label>Contraseña</label>
				<input type="text" name="Contra" onChange={(e)=>{setPassword(e.target.value);}}/>
				<label>Correo</label>
				<input type="text" name="Correo" onChange={(e)=>{setCorreo(e.target.value);}}/>
				<button onClick = {registrado}>Registrarse</button>
			</div>
		</div>
		);
}

export {RegistroComponent};