import React, {Fragment, Component} from 'react';
import Logo from '../../recursos/icons/logo.png';
import Facebook from '../../recursos/icons/face.png';
import Youtube from '../../recursos/icons/you.png';
import Twitter from '../../recursos/icons/twi.png';
import Instagran from '../../recursos/icons/inst.png';
import PlayStore from '../../recursos/icons/play.png';



class RodapePrincipal extends Component{
    render(){
        return(
            <Fragment>
                <footer>
                    <div className="container mt-5">
                            <div className="row mt-1">
                                <div className="col-md-4 col-sm-4">
                                    <h6>GoDinner</h6>
                                    <p><a href="quem-somos.html">Quem Somos</a></p>
                                    <p>Aviso da Privacidade</p>
                                    <p>Cadastre seu restaurante</p>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <h6>Social</h6>
                                    <img src={Facebook}className="icone-social"/>
                                    <img src={Youtube} className="icone-social"/>
                                    <img src={Twitter} className="icone-social"/>
                                    <img src={Instagran} className="icone-social"/>

                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <h6>Baixe nosso App</h6>
                                    <img src={PlayStore} className="icone-app"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="row mt-5">
                                <div className="col-md-3">
                                    <img src={Logo} className="icone-app"/>
                                </div>
                                <div className="col-md-4">
                                    © Copyright 2019 - GoDinner - Todos os direitos reservados GoDinner com Agência de Restaurantes Online S.A.
                                    CNPJ 55.555.5555/5555-87 
                                </div>
                                <div className="col-md-2"> Termos e condições de uso</div>
                                <div className="col-md-1">Privacidade</div>
                                <div className="col-md-2">Código de conduta</div>
                            </div>
                        </div>
                    </footer>
            </Fragment>
        )
    }
}export default RodapePrincipal;
    