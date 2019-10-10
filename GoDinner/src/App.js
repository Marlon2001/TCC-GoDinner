import React, { Fragment } from 'react';
import { PaginaInicial } from "./paginas/PaginaInicial";
import { PaginaQuemSomos } from "./paginas/PaginaQuemSomos";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './recursos/css/style.css';
import 'popper.js/dist/popper.min.js';
import './recursos/css/style.css';
import {PaginaLogin} from './paginas/PaginaLogin';
import {PaginaListaRestaurante} from './paginas/PaginaListaRestaurante';
function App() {
  return (
    //<PaginaInicial/>
    //<PaginaQuemSomos/>
    //<PaginaLogin/>
    <PaginaListaRestaurante/>
  );
}

export default App;
