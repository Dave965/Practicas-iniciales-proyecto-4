import React, {useState, useEffect} from 'react'

import {PantallaPrincipalComponent} from "./Components/PantallaPrincipal/pantallaPrincipalComponent"
import {LoginComponent} from "./Components/PantallaLogin/loginComponent"
import {CrearPublicacionComponent} from "./Components/PantallaCrearPublicacion/crearPublicacionComponent"
import {RegistroComponent} from "./Components/PantallaRegistro/registroComponent"

import './App.css';




function App() {
  const [Sesion, setSesion] = useState("");
  //<LoginComponent cambiarSesion={setSesion}/> 
  return (
    <div className = "App">
          <LoginComponent cambiarSesion={setSesion}/> 
          <PantallaPrincipalComponent/>
          <CrearPublicacionComponent usuario={Sesion}/>
          <RegistroComponent/>

    </div>
      );
}

export default App;
