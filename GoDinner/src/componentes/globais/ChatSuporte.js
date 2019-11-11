
import { MessageList } from 'react-chat-elements';
import "../../index.css"
import 'react-chat-elements/dist/main.css';
import React, {Component} from 'react' ;
import io from 'socket.io-client';
import $ from "jquery"
const socket = io('http://godinner.tk:3005');

// import 


const initialState ={
                        dataSource:[]
                    }
class ChatSuporte extends Component{

    constructor(){
        super();
        this.state = { ...initialState }
            
        
        
    }
    componentDidMount(){
        socket.on('suporte', data => {
            this.entrarNoChamado(data.id);
            $("#top_chat").html(`Usuário: ${data.nome}`);
        });
    }
    entrarNoChamado(id){

        let idFuncionario = localStorage.getItem("id");
        let username = localStorage.getItem("nome");
        let token = localStorage.getItem("token");
        socket.emit('join',{ room: id, idFuncionario: idFuncionario,token: token,  username: username, remetente: "F"});
        
        socket.on('message', data => {
            
            let dataSourceNew = this.state.dataSource
            let lado = data.remetente === "F" ? "right" : "left" ;

            
            dataSourceNew.push(
                {
                    position: lado,
                    type: 'text',
                    text: data.message,
                    date: new Date()
                }
            )
            
            
            this.setState({dataSource: dataSourceNew} );


            let objScroll = document.querySelector(".div_rodape_chat");
            objScroll.scrollTop = objScroll.scrollHeight;


            $("#btn_chat").removeClass("desativado_btn_chat");
            
        });
    }
    enviarMensagem(){
        let texto = $("#campo_da_mensagem").val();
        $("#campo_da_mensagem").val("");
        socket.emit('message', {username: "GoDinner", message:texto, remetente:"F" });
    }
    abaixarLevantarChat(){
        if($("#caixa_chat").hasClass("caixa_chat")){
            $("#caixa_chat").removeClass("caixa_chat")
            $("#caixa_chat").addClass("caixa_baixa")
            $("#todape_chat").addClass("display_none")

            $("#top_chat").removeClass("top_chat")
            $("#top_chat").addClass("top_chat_baixo")
        }else{
            $("#top_chat").addClass("top_chat")
            $("#top_chat").removeClass("top_chat_baixo")

            $("#todape_chat").removeClass("display_none")
            $("#caixa_chat").removeClass("caixa_baixa")
            $("#caixa_chat").addClass("caixa_chat")
        }
    }

    render(){
        return(
            <div className="caixa_chat" id="caixa_chat" >
                <div className="top_chat" id="top_chat" onClick={() => this.abaixarLevantarChat()}>
                    Conversa com alguém
                </div>
                <MessageList
                    className='message-list'
                    lockable={true}
                    toBottomHeight={'70%'}
                    dataSource={this.state.dataSource} />

                    <div className="div_rodape_chat" id="todape_chat">
                        <input text="text" class="input_envia_msg" id="campo_da_mensagem"></input>
                        <button className="btn_enviar desativado_btn_chat" id="btn_chat" onClick={() => this.enviarMensagem()}>
                            Enviar
                        </button>
                    </div>
            </div> 

        );
    }
}

export default ChatSuporte;