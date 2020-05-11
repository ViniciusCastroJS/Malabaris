import React, { useEffect , useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import axios from 'axios'

const LoginPage = () => {

    const initialState = {
        User: {
            email: "",
            password:""
        },
        Data: {}
    } 

    const [State,setState] = useState(initialState);

    useEffect(
        () => {
            axios.get('http://127.0.0.1:5500/db.json')
            .then(
                response => {setState(
                    State.Data = response.data.users
                )}
            )
            
        }, [])


    const ChangeHandler = e => {
        setState(
            {User:
                {[e.target.name]: e.target.value }
            }
        )
    }

    const Entrar = e => {
        e.preventDefault()
        let email = document.getElementsByClassName('email').value
        let senha = document.getElementsByClassName('password').value

    }


    useMemo(
        () => (State.User), [State.User]
    )

    return (
        <>
        <div className="fundo">
            <div className="filtro"></div>
        </div>
           {}
            <h1 className="txthead">Entrar</h1>
            
            <div className= "box">

                <h3 className="email">E-mail</h3>
                <input 
                    type="text"
                    name="email"
                    className="email"
                    onChange={ChangeHandler}/>  

                <h3 className="password">Senha</h3>
                <input 
                    type="password"
                    name="email"
                    className="password" 
                    onChange={ChangeHandler}/>   

                <Link to="/dashboard">  
                        <button  type= "submit" onClick="" 
                        className="btn">Entrar</button>
                </Link>

                <Link to="">
                    <h3 className="forgotpass"> Esqueceu a senha?</h3>
                </Link>

                <div className="hr"></div>

                <Link to="/signin" className="btnlink">
                    <h3 className="account"> Já possui uma conta? </h3>
                    <h3 className="link"> Criar Conta </h3>
                </Link>
            </div>
        </>        
    );
}

export default LoginPage


