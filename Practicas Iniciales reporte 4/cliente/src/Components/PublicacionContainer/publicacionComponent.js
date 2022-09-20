import React from 'react'
import './publicacionComponent.css';


function PublicacionComponent(props){
  return (
  <div id="container">

      <div class="card">

        <div class="card__details">

          <span class="tag">{props.Cat}</span>

          <span class="tag">{props.Curso}</span>

          <div class="name">{props.titulo}</div>

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

