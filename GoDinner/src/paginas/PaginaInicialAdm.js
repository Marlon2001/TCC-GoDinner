import React,{Component} from 'react';
import { Card} from 'react-bootstrap';
import {
    DivOpecoes, DivOpecoesTitulo, CabecalhoGraficos,
    CorpoGraficos, IconeOpcoes
} from './style/style';
import { Bar, Line, Pie } from 'react-chartjs-2';




export class PaginaInicialAdm extends Component{

    constructor(props){
        super(props);
        this.state = {
          chartData:{
              labels:['JAN','FEV','MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
              datasets:[{
                  label: 'Restaurantes cadastrados',

                  //
                  //setState(sata:[resposta.janereiro, resppsta.feveriro])
                  data:[
                      50,
                      100,
                      150,200,250,300,350,400,450,500,550,600
                  ],
                  backgroundColor:[
                      'rgba(242, 107, 58, 0.6)'
                  ]
              }]
          },
          

          chartData2:{
            labels:['JAN','FEV','MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
            datasets:[{
                label: 'Arrecadação p/ mês',
                data:[
                    50,
                    300,
                    500,520,600,900,850,1000,1580,2000,2001,2360
                ],
                backgroundColor:[
                    'rgba(234, 177, 19,0.6 )'
                ]
            }]
            },

           /* arrecadacao:{
                total:
            }*/


        }
      }
    
      static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        location:'City'
      }


    render(){
        return(
            <div className="container">
               <h1 className="text-center mt-5 mb-5">Bem-vindo ao sistema GoDinner</h1>
                <hr/>
                <div className="row">
                    <div className="col-12 ">
                        <div className="row">
                            <div className="col-md-3 col-6 mb-2">
                                <Card>
                                    <Card.Header className="bg-primary text-white">Arrecadação</Card.Header>
                                    <Card.Body>
                                        <Card.Text></Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3 mb-2 col-6">
                                <Card>
                                    <Card.Header  className="bg-success text-white">Restaurantes devedores</Card.Header>
                                    <Card.Body>
                                        <Card.Text></Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3 mb-2 col-6">
                                <Card>
                                    <Card.Header className="bg-info text-white">Restaurantes Cadastrados</Card.Header>
                                    <Card.Body>
                                        <Card.Text></Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3  mb-2 col-6">
                                <Card>
                                    <Card.Header className="bg-danger text-white">Consumidores cadastrados</Card.Header>
                                    <Card.Body>
                                        <Card.Text></Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="row mt-3">
                    <div className="col-6  pb-2">
                            <Card  style={{ width: '100%', height: '380px' }}>
                                <Card.Body>
                                   <div >
                                   <Line
                                    width={100}
                                    height={300}
                                    data={this.state.chartData}
                                    options={{
                                        title:{
                                        display:this.props.displayTitle,
                                        text:'Restaurantes Cadastrados por mês',
                                        fontSize:23
                                        },
                                        maintainAspectRatio: false,
                                        legend:{
                                        display:this.props.displayLegend,
                                        position:this.props.legendPosition
                                        }
                                    }}
                                    />
                                    </div> 
                                    
                                   
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-6  pb-2">
                        <Card   style={{ width: '100%', height: '380px' }}>
                            <Card.Body>
                            <Line
                                    width={100}
                                    height={300}
                                    data={this.state.chartData2}
                                    options={{
                                        title:{
                                        display:this.props.displayTitle,
                                        text:'Arrecadação do mês',
                                        fontSize:23
                                        },
                                        maintainAspectRatio: false,
                                        legend:{
                                        display:this.props.displayLegend,
                                        position:this.props.legendPosition
                                        }
                                    }}
                                    />
                            </Card.Body>
                        </Card>
                    </div> 
               </div>
                
               

            </div>
        )
    }
}