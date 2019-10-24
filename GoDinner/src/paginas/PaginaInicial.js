import React, {Component, Fragment} from 'react';
//Import das páginas GoDinner
import Sessao1 from '../componentes/corpo/PaginaGoDinner/SessaoIndex1';
import Sessao4 from '../componentes/corpo/PaginaGoDinner/SessaoIndex4';
import Sessao2 from '../componentes/corpo/PaginaGoDinner/SessaoIndex2';
import Sessao3 from '../componentes/corpo/PaginaGoDinner/SessaoIndex3';
import CabecalhoPrincipal from '../componentes/cabecalho/CabecalhoPrincipal';
import RodapePrincipal from '../componentes/rodape/RodapePrincipal';
import MenuInicial from '../componentes/menu/MenuInicial';


export class PaginaInicial extends Component{
    render(){
        return(
                <Fragment>
                    <MenuInicial />
                    <CabecalhoPrincipal className="caixa-header" titulo="Quem está com fome pede na GoDinner" subtitulo="Depois espere e relaxe"/>
                    <Sessao1/>
                    <Sessao2/>
                    <Sessao3/>
                    <Sessao4/>
                    <RodapePrincipal/>
                </Fragment>
        )
    }
}