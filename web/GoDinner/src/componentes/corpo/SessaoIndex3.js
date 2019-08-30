import React,{Fragment, Component} from 'react';
import IconeTempo from '../../recursos/icons/tempo.png';
import IconeQualidade from '../../recursos/icons/qualidade.png';
import IconeSimples from '../../recursos/icons/simples.png';

class  SessaoIndex3 extends Component{
    render(){
        return(
            <Fragment>
                <div class="jumbotron background-caracteristicas mt-5 jumbotron-fluid">
                    <div class="container transparente ">
                        <div class="row">
                            <div class="col-4 icone-caracteristica pt-2 pb-2">
                                <img src={IconeQualidade} class="rounded mx-auto pb-2 d-block" />
                                <h5 class="text-center font-tamanho-20">Qualidade 100%</h5>
                            </div>
                            <div class="col-4 icone-caracteristica  pt-2 pb-2">
                                <img src={IconeTempo} class="rounded mx-auto pb-2 d-block"/>
                                <h5 class="text-center font-tamanho-20">Economize seu tempo</h5>
                            </div>
                            <div class="col-4 icone-caracteristica  pt-2 pb-2">
                                <img src={IconeSimples} class="rounded mx-auto pb-2 d-block"/>
                                <h5 class="text-center font-tamanho-20">Plataforma simples e fácil</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}export default SessaoIndex3; 