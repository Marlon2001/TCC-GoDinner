import React, { Component, Fragment } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import {PaginaInicial} from './paginas/PaginaInicial';
import {PaginaQuemSomos} from './paginas/PaginaQuemSomos'
import {PaginaLogin} from './paginas/PaginaLogin';

export class RotaPaginas extends Component {
    render() {
        return (

                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={PaginaInicial}/>
                        
                        <Route
                            path="/quem-somos" component={PaginaQuemSomos}
                        />

                        <Route path="/login-go-dinner" exact component={PaginaLogin}/>

                         <Route
                            // path="/go-dinner" render={({ match: { url } }) => (
                            //     // <Fragment>
                            //     //     <Route path={`${url}/`} component={FormularioDados} exact />
                            //     //     <PrivateRoute path={`${url}/endereco`} component={FormularioEndereco} />
                            //     //     <PrivateRoute path={`${url}/login`} component={FormularioLogin} />
                            //     //     <PrivateRoute path={`${url}/bem-vindo`} component={FormularioBemVindo} />
                            //     //     <Rodape />
                            //     // </Fragment>

                            // )}
                        />
                    </Switch>
                </BrowserRouter>
        )
    }
}
