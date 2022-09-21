import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {PantallaPrincipalComponent} from "./Components/PantallaPrincipal/pantallaPrincipalComponent"
import {LoginComponent} from "./Components/PantallaLogin/loginComponent"
import {CrearPublicacionComponent} from "./Components/PantallaCrearPublicacion/crearPublicacionComponent"
import {RegistroComponent} from "./Components/PantallaRegistro/registroComponent"
import {VerPublicacionComponent} from "./Components/PantallaVerPublicacion/verPublicacionComponent"

import './App.css';




function App() {
  const [Sesion, setSesion] = useState("");
  const [Publicacion, setPublicacion] = useState("")
  const [log_in,setLog_in] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent cambiarSesion={setSesion} changelogin={setLog_in}/>}/>
          <Route path="principal" element={log_in ? (<PantallaPrincipalComponent selecPublicacion={setPublicacion}/>):(<Navigate replace to={"/"} />)} />
          <Route path="crear" element={log_in ? (<CrearPublicacionComponent usuario={Sesion} />):(<Navigate replace to={"/"} />)} />
          <Route path="ver" element={log_in ? (<VerPublicacionComponent publicacion={Publicacion} usuario={Sesion}/>):(<Navigate replace to={"/"} />)} />
          <Route path="registrar" element={<RegistroComponent />}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
