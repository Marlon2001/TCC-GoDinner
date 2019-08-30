import React,{Component, Fragment} from 'react';
import Fritas from '../../recursos/icons/iconsSlider/1.png';
import Macarrao from '../../recursos/icons/iconsSlider/2.jpg';
import Marmita from '../../recursos/icons/iconsSlider/3.jpg';
import Japonesa from '../../recursos/icons/iconsSlider/4.jpg';
import Conserva from'../../recursos/icons/iconsSlider/5.jpg';
import Carne from '../../recursos/icons/iconsSlider/6.jpg'; 
import '../../recursos/js/jquer';



export class ImagemSlider extends Component{
    render(){
        return(
            <div class="item-carousel">
                <img src={this.props.src} alt={this.props.alt} class="rounded-circle"/>
                <p class="text-center">{this.props.titulo}</p>
            </div>
        )
    }
}


export class SliderBox extends Component{
    render(){
        return(
            <div class="container mt-5">
                <h4 class="font-tamanho-23">Para todos os tipos de gostos</h4>
                <div class="owl-carousel owl-theme">
                    <ImagemSlider
                        src={Fritas} alt="Fritas" titulo="Fritas"
                    />
                    <ImagemSlider
                        src={Macarrao} alt="Macarrão" titulo="Macarrão"
                    />
                    <ImagemSlider
                        src={Marmita} alt="Marmita" titulo="Marmita"
                    />
                    <ImagemSlider
                        src={Japonesa} alt="Japonesa" titulo="Japonesa"
                    />
                     <ImagemSlider
                        src={Conserva} alt="Conserva" titulo="Conserva"
                    />
                     <ImagemSlider
                        src={Carne} alt="Carne" titulo="Carne"
                    />
                </div>
                <hr/>
            </div>
        )
    }
}