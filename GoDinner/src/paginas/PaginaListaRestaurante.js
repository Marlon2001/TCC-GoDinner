import React, { Fragment, Component } from 'react';
import ItensListaRestaurante from '../componentes/lista/ItensListaRestautantes';
import  {FormControl, FormGroup } from 'react-bootstrap';
import {DOMINIO, TOKEN} from '../link_config';
import $ from 'jquery';

export class PaginaListaRestaurante extends Component {

    constructor() {
        super();
        this.state = {
            itens: [],
            foto: '',

            arrecadacao:[]


        }

    }
    visualizarRestaurante(e){

        this.setState({ itens: [] });

        let url;

        switch (e) {
            case "ativo":
                url = `${DOMINIO}/restaurante/ativo`;
               
                break;
            case "desativo":
                url = `${DOMINIO}/restaurante/desativo`;

                break;
            default:
                url = `${DOMINIO}/restaurante`;
        }

        $.ajax({
            url: url,
            type: 'GET',
            headers: { "token": TOKEN },
            // dataType: 'json',
            contentType: 'application/json',
            
            success: function (resposta) {

                this.setState({ itens: resposta, foto: resposta.foto });

            }.bind(this),
            error: function (data) {

                console.log(data)
            }
        });
    }

    componentDidMount() {
       
        this.visualizarRestaurante();
        this.carregarTotalArrecadacao();
    }

    carregarTotalArrecadacao(){
        const { id } = this.props.match.params;

        const url = `${DOMINIO}/restaurante/arrecadacao`;

        $.ajax({
            url: url,
            type: 'GET',
            headers: { 'token': TOKEN },
            success: function (resposta) {

                this.setState({arrecadacao:resposta});
                console.log(resposta);
                console.log("A cimaasdasdasda");


            }.bind(this),
            error: function (data) {

            }
        });
    }    

    render() {
        return (
            <Fragment>
                <div className=" container">
                    <h1 className="mb-3 text-center">Restaurantes Cadastrados</h1>
                    
                    <div className="row justify-content-md-center">
                        <div className="col-4 mt-5 ">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Buscar por..." name="search"/>
                                <div className="input-group-btn">
                                    <button className="btn btn-default" type="submit"> <img src="" alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-5">
                            <FormGroup>
                                <FormControl as="select">
                                    <option> Filtrar por...</option>
                                    <option>Mais bem avaliados</option>
                                </FormControl>
                                    
                            </FormGroup>
                        </div>
                    </div>

                    <div className="row mt-5" style={{cursor: 'pointer' }}>
                        <span className="col-1 " onClick={e => this.visualizarRestaurante(e = "ativo")}>Ativados</span>
                        <span className="col-1 ml-5" onClick={e => this.visualizarRestaurante(e = "desativo")}> Destivados</span>
                    </div>
                    <hr/>
                    {this.state.itens.map(item => (
                        <div className="card mb-5 mt-5">
                            <ItensListaRestaurante foto={item.foto} item={item || ""} onkeyup/>
                        </div>
                    ))}
                </div>
            </Fragment>
        
        )
    }

}