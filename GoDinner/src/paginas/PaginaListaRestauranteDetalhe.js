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
            <div className=" container">
                <h1 className="mb-3 text-center mt-5">{this.state.restaurante.razaoSocial}</h1>
                <hr/>
                <div className="row mt-5">
                    <div className="col-md-5">
                            <div className="row ml-0 mt-4">
                                <img  className="foto-restaurante"src='' style={{width: 100 + '%', height: 300 + 'px'}} alt={'Restaurante '+this.state.restaurante.razaoSocial}/>
                            </div>
                            <div className="row mt-4 ">
                                <div className="col-12">
                                    <h6 className="mt-2">Devendo: </h6>
                                    <h6 className="mt-2">Lucro: R$</h6>
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
                    <div className="col-md-6 ml-5">
                        <div className="row">
                            <div className="col-md-6  mt-1">
                                <label className="h6">CNPJ:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.cnpj}/>
                            </div>
                            <div className="col-md-6  mt-1">
                                <label className="h6">Razão Social:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.razaoSocial}/>
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="h6">E-mail:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.email}/>
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="h6">Endereço:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.endereco.logradouro}/>
                            </div>
                            <div className="col-md-6  mt-3">
                                <label className="h6">Numero:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.endereco.numero}/>
                            </div>
                            <div className="col-md-6  mt-3">
                                <label className="h6">Bairro:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.endereco.bairro}/>
                            </div>
                            <div className="col-md-6  mt-3">
                                <label className="h6">Cidade:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.endereco.cidade.cidade}/>
                            </div>
                            
                            <div className="col-md-6  mt-3">
                                <label className="h6">Estado:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.endereco.cidade.estado.estado}/>
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="h6">Complemento:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.endereco.complemento}/>
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="h6">Referência:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.endereco.referencia}/>
                            </div>
                            <div className="col-md-6  mt-3">
                                <label className="h6">CEP:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.endereco.cep}/>
                            </div>
                            <div className="col-md-6  mt-3">
                                <label className="h6">Telefone:</label>
                                <input className="w3-input" readonly="readonly" value={this.state.restaurante.telefone}/>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
