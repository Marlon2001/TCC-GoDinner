import React, { Fragment, Component } from 'react';
import ItensListaRestaurante from '../componentes/lista/ItensListaRestautantes';
import  {FormControl, FormGroup } from 'react-bootstrap';
export class PaginaListaRestaurante extends Component {

  
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
                                    <button class="btn btn-default" type="submit"> <img src=""/></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 mt-5">
                            <FormGroup>
                                <FormControl as="select">
                                    <option> Filtrar por...</option>
                                    <option>1</option>
                                </FormControl>
                                    
                            </FormGroup>
                        </div>
                    </div>

                    <div class="row mt-5">
                        <span class="col-1 ">Ativados</span>
                        <span class="col-1 ml-5"> Destivados</span>
                    </div>
                    <hr/>
                    <div class="card">
                        <ItensListaRestaurante/>
                    </div>
                </div>
            </Fragment>
        
        )
    }

}