import React, { Component } from 'react';


class ItensListaRestaurante extends Component{
 
    constructor(props){
        super();

        this.state = {item: props.item}

    }




    render() {
        return (
            <div class="row">
                <div class="col-3" >
                    <img src="img/background.jpg" style={{width: 100 + '%' , height: 150 + 'px'}} className="m-3"/>
                </div>
                <div class="col-9">
                    <div class="row">
                        <div class="col-md-9 mt-3 ml-2 ">
                            <h3>{this.state.item.razaoSocial}</h3>
                        </div>
                        <div class="col-md-2  mt-3 ">
                            <img src="img/icone/verde.png" class="rounded"/>
                            <span class="ml-1">Débito</span>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-5 ml-1">Total de vendas:</div>
                        <div class="col-md-4">Lucro: R$</div>
                        <div class="col-md-2">
                            <button type="button" class="btn btn-outline-success">Detalhes</button>
                        </div>        
                    </div>
                </div>
            </div>
        )
    }
}

export default ItensListaRestaurante;