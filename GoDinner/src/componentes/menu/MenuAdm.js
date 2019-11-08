import React, {Component} from 'react';
import Logo from '../../recursos/icons/go-dinner.png';
import {Li} from './styled';
import $ from 'jquery';
import {DOMINIO} from '../../link_config';
import { withRouter, Link } from 'react-router-dom';


export class MenuAdm extends Component {

    apagarLocalStorage() {

        //Limpa os storages
        localStorage.clear();
        sessionStorage.clear();

        this.props.history.push("/cadastro/endereco");
    }

    componentDidMount() {

        const url = `${DOMINIO}/funcionarios/este`;

        let token = localStorage.getItem('token');

        if (token != null) {
            $.ajax({
                url: url,
                type: 'GET',
                headers: { "token": token },
                success: function (resposta) {
                    console.log(JSON.stringify(resposta));

                }.bind(this),
                
                error: function (data) {
                    console.log(data);

                }
            });
        }

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ zIndex: '1' }}>
                <Link className="navbar-brand logo"  to="/administracao-godinner">
                    <img src={Logo} style={{ maxWidth: '200px', marginTop: '-5px' }} alt="Logo GoDinner" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse bg-light" id="conteudoNavbarSuportado">
                    <ul className="navbar-nav ml-auto bg-light">
                        <Li className="nav-item menu" maxWidth="150px">
                            <Link className="nav-link text-secondary menu" to="/administracao-godinner/lista-restaurante" >Restaurantes</Link>
                        </Li>
                    </ul>

                    <form className="form-inline bg-light">
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'rgb(76, 76, 76)' }}>
                                <img className="border rounded-circle foto-restaurante  mr-1" src='' alt="" style={{ width: 65 + 'px', height: 60 + 'px' }} />
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" >Editar Perfil</Link>
                                <Link className="dropdown-item" >Configurações</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" >Outros</Link>
                            </div>
                        </div>
                        <button  to="/" className="btn border-bottom-laranja" onClick={e => this.apagarLocalStorage(e)}>
                            Logout
                        </button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default withRouter(MenuAdm);


