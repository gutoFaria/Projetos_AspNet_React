import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Login from './pages/Login';
import Usuarios from './pages/Usuarios';
import NovoUsuario from './pages/NovoUsuario/NovoUsuario';
//definir as rotas
export default function Routas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/usuarios"  element={<Usuarios/>}/>
                <Route path="/:usuarioId"  element={<NovoUsuario/>}/>
            </Routes>
        </BrowserRouter>
    )
}