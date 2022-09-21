import React from 'react';
import "./comentarioComponent.css"

function ComentarioComponent(props){
  return (
  <div className="container_comentario">

      <div className="card_comentario">

        <div className="card__details">

          <span className="tag">{props.usuario} Comentó: </span>

          <p>{props.contenido}</p>

          <p>hecho el: {props.fecha}</p>

        </div>

      </div>
  </div>
  );
}

export {ComentarioComponent};