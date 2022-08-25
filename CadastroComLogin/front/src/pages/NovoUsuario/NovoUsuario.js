import React from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import { Link, useParams } from 'react-router-dom';
import './style.css';

export default function NovoUsuario(){

    //receber parametro de link
    const {usuarioId} = useParams();
    return(
        <div class="row justify-content-center align-items-center">
              
            <div class="col-sm-6">
            <form class="form-horizontal">
                <fieldset>
                    <legend>
                        {usuarioId === '0'? 'Cadastro Usuário':'Editar Usuário'}
                    </legend>

                <div >
                    <label for="exampleInputEmail1" class="form-label mt-1">Nome:</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    
                    </div>
                    <div >
                    <label for="exampleInputPassword1" class="form-label mt-1">Idade:</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>

                    <div>
                    <label for="exampleInputEmail1" class="form-label mt-1">Email:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div >
                    <label  class="form-label mt-1">Telefone:</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>

                    <div class="form-group">
                        <label  class="form-label mt-1">Endereço:</label>
                        <input type="text" class="form-control"  placeholder="Password"/>
                    </div>


                    <div class="form-group">
                        <label class="col-md-1 control-label" ></label>
                        <div class="col-md-10" >
                            <button  class="btn btn-primary">{usuarioId === '0'? 'Adicionar':'Atualizar'}</button>
                            <button  class="btn btn-danger">Cancelar</button>
                            <Link  to="/usuarios" class="btn btn-info">Voltar</Link>
                            <button  class="btn btn-dark">Sair</button>
                        </div>
                    </div>

                </fieldset>
            </form>
        </div>
    </div>
    )
}