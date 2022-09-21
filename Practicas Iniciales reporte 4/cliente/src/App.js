import React, {useState, useEffect} from 'react'

import {PantallaPrincipalComponent} from "./Components/PantallaPrincipal/pantallaPrincipalComponent"
import {LoginComponent} from "./Components/PantallaLogin/loginComponent"
import {CrearPublicacionComponent} from "./Components/PantallaCrearPublicacion/crearPublicacionComponent"
import {RegistroComponent} from "./Components/PantallaRegistro/registroComponent"
import {VerPublicacionComponent} from "./Components/PantallaVerPublicacion/verPublicacionComponent"

import './App.css';




function App() {
  const [Sesion, setSesion] = useState("");
  const [Publicacion, setPublicacion] = useState("")
  //<LoginComponent cambiarSesion={setSesion}/> 
  //        <CrearPublicacionComponent usuario={Sesion}/>
  //        <RegistroComponent/>
  return (
    <div className = "App">
          <LoginComponent cambiarSesion={setSesion}/> 
          <PantallaPrincipalComponent selecPublicacion={setPublicacion}/>
          <VerPublicacionComponent publicacion={Publicacion} usuario={Sesion}/>
    </div>
      );
}

export default App;
