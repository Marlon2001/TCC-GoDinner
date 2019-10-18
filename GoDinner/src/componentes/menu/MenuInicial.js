import React, { Fragment, Component } from 'react';
import Logo from '../../recursos/icons/logo.png';
import {Link} from 'react-router-dom'

/**Caixa da nav Bar */

class MenuPrincipal extends Component{
    render(){
        return(
            <Fragment>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light navbar-color">
                    <div className="container menu-container">
                        <div className="row">
                            <div className="col-md-9 col-9">
                                <a className="navbar-brand " href="index.html">
                                <img src={Logo} alt=""/>
                            </a>
                            </div>
                            <div className="col-m-3 col-3">
                                <button className="navbar-toggler" type="buttom" data-toggle="collapse" data-target="#navbarSite">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSite" col-mf>
                            <ul className="navbar-nav ml-auto">
                                <Link to="restaurante.godinner.tk">
                                    <li className="nav-item ">Entrar como restaurante</li>
                                </Link>
                                 
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
} 
export default MenuPrincipal;