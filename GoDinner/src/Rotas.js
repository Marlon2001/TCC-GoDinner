import React, { Component, Fragment } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import {PaginaInicial} from './paginas/PaginaInicial';
import {PaginaQuemSomos} from './paginas/PaginaQuemSomos'
import {PaginaLogin} from './paginas/PaginaLogin';
import {PaginaInicialAdm} from './paginas/PaginaInicialAdm';
import {PaginaListaRestaurante} from './paginas/PaginaListaRestaurante';
import {PaginaListaRestauranteDetalhe} from './paginas/PaginaListaRestauranteDetalhe';

export class RotaPaginas extends Component {
    render() {
        return (

                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={PaginaInicial}
                        
                        />
                        
                       
                        <Route
                            path="/quem-somos" component={PaginaQuemSomos}
                        />

                        <Route path="/login-go-dinner" exact component={PaginaLogin}/>


                        <Route path="/administracao-godinner" render={({ match: { url } }) => (
                            <Fragment>
                                <Route path={`${url}/`} component={PaginaInicialAdm} exact />
                                <eRoute path={`${url}/listaRestaurante`} component={PaginaListaRestaurante} />
                                <Route path={`${url}/listaDetalheResturante`} component={PaginaListaRestauranteDetalhe} />
                            </Fragment>

                        )}
                        />

                    </Switch>
                </BrowserRouter>
        )
    }
}
