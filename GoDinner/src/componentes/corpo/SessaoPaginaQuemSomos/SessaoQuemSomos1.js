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
                        <p className="font-tamanho-20 text-justify">
                            A plataforma GoDinner tem como objetivo auxiliar o consumidor a realizar 
                            suas compras e também o restaurante a promover seu catálogo de produtos! 
                        </p>
                        <p className="font-tamanho-20 text-justify">
                            O funcionamento da plataforma é bem simples! A um click o usuário vai conseguir escolher seu prato e realizar o pedido para 
                            ser entregue em qualquer lugar para a janta ou qualquer refeição. Sendo totalmente gratuito o cadastro 
                            e o uso da plataforma para o consumidor e o restaurante.
                        </p>
                    </div >
                    <div className="col-md-7 col-12 imagem-esta-com-fome ">
                        <img src={QuemSomos} alt="" className="rounded float-right"/>
                    </div>
                    
                </div>
            </div>
        )
    }
}