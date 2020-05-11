import React from 'react'
import List from '../../Components/List'
import AddEvento from '../../Components/AddEvento'
import Modal from 'react-modal'
import './style.css'

Modal.setAppElement('#root')

class dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {isModalOpen:false};
        
    }

    ShowModal(){
        this.setState(
            state => state.isModalOpen = true 
            )
    }

    render(){
        let month = [];
        month[0] = "Janeiro";
        month[1] = "Fevereiro";
        month[2] = "Março";
        month[3] = "Abril";
        month[4] = "Maio";
        month[5] = "Junho";
        month[6] = "Julho";
        month[7] = "Agosto";
        month[8] = "Setembro";
        month[9] = "Outubro";
        month[10] = "Novembro";
        month[11] = "Dezembro";

        
        let d = new Date();
        let current_day = `${d.getDate()} de ${month[10]}`
       return(
         <div className="filtro">
        
        <h2 className="data">{current_day}</h2>
        
            
        <List/>   
        
        <button className="btnevent"
            onClick={()=>this.ShowModal()}>Adicionar Evento
        </button>

        <Modal 
         style={{
            overlay: {backgroundColor: 'black'}
        
        }}
        className="Modal" isOpen={this.state.isModalOpen}>
            <AddEvento/>
        </Modal>
        </div>
        
       );
    };
}


export default dashboard;   

