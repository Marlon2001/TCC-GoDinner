import React,{Component} from 'react';
import Fritas from './../../recursos/icons/iconsSlider/1.png';
import Macarrao from './../../recursos/icons/iconsSlider/2.jpg';
import Marmita from './../../recursos/icons/iconsSlider/3.jpg';
import Japonesa from './../../recursos/icons/iconsSlider/4.jpg';
import Conserva from'./../../recursos/icons/iconsSlider/5.jpg';
import Carne from './../../recursos/icons/iconsSlider/6.jpg';

import $ from 'jquery';
import {DOMINIO, TOKEN} from '../../link_config';




 export class ImagemSlider extends Component{
    render(){
         return(
                <div className={`carousel-item ${this.props.className}`}>
                    <div className="row">
                        <div className="col-3">
                            <img className="d-block w-100 rounded-circle tamanho_imagem" src={this.props.imagem1} alt="Primeiro Slide"/>
                            <p className="text-center">{this.props.titulo1}</p>
                        </div>
                        <div className="col-3 tamanho_imagem_div">
                            <img className="d-block w-100 rounded-circle tamanho_imagem" src={this.props.imagem2} alt="Primeiro Slide"/>
                            <p className="text-center">{this.props.titulo2}</p>
                        </div>
                        <div className="col-3">
                            <img className="d-block w-100 rounded-circle tamanho_imagem" src={this.props.imagem3} alt="Primeiro Slide"/>
                            <p className="text-center">{this.props.titulo3}</p>
                        </div>
                        <div className="col-3">
                            <img className="d-block w-100 rounded-circle tamanho_imagem" src={this.props.imagem4} alt="Primeiro Slide"/>
                            <p className="text-center">{this.props.titulo4}</p>
                        </div>
                    </div>
                </div>
        )
    }
 }


export class SliderBox extends Component{
    constructor(props) {
        super();
        this.state = {

            categoria: {
               nome: '',
               foto:'',
               descricao:''
            },

            categorias: []

        }
    }

    componentDidMount() {
        const url = `${DOMINIO}/categoria`;

        $.ajax({
            url: url,
            headers: { 'token': TOKEN },
            type: 'GET',
            success: function (resposta) {
                console.log(resposta[0].nome)
                console.log(this.setState({ categorias: resposta }));
                console.log(this.state.categorias);

            }.bind(this),
            error: function (resposta) {
                console.log(resposta)
            }
        });
    }


    render(){
          
        return(
            <div className="container mt-5">
                <h4 className="font-tamanho-23">Para todos os tipos de gostos</h4>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

                     {/* <InfiniteCarousel
                        breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            },
                        },
                        ]}
                        dots={true}
                        showSides={true}
                        sidesOpacity={.5}
                        sideSize={.1}
                        slidesToScroll={4}
                        slidesToShow={4}
                        scrollOnDevice={true}
                    >

                        
                        <div>
                            {this.state.categorias.map(item => (
                 
                                    <div key={item.foto}>
                                        <div>
                                            <img src={item.foto}/>
                                        </div>
                                        
                                    </div>
                                
                            ))}
                                        <div>
                                            <img src={Carne}/>
                                        </div>
                        </div>


                        
                    </InfiniteCarousel> 

                    {this.state.categorias.map(item => (
                 
                 <div key={item.foto}>
                     <div>
                         <img src={item.foto}/>
                     </div>
                     
                 </div>
             
         ))} */}

                    {/* {this.state.categorias.map(item => (
                                <div>
                                    <div key={item.foto}>
                                        <img src={Carne}/>
                                    </div>
                                </div>
                                
                            ))} */}
  
                    {/* <div className="carousel-inner">
                        <ImagemSlider
                            className="active"
                            imagem1={Carne}
                            imagem2={Fritas}
                            imagem3={Marmita}
                            imagem4={Japonesa}
                            titulo1= "Carne"
                            titulo2= "Fritas"
                            titulo3= "Marmita"
                            titulo4= "Japonesa"
                        />
                        <ImagemSlider
                            imagem1={Macarrao}
                            imagem2={Japonesa}
                            imagem3={Conserva}
                            imagem4={Fritas}
                            titulo1= "Macarrao"
                            titulo2= "Japonesa"
                            titulo3= "Conserva"
                            titulo4= "Fritas"
                        />


                    </div> */}

                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Próximo</span>
                    </a>
                    </div>
                <hr/>
            </div>
        )
    }
}