import React,{Component, Fragment} from 'react';
import Logo from '../../recursos/icons/logo.png';
import {Link} from 'react-router-dom';


export class FormularioLogin extends Component{
    render(){
        return(
            <form>
                <div class="row mt-5">
                    <div class="col-1  col-md-2 col-lg-3"></div>
                    {/* <!-- Formulário para Login --> */}
                <div class="col-10  col-md-8 col-lg-6">
                    {/* <!--Div de logo e boas vindas--> */}
                    <div class="row">
                        <img src={Logo} class=" col-12 icone-imagem"/>
                    </div>
                    <div class="row">
                        <h3 class="mx-auto">Sistema GoDinner</h3>
                    </div>
                    {/* <!--Div de Cadastro--> */}
                    <div class="row ">
                        <div class="col-12 mt-5 ">
                            <label class="h5">Email</label><br/>
                            <input class="form-control  mb-2 mr-sm-2" type="email" id="" name=""  placeholder="Digite o seu Email ..."/>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col-12 ">
                            <label class="h5">Senha</label><br/>
                            <input class="form-control   mr-sm-12" type="email" id="" name="" placeholder="Digite a sua senha .."/>
                        </div>
                    </div>
                    {/* <!--botões para cadastrar e entrar--> */}
                    <div class="row mt-5 mb-5 ml-1 mr-1">
                        <a href="#" class="btn btn-orange"  style={{ minWidth: 100 + '%', cursor: 'pointer' }}>Entrar</a>
                    </div>  
                    <div class="row mt-3 mb-5 ml-1 mr-1">
                        <a href="#" class="btn btn-orange " style={{ minWidth: 100 + '%', cursor: 'pointer' }}>Cadastrar</a>
                    </div>
                    <hr/>
                </div>
                <div class="col-1 col-md-2 col-lg-3"></div>
                </div>
            </form>
        )

    }
} 