import React, {useState, useEffect} from 'react'
import "./crearCComponent.css"
import Axios from 'axios'

const CrearComentarioComponent = (props) => {
	const [mensaje, setMensaje] = useState("")

	const crearComentario = () =>{
		var ct =Date.now();
		var date = new Intl.DateTimeFormat({ year: 'numeric', month: '2-digit', day: '2-digit'}).format(ct);
		date = date.replace(/\//g,"-");
		date = date.split("-").reverse().join("-");
		Axios.post("http://localhost:3001/api/publicarComentario",{
			us_usuario: props.usuario,
			us_publicacion: props.publicacion,
			us_mensaje: mensaje,
			us_fecha: date,
		}).then(()=>{
			alert("se ha cargado tu comentario");
		})
		setMensaje("")
	}


	return (
		<div className="containerCc">
			<div>
				<textarea  value={mensaje} onChange={(e)=>{setMensaje(e.target.value)}} maxLength="5000" className="aux_comentario" name="publicacion" placeholder="¿Algo que decir acerca de la publicacion de arriba?"/>
			</div>

			<button onClick={crearComentario}>Enviar</button>

		</div>
	)
}

export {CrearComentarioComponent};