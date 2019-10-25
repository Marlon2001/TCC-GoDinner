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
            foto: ''
        }

    }
    visualizarRestaurante(){

        this.setState({ itens: [] });

        

        $.ajax({
            url: `${DOMINIO}/restaurante`,
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
    }


    render() {
        return (
            <Fragment>
                <div class=" container">
                    <h1 class="mb-3 text-center">Restaurantes Cadastrados</h1>
                    
                    <div class="row justify-content-md-center">
                        <div class="col-4 mt-5 ">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Buscar por..." name="search"/>
                                <div class="input-group-btn">
                                    <button class="btn btn-default" type="submit"> <img src="" alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 mt-5">
                            <FormGroup>
                                <FormControl as="select">
                                    <option> Filtrar por...</option>
                                    <option>Mais bem avaliados</option>
                                </FormControl>
                                    
                            </FormGroup>
                        </div>
                    </div>

                    <div class="row mt-5">
                        <span class="col-1 ">Ativados</span>
                        <span class="col-1 ml-5"> Destivados</span>
                    </div>
                    <hr/>
                    {this.state.itens.map(item => (
                        <div class="card mb-5 mt-5">
                            <ItensListaRestaurante foto={item.foto} item={item || ""}/>
                        </div>
                    ))}
                </div>
            </Fragment>
        
        )
    }

}