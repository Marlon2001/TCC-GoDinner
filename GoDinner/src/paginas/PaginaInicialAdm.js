import React,{Compoment, Fragment, Component} from 'react';
import $ from 'jquery';
import {DOMINIO} from '../link_config';

export class PaginaInicialAdm extends Component{
    
    
    componentDidMount() {

        const url = `${DOMINIO}/funcionarios/este`;

        let token = localStorage.getItem('token');

        if (token != null) {
            $.ajax({
                url: url,
                type: 'GET',
                headers: { "token": token },
                success: function (resposta) {
                    alert(resposta);
                    console.log(JSON.stringify(resposta));

                    // let nome = JSON.stringify(resposta.razaoSocial);
                    // nome = nome.replace(/"/g, " ")

                    // localStorage.setItem('id', JSON.stringify(resposta.id));
                    // localStorage.setItem('nome', nome);
                    

                }.bind(this),
                error: function (data) {
                    console.log(data);

                }
            });
        }

    }
    
    render(){
        return(
            <div>
                <p>Página Inicial</p>
            </div>
        )
    }
}