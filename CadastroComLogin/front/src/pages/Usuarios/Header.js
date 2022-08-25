import React from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import userLogo from '../../assets/user.png';
//import './style.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
   <img src={userLogo} className="imgLogo" alt='Usuário Logo' />
    
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item text-light">
          Cadastro de Usuários
        </li>
        <li class="nav-item">
        <Link to="/novousuario" class="btn btn-secondary my-2 my-sm-0" type="submit">Adicionar Usuário</Link>
        </li>
        <li class="nav-item">
        
        </li>
        <li class="nav-item">
         
        </li>
        <li class="nav-item dropdown">
          
          <div class="dropdown-menu">
           
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-4" type="text" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Pesquisar Usuário</button>
        <button class="btn btn-primary my-2 my-sm-0" type="submit">Sair</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}