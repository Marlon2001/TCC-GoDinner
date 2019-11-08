import React, {Component} from 'react';
import {DOMINIO, TOKEN, DOMINIO_IMG, FOTORESTAURANTEPADRAO} from '../link_config';
import $ from 'jquery';






export class PaginaListaRestauranteDetalhe extends Component{

    constructor(props){
        super();
        this.state = {
            restaurante:{
                email: '',
                cnpj: '',
                razaoSocial: '',
                telefone: '',
                criacao: '',
                foto:'',
                endereco:{
                    
                    bairro: '',
                    numero:'',
                    complemento: '',
                    referencia: '',
                    cep: '',
                    logradouro: '',
                    cidade:{
                        cidade:'',
                        estado:{
                            estado: ''
                        }
                    }

                }
            },


            categoria:[]
        }   
    }


   componentDidMount() {
        this.carregarCategoria();
        this.carregarDadosRestaurante();
       
    }

    carregarCategoria(){

        const { id } = this.props.match.params;


        const url = `${DOMINIO}/restaurante/${id}`;

        $.ajax({
            url: url,
            type: 'GET',
            headers: { 'token': TOKEN },
            success: function (resposta) {

                this.setState({restaurante:resposta});
                console.log(resposta);
                console.log("FOTOO" + resposta.foto.length)
                if (resposta.foto.length === 0) {
                    $(".foto-restaurante").attr("src", FOTORESTAURANTEPADRAO);
                } else {
                    $(".foto-restaurante").attr("src", DOMINIO_IMG + resposta.foto);
                }

            }.bind(this),
            error: function (data) {
                console.log('Erro:', data);

            }
        });

    }

    carregarDadosRestaurante(){

        const { id } = this.props.match.params;


        const url = `${DOMINIO}/categoriaproduto/categorias/${id}`;

        $.ajax({
            url: url,
            type: 'GET',
            headers: { 'token': TOKEN },
            success: function (resposta) {

                this.setState({categoria:resposta});
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
                <h1 class="mb-3 text-center mt-5">{this.state.restaurante.razaoSocial}</h1>
                <hr/>
                <div class="row mt-5">
                    <div class="col-md-5">
                            <div class="row ml-0 mt-4">
                                <img  className="foto-restaurante"src='' style={{width: 100 + '%', height: 300 + 'px'}} alt={'Restaurante '+this.state.restaurante.razaoSocial}/>
                            </div>
                            <div class="row mt-4 ">
                                <div class="col-12">
                                    <h6 className="mt-2">Devendo: </h6>
                                    <h6 className="mt-2">Total: R$</h6>
                                    <h6 className="mt-2">Total de vendas</h6>
                                    <h6 className="mt-2">Avaliação</h6>
                                    <div className="row mb-5">
                                        <div className="col-3 mt-2 h6">Categorias:</div>
                                        {this.state.categoria.map(item => (
                                            <div className="col-4 float-left border rounded ml-1 mt-1 mr-1">
                                                 <div key={item.id} value={item.id}>
                                                    {item.nome}
                                                </div>
                                            </div>
                                        ))}
                                       
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-6 ml-5">
                        <div class="row">
                            <div class="col-md-6  mt-1">
                                <label className="h6">CNPJ:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.cnpj}/>
                            </div>
                            <div class="col-md-6  mt-1">
                                <label className="h6">Razão Social:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.razaoSocial}/>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label className="h6">E-mail:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.email}/>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label className="h6">Endereço:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.endereco.logradouro}/>
                            </div>
                            <div class="col-md-6  mt-3">
                                <label className="h6">Numero:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.endereco.numero}/>
                            </div>
                            <div class="col-md-6  mt-3">
                                <label className="h6">Bairro:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.endereco.bairro}/>
                            </div>
                            <div class="col-md-6  mt-3">
                                <label className="h6">Cidade:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.endereco.cidade.cidade}/>
                            </div>
                            
                            <div class="col-md-6  mt-3">
                                <label className="h6">Estado:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.endereco.cidade.estado.estado}/>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label className="h6">Complemento:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.endereco.complemento}/>
                            </div>
                            <div class="col-md-12 mt-3">
                                <label className="h6">Referência:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.endereco.referencia}/>
                            </div>
                            <div class="col-md-6  mt-3">
                                <label className="h6">CEP:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.endereco.cep}/>
                            </div>
                            <div class="col-md-6  mt-3">
                                <label className="h6">Telefone:</label>
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.telefone}/>
                            </div>
                            {/* <div class="col-md-6 mt-3">
                                <label className="h6">Dt. Criação:</label> 
                                <input class="w3-input" readonly="readonly" value={this.state.restaurante.criacao}/>
                            </div> */}
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
