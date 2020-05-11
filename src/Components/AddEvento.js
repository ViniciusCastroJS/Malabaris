import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddEvento = () => {


const initialState = {
    name: '',
    address: '',
    day_shift: '',
    date: ''
}

const [state, setState] = useState(initialState)

    
    const ChangeHandler = (e) => {
        setState(
            {[e.target.name]:e.target.value}
        )
    }


    const SubmitHandler = e => {
        e.preventDefault()

        useEffect(
        axios.post('http://127.0.0.1:5500/db.json', state)
            .then(
                response => console.log(response)
            ), [])
    }

    const { nome, local, data, turno} = state


    const box = {
        position: 'absolute',
        width: '1333px',
        height: '1487px',
        left: '23px',
        top: '22px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.17)',
        borderRadius: '5px',
        background: '#FFFFFF'}


    const cadastro = {
            position: 'absolute',
            width: '161px',
            height: '25px',
            left: '39px',
            fontFamily: 'Quicksand',
            fontStyle: 'normal',
            fontWeight: 'normal',
            top: '60px',
            fontSize: '20px',
            lineHeight: '25px',
            textAlign: 'center',
            color: '#F883BA'}

    const txtevent = {
            position: 'absolute',
            width: '117px',
            height: '18px',
            left: '49px',
            top: '122px',
            fontFamily: 'Quicksand',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '17px',
            textAlign: 'center',
            color: '#565656'}

    const txtname = {
            position: 'absolute',
            width: '273px',
            height: '40px',
            left: '0px',
            top: '30px',                  
            border: '1px solid #CCCCCC',
            boxSizing: 'border-box',
            borderRadius: '5px'
    }

    const addresstext = {
        position: 'absolute',
        width: '35px',
        height: '18px',
        left: '54px',
        top: '212px',
        fontFamily: 'Quicksand',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '17px',
        textAlign: 'center',
        color: '#565656'
}


    const addressinput = {
        position: 'absolute',
        width: '273px',
        height: '40px',
        left: '-5px',
        top: '30px',                  
        border: '1px solid #CCCCCC',
        boxSizing: 'border-box',
        borderRadius: '5px'
}

    const Datetext = {
        position: 'absolute',
        width: '32px',
        height: '18px',
        left: '55px',
        top: '305px',
        fontFamily: 'Quicksand',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '17px',
        textAlign: 'center',
        color: '#565656'     
}

    const Dateinput = {
        position: 'absolute',
        width: '113px',
        height: '40px',
        left: '-5px',
        top: '30px',
        border: '1px solid #CCCCCC',
        boxSizing: 'border-box',
        borderRadius: '5px'
}

const turnotext = {
    position: 'absolute',
    width: '37px',
    height: '18px',
    left: '194px',
    top: '305px',
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '17px',
    textAlign: 'center',
    color: '#565656'
}

const turnoinput = {
    position: 'absolute',
    width: '132px',
    height: '40px',
    left: '0px',
    top: '30px',
    border: '1px solid #CCCCCC',
    boxSizing: 'border-box',
    borderRadius: '5px'
}


const EventoBtn = {
    position: 'absolute',
    width: '271px',
    height: '50px',
    left: '55px',
    color: '#FFFFFF',
    top: '423px',
    background: 'linear-gradient(100.97deg, #F180C1 4.55%, #A450C9 95.79%)',
    borderRadius: '5px'
}

    return(
        <>
        <div style ={box}>
            <h1 style ={cadastro} > Cadastrar Evento </h1>
            <form onSubmit={SubmitHandler}>

                <label 
                    style ={txtevent}
                    htmlFor="text">
                Nome de evento:
                    <input
                    type="text"
                    name="nome"
                    style ={txtname}
                    value={nome}
                    onChange={ChangeHandler}>   
                    </input>
                </label>
                
                <label className="address" style ={addresstext} htmlFor="text"> 
                Local:
                    <input 
                    type="text" 
                    name="local"
                    style ={addressinput}
                    className="iptaddress" 
                    value={local}
                    onChange={ChangeHandler}> 
                    </input>
                </label>
                
                <label style ={Datetext} className="date"htmlFor="text">
                Data:
                    <input 
                    type="text"
                    style ={Dateinput}
                    name="data"
                    className="iptdate"
                    value={data}
                    onChange={ChangeHandler}>   
                    </input>
                </label>

                <label style ={turnotext} htmlFor="select">
                Turno:
                <select 
                type="select"
                style ={turnoinput}
                name="turno"
                value={turno} 
                onChange={ChangeHandler}>

                    <option turno="Manhã">Manhã</option>
                    <option turno="Tarde">Tarde</option>
                    <option turno="Não disponível">Não Disponível</option>
                    
                </select>

                </label>
                <button 
                    className="btnevent" 
                    type="submit"
                    style ={EventoBtn}
                    onSubmit={SubmitHandler}> 
                    Adicionar Evento 
                </button>
            </form>
        </div>
        </>
        
    );

}


export default AddEvento;   
