import React,{Component, Fragment} from 'react';

class SessaoIndex1 extends Component{
    render(){
        return(
            <Fragment>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-md-12">
                        <div class="card">
                            <div class="card-body background-card">
                                <h2 class="card-title cor-branca font-tamanho-42 mb-3">Bora ganhar mais dinheiro?</h2>
                                <h4 class="card-text mb-5 cor-branca font-tamanho-23">Seja nosso parceiro</h4>
                                <a href="#" class="btn btn-orange mb-3 btn-lg font-tamanho-20">Cadastre seu restaurante</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-5">
                    <h4 class="font-tamanho-23">Para todos os tipos de gostos</h4>
                    <div class="owl-carousel owl-theme">
                        <div class="item-carousel">
                            <img src="img/icone_slider/1.png" alt="..." class="rounded-circle"/>
                            <p class="text-center">Fritas</p>
                        </div>
                        <div class="item-carousel">
                            <img src="img/icone_slider/2.jpg" alt="..." class="rounded-circle"/>
                            <p class="text-center">Italiana</p>
                        </div>
                        <div class="item-carousel">
                            <img src="img/icone_slider/3.jpg" alt="..." class="rounded-circle"/>
                            <p class="text-center">Marmita</p>
                        </div>
                        <div class="item-carousel">
                            <img src="img/icone_slider/4.jpg" alt="..." class="rounded-circle"/>
                            <p class="text-center">Japonesa</p>
                        </div>
                        <div class="item-carousel">
                            <img src="img/icone_slider/5.jpg" alt="..." class="rounded-circle"/>
                            <p class="text-center">Congelado</p>
                        </div>
                        <div class="item-carousel">
                            <img src="img/icone_slider/6.jpg" alt="..." class="rounded-circle"/>
                            <p class="text-center">Carne</p>
                        </div>
                        <div class="item-carousel">
                            <img src="img/icone_slider/7.jpg" alt="..." class="rounded-circle"/>
                            <p class="text-center">Pizza</p>
                        </div>
                        <div class="item-carousel">
                            <img src="img/icone_slider/8.jpg" alt="..." class="rounded-circle"/>
                            <p class="text-center">Brasileira</p>
                        </div>
                    </div>
                    <hr/>
                </div>
            </Fragment>
        )
    }
} export default SessaoIndex1;