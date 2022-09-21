import React, {useState, useEffect} from 'react'
import {PublicacionIComponent} from "./PublicacionIndividualContainer/PIndividualComponent"
import {ComentarioComponent} from "./ComentarioComponent/comentarioComponent"
import {CrearComentarioComponent} from "./CrearComentarioComponent/crearCComponent"
import Axios from 'axios'

const VerPublicacionComponent = (props) => {
	const [comentarios, setComentarios] = useState("");
	const [publi, setPubli] = useState("");
	var coms = []
	try {
	Axios.post("http://localhost:3001/api/getPublicacion",{
			id_publicacion: props.publicacion,
		}).then((res)=>{
			var data = res.data
			setPubli(data[0])
	});

	Axios.post("http://localhost:3001/api/getComentarios",{
			id_publicacion: props.publicacion,
		}).then((res)=>{
			var data = res.data
			for(var i=0;i<data.length;i++){
		        var actual=data[i];
		        coms.push(<ComentarioComponent contenido = {actual.mensaje} usuario = {actual.nUsuario+" "+actual.aUsuario} fecha = {actual.fecha.slice(0, 10)}/>);
		      }
			setComentarios(coms)
	});
//

	return (
		<div className="container">
			<h1>Ver detalle de publicacion seleccionada</h1> 
			<PublicacionIComponent titulo = {publi.titulo} contenido = {publi.mensaje} usuario = {publi.nUsuario+" "+publi.aUsuario} Curso = {publi.nCurso} Cat = {publi.nCat+" "+publi.aCat} fecha = {publi.fecha.slice(0, 10)}/>
			{comentarios}
			<CrearComentarioComponent usuario={props.usuario} publicacion={props.publicacion}/>
		</div>
		);

	}catch(error){

	}
}

export {VerPublicacionComponent};