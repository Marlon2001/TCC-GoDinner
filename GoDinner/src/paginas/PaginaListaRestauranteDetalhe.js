import React, {Component} from 'react';
import Imagem from './../recursos/imgs/background_prato.png';
import {DOMINIO, TOKEN} from '../link_config';
import $ from 'jquery';






export class PaginaListaRestauranteDetalhe extends Component{

    constructor(props){
        super();
        this.state = {
            restaurante:[]
        }
    }


   componentDidMount() {


        const url = `${DOMINIO}/restaurante/1`;

        $.ajax({
            url: url,
            type: 'GET',
            headers: { 'token': TOKEN },
            success: function (resposta) {

                this.setState(resposta);
                console.log(resposta);

            }.bind(this),
            error: function (data) {
                console.log('Erro:', data);

            }
        });

    }


    render(){
        return(
            <div class=" container">
                <h1 class="mb-3 text-center">Adega Corujão</h1>
                <hr/>
                <div class="row mt-5">
                    <div class="col-md-4">
                            <div class="row ml-0 mt-4">
                                <img src={Imagem} style={{width: 100 + '%', height: 280 + 'px'}}/>
                            </div>
                            <div class="row mt-4 ">
                                <div class="col-12">
                                    <p>Devendo: </p>
                                    <p>Lucro: R$</p>
                                    <p>Total de vendas</p>
                                    <p>Avaliação</p>
                                    <p>Categorias vendidas:</p>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-7 ml-5">
                        <div class="row">
                            <div class="col-md-6  mt-1">
                                <label>CNPJ:</label>
                                <input class="w3-input" readonly="readonly"/>
                            </div>
                            <div class="col-md-6  mt-1">
                                <label>Razão Social:</label>
                                <input class="w3-input" readonly="readonly"/>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>E-mail:</label>
                                <input class="w3-input" readonly="readonly"/>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label>Endereço:</label>
                                <input class="w3-input" readonly="readonly"/>
                            </div>
                            <div class="col-md-6  mt-3">
                                <label>Bairro:</label>
                                <input class="w3-input" readonly="readonly"/>
                            </div>
                            <div class="col-md-6  mt-3">
                                <label>Cidade:</label>
                                <input class="w3-input" readonly="readonly"/>
                            </div>
                            <div class="col-md-6  mt-3">
                                <label>Estado:</label>
                                <input class="w3-input" readonly="readonly"/>
                            </div>
                            <div class="col-md-6  mt-3">
                                <label>CEP:</label>
                                <input class="w3-input" readonly="readonly"/>
                            </div>
                            <div class="col-md-6  mt-3">
                                <label>Telefone:</label>
                                <input class="w3-input" readonly="readonly"/>
                            </div>
                            <div class="col-md-6 mt-3">
                                <label>Dt. Criação:</label>
                                <input class="w3-input" readonly="readonly"/>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
