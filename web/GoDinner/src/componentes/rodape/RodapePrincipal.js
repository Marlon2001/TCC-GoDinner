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
                    <div class="container mt-5">
                            <div class="row mt-1">
                                <div class="col-md-4 col-sm-4">
                                    <h6>GoDinner</h6>
                                    <p><a href="quem-somos.html">Quem Somos</a></p>
                                    <p>Aviso da Privacidade</p>
                                    <p>Cadastre seu restaurante</p>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <h6>Social</h6>
                                    <img src={Facebook}class="icone-social"/>
                                    <img src={Youtube} class="icone-social"/>
                                    <img src={Twitter} class="icone-social"/>
                                    <img src={Instagran} class="icone-social"/>

                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <h6>Baixe nosso App</h6>
                                    <img src={PlayStore} class="icone-app"/>
                                </div>
                            </div>
                            <hr/>
                            <div class="row mt-5">
                                <div class="col-md-3">
                                    <img src={Logo} class="icone-app"/>
                                </div>
                                <div class="col-md-4">
                                    © Copyright 2019 - GoDinner - Todos os direitos reservados GoDinner com Agência de Restaurantes Online S.A.
                                    CNPJ 55.555.5555/5555-87 
                                </div>
                                <div class="col-md-2"> Termos e condições de uso</div>
                                <div class="col-md-1">Privacidade</div>
                                <div class="col-md-2">Código de conduta</div>
                            </div>
                        </div>
                    </footer>
            </Fragment>
        )
    }
}export default RodapePrincipal;
    