import React,{Component, Fragment} from 'react';
import Prato from '../../recursos/imgs/background_prato.png';
class SessaoIndex2 extends Component{
    render(){
        return(
            <Fragment>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-5 ">
                            <h3 class="font-tamanho-42">Está com fome?</h3>
                            <p class="font-tamanho-26">Sua comida em casa com apenas alguns clicks</p>
                        </div>
                        <div class="col-7 imagem-esta-com-fome ">
                            <img src={Prato} class="rounded float-right"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}export default SessaoIndex2;