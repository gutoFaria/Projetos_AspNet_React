import './App.css';
import "bootswatch/dist/sketchy/bootstrap.min.css";
import axios from 'axios';
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
import user from './assets/user.png' 
import { useEffect, useState } from 'react';

function App() {

  const baseUrl = "https://localhost:7271/api/Usuario";
  const [data,setData] = useState([]);

  //evitar o loop
  const [updateData, setUpdateData] = useState(true);

  //controlar a janela modal
  const [modalIncluir,setModalIncluir]=useState(false);
  const abrirFecharModalIncluir=()=>{
    setModalIncluir(!modalIncluir);
  }

   //controlar a janela modal editar
   const [modalEditar,setModalEditar]=useState(false);
   const abrirFecharModalEditar=()=>{
     setModalEditar(!modalEditar);
   }

    //controlar a janela modal excluir
    const [modalExcluir,setModalExcluir]=useState(false);
    const abrirFecharModalExcluir=()=>{
      setModalExcluir(!modalExcluir);
    }

   //Editar ou Exclur usuário
   const selecionarUsuario=(usuario,opcao)=>{
    setUsuarioSelecionado(usuario);
    (opcao==="Editar")? abrirFecharModalEditar():abrirFecharModalExcluir();
   } 

  //estado e método para capiturar os dados no modal

  const [usuarioSelecionado,setUsuarioSelecionado] = useState(
    {
      id: '',
      nome:'',
      idade:'',
      email:'',
      telefone:'',
      endereco:''
    })
  
  const handleChange = e =>{
    const {name,value} = e.target;
    setUsuarioSelecionado({
      ...usuarioSelecionado,
      [name]:value
    });
    console.log(usuarioSelecionado)
  }

  //GET usuários
  const pedidoGet= async()=>{
    await axios.get(baseUrl)
      .then(response=>{
        setData(response.data);
      }).catch(error => {console.log(error)})
  }

  //POST usuários
  const pedidoPost= async()=>{
    delete usuarioSelecionado.id;
    usuarioSelecionado.idade = parseInt(usuarioSelecionado.idade);
    await axios.post(baseUrl,usuarioSelecionado)
      .then(response=>{
        setData(data.concat(response.data));
        setUpdateData(true);
        abrirFecharModalIncluir();
      }).catch(error => {console.log(error)})
  }

  //PUT usuários
  const pedidoPut= async()=>{
    usuarioSelecionado.idade = parseInt(usuarioSelecionado.idade);
    await axios.put(baseUrl+"/"+usuarioSelecionado.id,usuarioSelecionado)
      .then(response=>{
        var resposta = response.data;
        var dadosAuxiliar=data;
        dadosAuxiliar.map(usuario=>{
          if(usuario.id === usuarioSelecionado.id){
            usuario.nome = resposta.nome;
            usuario.idade = resposta.idade;
            usuario.email = resposta.email;
            usuario.telefone = resposta.telefone;
            usuario.endereco = resposta.endereco;
          }
        });
        setUpdateData(true);
        abrirFecharModalEditar();
      }).catch(error => {console.log(error)})
  }

  //DELETE usuários
  const pedidoDelete= async()=>{
    await axios.delete(baseUrl+"/"+usuarioSelecionado.id)
      .then(response=>{
        setData(data.filter(usuario =>usuario.id !== response.data));
        setUpdateData(true);
        abrirFecharModalExcluir();
      }).catch(error => {console.log(error)})
  }

  useEffect(()=>{
    if(updateData){
      pedidoGet();
      setUpdateData(false);
    }
  },[updateData])

  return (
    <div className='App'>
      <br/>
      <h3>Usuários</h3>
      <header>
        <img src={user} alt='Usuário'/>
        <button className='btn btn-primary' onClick={()=>abrirFecharModalIncluir()}>Criar Usuário</button>
      </header>
      <table className='table table-bordered text-white'>
        <thead>
          <tr>
            <th>Id </th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {/* exibir os dados */}
          {data.map(aluno=>(
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.idade}</td>
              <td>{aluno.email}</td>
              <td>{aluno.telefone}</td>
              <td>{aluno.endereco}</td>
              <td>
                <button className='btn btn-light' onClick={()=>selecionarUsuario(aluno,"Editar")}>Editar</button> {"  "}
                <button className="btn btn-danger" onClick={()=>selecionarUsuario(aluno,"Excluir")}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* modal de cadastro */}
      <Modal isOpen={modalIncluir}>
        <ModalHeader>Adicionar Usuário</ModalHeader>
        <ModalBody>
          <div className='form-group'>
            <label>Nome:</label>
            <br/>
            <input type="text" className='form-control' name="nome" onChange={handleChange}/>
            <br/>
            <label>Idade:</label>
            <br/>
            <input type="text" className='form-control' name="idade" onChange={handleChange}/>
            <br/>
            <label>Email:</label>
            <br/>
            <input type="text" className='form-control' name="email" onChange={handleChange}/>
            <br/>
            <label>Telefone:</label>
            <br/>
            <input type="text" className='form-control' name="telefone" onChange={handleChange}/>
            <br/>
            <label>Endereco:</label>
            <br/>
            <input type="text" className='form-control' name="endereco" onChange={handleChange}/>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-primary' onClick={()=>pedidoPost()}>Adicionar</button>{"  "}
          <button className='btn btn-danger' onClick={()=>abrirFecharModalIncluir()}>Cancelar</button>
        </ModalFooter>
      </Modal>


      {/* modal de editar */}
      <Modal isOpen={modalEditar}>
        <ModalHeader>Editar Usuário</ModalHeader>
        <ModalBody>
          <div className='form-group'>
          <label>Id:</label>
          <br/>
          <input type="text" className='form-control' readOnly value={usuarioSelecionado && usuarioSelecionado.id}/>
            <br/>
            <label>Nome:</label>
            <br/>
            <input type="text" className='form-control' name="nome" onChange={handleChange} value={usuarioSelecionado && usuarioSelecionado.nome }/>
            <br/>
            <label>Idade:</label>
            <br/>
            <input type="text" className='form-control' name="idade" onChange={handleChange} value={usuarioSelecionado && usuarioSelecionado.idade}/>
            <br/>
            <label>Email:</label>
            <br/>
            <input type="text" className='form-control' name="email" onChange={handleChange} value={usuarioSelecionado && usuarioSelecionado.email}/>
            <br/>
            <label>Telefone:</label>
            <br/>
            <input type="text" className='form-control' name="telefone" onChange={handleChange} value={usuarioSelecionado && usuarioSelecionado.telefone}/>
            <br/>
            <label>Endereco:</label>
            <br/>
            <input type="text" className='form-control' name="endereco" onChange={handleChange} value={usuarioSelecionado && usuarioSelecionado.endereco}/>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-primary' onClick={()=>pedidoPut()}>Editar</button>{"  "}
          <button className='btn btn-danger' onClick={()=>abrirFecharModalEditar()}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalExcluir}>
        <ModalBody>
          Confirmar a exclusão de usuário(a): {usuarioSelecionado && usuarioSelecionado.nome}?
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-danger' onClick={()=>pedidoDelete()}>Sim</button>
          <button className='btn btn-secondary' onClick={()=>abrirFecharModalExcluir()}>Não</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
