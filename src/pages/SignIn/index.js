import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { NewUserContext } from '../../Routes'
import './style.css'

const SignIn = () => {
    
const {NewUser, setNewUser} = useContext(NewUserContext)


const ChangeHandler = event => 
    setNewUser(
        {[event.target.name]: event.target.value}
    )

    const {name, email, password } = NewUser


        return(
            <div>
                <div className="fundo">
                    <div className="filtro"></div>
                </div>
                <div className="form">
                <form>
                    <label className="name"> 
                        Qual o seu nome?
                        <input 
                        type="text"
                        name={"name"}
                        onChange={ChangeHandler}
                        value={name}
                        >    
                        </input>
                    </label>
        
                    <label className="email">
                        E seu e-mail?
                        <input 
                        type="email"
                        name={"email"}
                        onChange={ChangeHandler}
                        value={email}>  
                        </input>
                    </label>
                
                    <label className="password"> 
                    Crie uma senha
                        <input 
                        type="password"
                        name={'password'}
                        onChange={ChangeHandler}
                        value={password}>   
                        </input>
                    </label>
                    <Link to="/signin2">
                    <button type="submit">Avançar</button>
                    </Link>

                </form>
                </div>
            
                <hr/>
                
                <h3 className="account"> Já possui uma conta?</h3>    
                <Link to="/login">
                    <div className="login"> Entrar </div>
                </Link>
                
        </div>
       );
    };

export default SignIn;
