import React,{Component, Fragment} from 'react';
import Android from '../../recursos/icons/android.png';
import FotoCelular from '../../recursos/imgs/fotoCelular.png';

class SessaoIndex4 extends Component{
    render(){
        return(
            <Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-5 ">
                            <h3 className="font-tamanho-42">Baixe o nosso App</h3>
                            <p className="font-tamanho-20">Não perca tempo. Baixe o nosso App. O primeiro pedido tem 50% de desconto</p>
                            <img src={Android} className="icone-android"/>Android
                        </div>
                        <div className="col-7 imagem-esta-com-fome ">
                            <img src={FotoCelular} className="rounded float-right"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
} export default SessaoIndex4;