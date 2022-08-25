import React from 'react';
import Header from './Header';
import './style.css'


export default function Usuarios(){
    return(
        <>
        <Header />
        <div class="row">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        
                        <h5 class="my-3">John Smith</h5>
                        <p class="text-muted mb-1"><span class="text-black">Nome:</span>       guto</p>
                        <p class="text-muted mb-1"><span class="text-black">Idade:</span>       guto</p>
                        <p class="text-muted mb-1"><span class="text-black">Email:</span>      guto@email.com    </p>
                        <p class="text-muted mb-1"><span class="text-black">Telefone:</span>     99887766</p>
                        <p class="text-muted mb-1"><span class="text-black">Endereço:</span>     endereço</p>
                    <div class="d-flex justify-content-center mb-2">
                    <button type="button" class="btn btn-outline-primary">Editar</button>
                    <button type="button" class="btn btn-outline-danger ms-1">Deletar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}