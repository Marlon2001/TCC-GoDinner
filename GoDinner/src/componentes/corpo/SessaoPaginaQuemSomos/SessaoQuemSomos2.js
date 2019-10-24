import React, {Component} from 'react';
import Visao from '../../../recursos/icons/visao.png';
import Qualidade from '../../../recursos/icons/qualidade.png';
import Missao from '../../../recursos/icons/missao.png';



export class SessaoQuemSomos2 extends Component{
    render(){
        return(
            // Bloco de Visão, Missão e Valores da empresa
            <div class="jumbotron jumbotron-3 background-valor mt-5 jumbotron-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-4 icone-caracteristica-maior pt-2 pb-2">
                            <h5 class="text-center font-tamanho-23">VALORES</h5>
                            <img src={Visao} alt="" class="rounded mx-auto pb-2 d-block imagem-quem-somos" />
                            <p class="font-tamanho-20 text-justify">Bom relacionamento com os clientes, qualidade dos nossos serviços empreendedorismo, inovação, ética e responsabilidade.</p>
                        </div>
                        <div class="col-12 col-md-4 icone-caracteristica-maior pt-2 pb-2">
                            <h5 class="text-center font-tamanho-23">MISSÃO</h5>
                            <img src={Missao} alt="" class="rounded mx-auto pb-2 d-block imagem-quem-somos" />
                            <p class="font-tamanho-20 text-justify">Bom relacionamento com os clientes, qualidade dos nossos serviços empreendedorismo, inovação, ética e responsabilidade.</p>
                        </div>
                        <div class="col-12 col-md-4 icone-caracteristica-maior pt-2 pb-2">
                            <h5 class="text-center font-tamanho-23">VALORES</h5>
                            <img src={Qualidade} alt="" class="rounded mx-auto pb-2 d-block imagem-quem-somos" />
                            <p class="font-tamanho-20 text-justify">Bom relacionamento com os clientes, qualidade dos nossos serviços empreendedorismo, inovação, ética e responsabilidade.</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}