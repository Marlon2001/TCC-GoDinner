import React, {Component} from 'react';
import QuemSomos from '../../../recursos/imgs/background-a-go-dinner.jpg';


export class SessaoQuemSomos1 extends Component{
    render(){
        return(
            // Apresentação da empresa GoDinner
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-5  col-12">
                        <h3 className="font-tamanho-42">A GoDinner</h3>
                        <p className="font-tamanho-20 text-justify">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                    </div>
                    <div className="col-md-7 col-12 imagem-esta-com-fome ">
                        <img src={QuemSomos} alt="" className="rounded float-right"/>
                    </div>
                    
                </div>
            </div>
        )
    }
}