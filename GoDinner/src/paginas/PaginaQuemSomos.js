import React, {Fragment, Component} from 'react';
import MenuInicial from '../componentes/menu/MenuInicial';
import CabecalhoPrincipal from '../componentes/cabecalho/CabecalhoPrincipal';
import RodapePrincipal from '../componentes/rodape/RodapePrincipal';
import {SessaoQuemSomos1} from '../componentes/corpo/SessaoPaginaQuemSomos/SessaoQuemSomos1';
import {SessaoQuemSomos2} from '../componentes/corpo/SessaoPaginaQuemSomos/SessaoQuemSomos2';


export class PaginaQuemSomos extends Component{
    render(){
        return(
            <Fragment>
                <MenuInicial/>
                <CabecalhoPrincipal/>
                <SessaoQuemSomos1/>
                <SessaoQuemSomos2/>
                <RodapePrincipal/>
            </Fragment>
        )
    }
}