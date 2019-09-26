import React,{Component, Fragment} from 'react';

class Propaganda extends Component{
    render(){
        return(
            <Fragment>
                {/* Bloco para de apresentação para se cadastrar na GoDinner */}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="card">
                            <div className="card-body background-card">
                                <h2 className="card-title cor-branca font-tamanho-42 mb-3">Bora ganhar mais dinheiro?</h2>
                                <h4 className="card-text mb-5 cor-branca font-tamanho-23">Seja nosso parceiro</h4>
                                <a href="#" className="btn btn-orange mb-3 btn-lg font-tamanho-20">Cadastre seu restaurante</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Fragment>      
        )
    }
}export default Propaganda; 