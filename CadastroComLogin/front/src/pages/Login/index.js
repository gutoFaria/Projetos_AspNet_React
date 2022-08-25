import React from 'react';
import './style.css';
import loginImage from '../../assets/login.png';

// npm instalar react-router para navegar entre as páginas
export default function Login(){
    return(
        <>
        <div class="sidenav">
            <div class="login-main-text">
                <div class="login-img">
                    <img src={loginImage} alt="Login" id="img1"/>
                </div>
                <h2>Applicação Cadastro de Usuário<br/> Página de Login</h2>
                <p>Consumindo um api AspNet com React .</p>
            </div>
        </div>
        <div class="main">
            <div class="col-md-6 col-sm-12">
                <div class="login-form">
                <form>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn btn-black">Login</button>
                    <button type="submit" class="btn btn-secondary">Register</button>
                </form>
                </div>
            </div>
        </div>
      </>
    )
}