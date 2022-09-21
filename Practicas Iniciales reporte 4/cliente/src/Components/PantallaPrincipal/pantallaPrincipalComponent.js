import {PublicacionComponent} from "../PublicacionContainer/publicacionComponent"
import Axios from 'axios'
import React, {useState, useEffect} from 'react'

function PantallaPrincipalComponent(props) {
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
      {publicaciones}
    </div>
  );
}

export {PantallaPrincipalComponent};
