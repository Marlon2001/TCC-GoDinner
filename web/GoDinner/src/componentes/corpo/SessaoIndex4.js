import React,{Component, Fragment} from 'react';
import Android from '../../recursos/icons/android.png';
import FotoCelular from '../../recursos/imgs/fotoCelular.png';

class SessaoIndex4 extends Component{
    render(){
        return(
            <Fragment>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-5 ">
                            <h3 class="font-tamanho-42">Baixe o nosso App</h3>
                            <p class="font-tamanho-20">Não perca tempo. Baixe o nosso App. O primeiro pedido tem 50% de desconto</p>
                            <img src={Android} class="icone-android"/>Android
                        </div>
                        <div class="col-7 imagem-esta-com-fome ">
                            <img src={FotoCelular} class="rounded float-right"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
} export default SessaoIndex4;