import React from 'react'
import './publicacionComponent.css';


function PublicacionComponent(props){
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

          <button>Leer Mas</button>
        </div>


      </div>
  </div>
  );
}

export {PublicacionComponent};

