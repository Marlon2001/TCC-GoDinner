import React,{Component, Fragment} from 'react';
import Fritas from './../../recursos/icons/iconsSlider/1.png';
import Macarrao from './../../recursos/icons/iconsSlider/2.jpg';
import Marmita from './../../recursos/icons/iconsSlider/3.jpg';
import Japonesa from './../../recursos/icons/iconsSlider/4.jpg';
import Conserva from'./../../recursos/icons/iconsSlider/5.jpg';
import Carne from './../../recursos/icons/iconsSlider/6.jpg';





 export class ImagemSlider extends Component{
    render(){
         return(
                <div className={`carousel-item ${this.props.className}`}>
                    <div className="row">
                        <div className="col-3">
                            <img class="d-block w-100 rounded-circle tamanho_imagem" src={this.props.imagem1} alt="Primeiro Slide"/>
                            <p className="text-center">{this.props.titulo1}</p>
                        </div>
                        <div className="col-3 tamanho_imagem_div">
                            <img class="d-block w-100 rounded-circle tamanho_imagem" src={this.props.imagem2} alt="Primeiro Slide"/>
                            <p className="text-center">{this.props.titulo2}</p>
                        </div>
                        <div className="col-3">
                            <img class="d-block w-100 rounded-circle tamanho_imagem" src={this.props.imagem3} alt="Primeiro Slide"/>
                            <p className="text-center">{this.props.titulo3}</p>
                        </div>
                        <div className="col-3">
                            <img class="d-block w-100 rounded-circle tamanho_imagem" src={this.props.imagem4} alt="Primeiro Slide"/>
                            <p className="text-center">{this.props.titulo4}</p>
                        </div>
                    </div>
                </div>
        )
    }
 }


export class SliderBox extends Component{
    render(){
        return(
            <div className="container mt-5">
                <h4 className="font-tamanho-23">Para todos os tipos de gostos</h4>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
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


                    </div>
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