import React from 'react';

function PublicacionIComponent(props){
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
        </div>


      </div>
  </div>
  );
}

export {PublicacionIComponent};