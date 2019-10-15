import React, { Component, Fragment } from 'react';
import { BrowserRouter,Switch,Route, Redirect } from 'react-router-dom';
import {PaginaInicial} from './paginas/PaginaInicial';
import {PaginaQuemSomos} from './paginas/PaginaQuemSomos'
import {PaginaLogin} from './paginas/PaginaLogin';
import {PaginaInicialAdm} from './paginas/PaginaInicialAdm';
import {PaginaListaRestaurante} from './paginas/PaginaListaRestaurante';
import {PaginaListaRestauranteDetalhe} from './paginas/PaginaListaRestauranteDetalhe';

export const estaAutenticado = () => localStorage.getItem("token") != null;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            estaAutenticado() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/login-go-dinner", state: { from: props.location } }} />
                )
        }
    />
);




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
                                <PrivateRoute path={`${url}/pagina-inicial-adm`} component={PaginaInicialAdm} exact />
                                <PrivateRoute path={`${url}/lista-restaurante`} component={PaginaListaRestaurante} />
                                <PrivateRoute path={`${url}/lista-detalhe-resturante`} component={PaginaListaRestauranteDetalhe} />
                            </Fragment>

                        )}
                        />

                    </Switch>
                </BrowserRouter>
        )
    }
}
