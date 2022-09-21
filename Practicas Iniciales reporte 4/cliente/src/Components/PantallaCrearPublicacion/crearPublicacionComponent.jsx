import DropdownList from "react-widgets/DropdownList";
import "./crearPublicacionComponent.css"
import "react-widgets/styles.css";
import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const CrearPublicacionComponent = ({usuario}) => {

	const [curso, setCurso] = useState("")
	const [cat, setCat] = useState("")
	const [titulo, setTitulo] = useState("")
	const [mensaje, setMensaje] = useState("")

	var catedraticos = []
	var cursos =[]

	Axios.get("http://localhost:3001/api/todosCat").then((res)=>{
		var data = res.data;
		for(var i=0;i<data.length;i++){
			catedraticos.push({id:data[i].id,nombre: data[i].nombres+" "+data[i].apellidos});
		}
	});

	Axios.get("http://localhost:3001/api/todosCursos").then((res)=>{
		var data = res.data;
		for(var i=0;i<data.length;i++){
			cursos.push({id:data[i].id,nombre: data[i].nombre},);
		}
	});

	const crearPublicacion = () =>{
		var ct =Date.now();
		var date = new Intl.DateTimeFormat({ year: 'numeric', month: '2-digit', day: '2-digit'}).format(ct);
		date = date.replace(/\//g,"-");
		date = date.split("-").reverse().join("-");
		Axios.post("http://localhost:3001/api/publicar",{
			us_usuario: usuario,
			us_catedratico: cat,
			us_titulo: titulo,
			us_mensaje: mensaje,
			us_fecha: date,
			us_curso: curso,
		}).then(()=>{
			alert("se ha creado la publicacion: "+titulo);
		})
		setCurso("");
		setCat("");
		setTitulo("");
		setMensaje("");
	}


	return (
		<div className="container">
			<h1>Crea una publicación</h1>
			
			<div className="form">
				<label className="guia"> Curso:  </label>

				<DropdownList 
					dataKey="id"
					textField="nombre" 
					onChange={(seleccion) => {setCurso(seleccion.id)}} 
					className="dropD" 
					defaultValue=""
					 data={cursos}/>

			</div>
			<div className="form">
				<label className="guia"> Catedratico:  </label>
				<DropdownList 
					dataKey="id"
					textField="nombre" 
					onChange={(seleccion) => {setCat(seleccion.id)}} 
					className="dropD" 
					defaultValue=""
					 data={catedraticos}/>
			</div>
			<div className="form">
				<h4 className="guia"> Titulo de la publicación:  </h4>
				<input value={titulo} onChange={(e)=>{setTitulo(e.target.value)}} className="titulo" type="text" name="Titulo"/>
			</div>
			<div>
				<textarea  value={mensaje} onChange={(e)=>{setMensaje(e.target.value)}} maxLength="5000" className="comentario" name="publicacion" placeholder="Comentario acerca del curso y/o Catedrátic@"/>
			</div>

			<button onClick={crearPublicacion}>Enviar</button>

		</div>
	)
}

export {CrearPublicacionComponent};