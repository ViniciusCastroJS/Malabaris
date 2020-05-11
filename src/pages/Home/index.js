import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const Home = () => {
    return (
        <>
            <div className="fundo">
            <div className="filtro"></div>
            </div>
            <h3 className="txthead">
            Gerenciador de eventos para animadores de festas.
            </h3>
            
            <Link to="/signin" className="btnlink">
                <button className="btn"> Criar Conta </button>
            </Link>

            <Link to="/login">
                <button className="btnwhite"> Entrar </button>
            </Link> 
        </>        
    );
};

export default Home;