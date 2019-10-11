import React, {Component} from 'react';
import {QuemSomos} from '../../../recursos/imgs/background-a-go-dinner.jpg';


export class SessaoQuemSomos1 extends Component{
    render(){
        return(
            // Apresentação da empresa GoDinner
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-md-5  col-12">
                        <h3 class="font-tamanho-42">A GoDinner</h3>
                        <p class="font-tamanho-20 text-justify">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                    </div>
                    <div class="col-md-7 col-12 imagem-esta-com-fome ">
                        <img src={QuemSomos} alt="" class="rounded float-right"/>
                    </div>
                    
                </div>
            </div>
        )
    }
}