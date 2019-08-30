import React,{Fragment, Component} from 'react';
imp

class  extends Component{
    render(){
        return(
            <Fragment>
                <div class="jumbotron background-caracteristicas mt-5 jumbotron-fluid">
                    <div class="container transparente ">
                        <div class="row">
                            <div class="col-4 icone-caracteristica pt-2 pb-2">
                                <img src="img/icone/qualidade.png " class="rounded mx-auto pb-2 d-block" />
                                <h5 class="text-center font-tamanho-20">Qualidade 100%</h5>
                            </div>
                            <div class="col-4 icone-caracteristica  pt-2 pb-2">
                                <img src="img/icone/tempo.png" class="rounded mx-auto pb-2 d-block"/>
                                <h5 class="text-center font-tamanho-20">Economize seu tempo</h5>
                            </div>
                            <div class="col-4 icone-caracteristica  pt-2 pb-2">
                                <img src="img/icone/simples.png" class="rounded mx-auto pb-2 d-block"/>
                                <h5 class="text-center font-tamanho-20">Plataforma simples e fácil</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}