import React, {Component, Fragment} from 'react';
import {Visao} from '../../../recursos/icons/visao.png';
import {Qualidade} from '../../../recursos/icons/qualidade.png'


export class SessaoQuemSomos2 extends Component{
    render(){
        return(
            // Bloco de Visão, Missão e Valores da empresa
            <div class="jumbotron background-valor mt-5 jumbotron-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-4 icone-caracteristica-maior pt-2 pb-2">
                            <h5 class="text-center font-tamanho-23">VISÃO</h5>
                            <img src={Visao} class="rounded mx-auto pb-2 d-block" />
                            <p class="font-tamanho-20  text-justify">Ser uma das maiores plataformas de pedidos de delivery do país, reconhecida como melhor opção pelos clientes. </p>
                        </div>
                        <div class="col-12 col-md-4 icone-caracteristica-maior pt-2 pb-2">
                            <h5 class="text-center font-tamanho-23">MISSÃO</h5>
                            <img src={Qualidade} class="rounded mx-auto pb-2 d-block" />
                            <p class="font-tamanho-20  text-justify">A GoDinner tem como missão, facilitar as entregas de delivery pelo país, a nossa função é unir os consumidores a os restaurantes. </p>
                        </div>
                        <div class="col-12 col-md-4 icone-caracteristica-maior pt-2 pb-2">
                            <h5 class="text-center font-tamanho-23">VALORES</h5>
                            <img src="img/icone/qualidade.png " class="rounded mx-auto pb-2 d-block" />
                            <p class="font-tamanho-20 text-justify">Bom relacionamento com os clientes, qualidade dos nossos serviços empreendedorismo, inovação, ética e responsabilidade.</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}