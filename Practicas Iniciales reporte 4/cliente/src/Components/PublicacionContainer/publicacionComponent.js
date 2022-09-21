import React from 'react';
import './publicacionComponent.css';
import { useNavigate } from "react-router-dom";

function PublicacionComponent(props){
  const navigate = useNavigate()
  return (
  <div id="container_card">

      <div className="card">

        <div className="card__details">

          <span className="tag">{props.Cat}</span>

          <span className="tag">{props.Curso}</span>

          <div className="name">{props.titulo}</div>

          <p>{props.contenido}</p>

          <p>publicacion hecha el: {props.fecha}</p>
          <p>Autor: {props.usuario}</p>

          <button onClick={()=>{props.cambiar(props.id); navigate("/ver")}}>Leer Mas</button>
        </div>


      </div>
  </div>
  );
}

export {PublicacionComponent};

