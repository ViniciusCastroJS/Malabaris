import React from 'react'
import '../pages/dashboard/style.css'

const Card = (props) => {

       

const estilo = props.turno === "NotAvailable" ? {top:'325px'} :
        props.turno === 'evening' ?
          {  top:'160px'} : 
                 props.turno === 'morning' ?
          { top:'10px' } :{ top:'200px'} 


        return(
        <div style={estilo} className="Card">
        <h2 className="nome">{props.nome}</h2>
        <h2 className="local">{props.local}</h2>
        </div>
       );
   
};

export default Card;
