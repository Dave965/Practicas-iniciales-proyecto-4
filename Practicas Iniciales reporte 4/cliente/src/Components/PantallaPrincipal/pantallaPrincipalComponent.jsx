import {PublicacionComponent} from "../PublicacionContainer/publicacionComponent"
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import React, {useState} from 'react'
import "./pantallaPrincipalComponent.css"

function PantallaPrincipalComponent(props) {
  const navigate = useNavigate();
  const [publicaciones, setPublicaciones] = useState("")
  const pub = []
  Axios.get("http://localhost:3001/api/todosPubli").then((res)=>{
    var data = res.data;
    for(var i=0;i<data.length;i++){
        var actual=data[i];
        pub.push(<PublicacionComponent cambiar={props.selecPublicacion} id={actual.id} titulo = {actual.titulo} contenido = {actual.mensaje} usuario = {actual.nUsuario+" "+actual.aUsuario} Curso = {actual.nCurso} Cat = {actual.nCat+" "+actual.aCat} fecha = {actual.fecha.slice(0, 10)}/>);
      }
      setPublicaciones(pub);
    });
  return(
    <div>
      <button className="boton_crear" onClick={()=>{alert("Vamos a crear una nueva publicacion"); navigate("/crear");}}>crear publicacion</button>
      {publicaciones}
    </div>
  );
}

export {PantallaPrincipalComponent};
