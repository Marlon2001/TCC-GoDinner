import React, {Component, Fragment} from 'react';
import MenuInicial from '../componentes/menu/MenuInicial';
import CabecalhoPrincipal from '../componentes/cabecalho/CabecalhoPrincipal';
import RodapePrincipal from '../componentes/rodape/RodapePrincipal';
import Sessao1 from '../componentes/corpo/SessaoIndex1';
import Sessao4 from '../componentes/corpo/SessaoIndex4';
import Sessao2 from '../componentes/corpo/SessaoIndex2';
import Sessao3 from '../componentes/corpo/SessaoIndex3';

export class PaginaInicial extends Component{
    render(){
        return(
            <div>
                <MenuInicial/>
                <CabecalhoPrincipal/>
                <Sessao1/>
                <Sessao2/>
                <Sessao3/>
                <Sessao4/>
                <RodapePrincipal/>
            </div>
        )
    }
}