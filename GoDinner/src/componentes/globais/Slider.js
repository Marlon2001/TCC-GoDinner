import React,{Component} from 'react';
import './css/carousel.css'
import Fritas from './../../recursos/icons/iconsSlider/1.png';
import Macarrao from './../../recursos/icons/iconsSlider/2.jpg';
import $ from 'jquery';
import {DOMINIO, DOMINIO_IMG} from '../../link_config';

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
                
                <div class="box">
                    <div class="dummy">
                        {this.state.categorias.map(item => (
                            <div class="categoria-comida" key={item.nome}>
                                <img class="tamanho-imagem rounded-circle"  alt={item.nome} src={ `${DOMINIO_IMG}${item.foto}`} 
                                />
                                <p class="text-center mt-2">{item.nome}</p>
                            </div>
                                    
                        ))} 
                        
                        
                        
                        </div>
                    </div>

                   
                </div>
                <hr/>
            </div>
        )
    }
}