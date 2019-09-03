import React,{Component, Fragment} from 'react';
import Garfo from '../../recursos/icons/go-dinner-garfo.png';

class CabecalhoPrincipal extends Component{
    render(){
        return(
            <Fragment>
                <div className="jumbotron caixa-header jumbotron-fluid">
                    <div className="container">
                        <div className="col-md-6 transparente  ml-auto pt-2" >
                            <h1 className="display-4 display-4-formatacao text-center">Quem está com fome pede GoDinner</h1>
                            <hr/>
                            <p className="lead lead-formatacao text-center">Depois espere e relaxe</p> 
                            <img className="icone-garfo rounded mx-auto d-block pb-2" src={Garfo}/>   
                        </div>
                    </div>
                </div>
            </Fragment>  
        )
    }
}export default CabecalhoPrincipal;