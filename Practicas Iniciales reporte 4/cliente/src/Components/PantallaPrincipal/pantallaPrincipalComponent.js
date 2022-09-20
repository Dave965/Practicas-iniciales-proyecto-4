import {PublicacionComponent} from "../PublicacionContainer/publicacionComponent"


var datos = [
  {"titulo":"Primera publicacion", "contenido":"Doe", "usuario":"David Noriega", "Curso":"practicas iniciales", "Cat":"Floriza", "fecha":"19-9-2022"},
  {"titulo":"Segunda publicacion", "contenido":"Doe", "usuario":"David Noriega", "Curso":"IPC2", "Cat":"William", "fecha":"19-9-2022"},
  {"titulo":"Tercera publicacion", "contenido":"Doe", "usuario":"David Noriega", "Curso":"LFP", "Cat":"Estuardo","fecha":"19-9-2022"}
]


function PantallaPrincipalComponent() {
  let publicaciones = []
  for(var i =0;i<datos.length;i++){
    var obj = datos[i];
    publicaciones.push(<PublicacionComponent titulo = {obj["titulo"]} contenido = {obj["contenido"]} usuario = {obj["usuario"]} Curso = {obj["Curso"]} Cat = {obj["Cat"]} fecha = {obj["fecha"]}/>)
  }
  return(
    <div>
      {publicaciones}
    </div>
  );
}

export {PantallaPrincipalComponent};
