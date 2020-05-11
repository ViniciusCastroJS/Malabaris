import React, {useContext}  from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { NewUserContext } from '../../Routes'
import './style.css'

const SignIn2 = (props) => {

    const {NewUser, setNewUser} = useContext(NewUserContext)


    const ChangeHandler = event => {
       
        event.preventDefault()
        const { name, value } = event.target
    
        event.target.name === week_day ? 
            
        setNewUser(
            {
                [name]: {...week_day, value}
            }
        )
            
        : setNewUser(
            {
                [name]: value
            }
        )}

    const {day_shift, price, category, week_day } = NewUser


    return (
    <>    
    <div className="fundo">
    <div className="filtro"></div>
    </div>

        <div>
            <h3 id="criar"> Criar Conta</h3>

            <form id="white-box">
        
            <label className="category" htmlFor="category">Selecione sua categoria</label>

            <select name= {category} onChange = {ChangeHandler} id="category">
                <option value="Malabarista">Malabarista</option>
                <option value="Palhaço">Palhaço</option>
                <option value="Mágico">Mágico</option>
            </select> 


            <div id="days"> Selecione os dias que trabalhará?
            
                <button     
                    onChange= {ChangeHandler}
                    value={"Segunda"}
                    name= {week_day}
                    class="btn-monday">
                    S 
                </button>

                <button     
                    onClick= {ChangeHandler}
                    value={"Terça"}
                    name= {week_day}
                    class="btn-tuesday">
                    T
                </button>

                <button     
                    onClick= {ChangeHandler}
                    value={"Quarta"}
                    name= {week_day}
                    class="btn-wednesday">
                    Q
                </button>

                <button     
                    onClick= {ChangeHandler}
                    value={"Quinta"}
                    name= {week_day}
                    class="btn-thursday">
                    Q
                </button>

                <button     
                    onClick= {ChangeHandler}
                    value={"Sexta"}
                    name= {week_day}
                    class="btn-friday">
                    S
                </button>
                
                <button     
                    onClick= {ChangeHandler}
                    value={"Sabado"}
                    name= {week_day}
                    class="btn-saturday">
                    S
                </button>

                <button     
                    onClick= {ChangeHandler}
                    value={"Domingo"}
                    name= {week_day}
                    class="btn-sunday">
                    D
                </button>
        </div>


            <h3 className="work">Selecione os turnos que trabalhará?</h3>
            
            <button  
                onClick= {ChangeHandler}
                value={"manha"}
                name= {day_shift}
                id="manha"
                    >Manha
            </button>
            <button  
                onClick= {ChangeHandler}
                value={"Tarde"}
                name= {day_shift}
                id="tarde"
                    >Tarde
            </button>   
            <button  
                onClick= {ChangeHandler}
                value={'Noite'}
                name= {day_shift}
                id="noite"
                    >Noite
            </button> 

            <div className="price">Informe o preço do seu serviço
            
            <input 
                type="text"
                name= {price}
                onChange= {ChangeHandler}/>
            </div>
            <h4 id="money">R$</h4>

            </form>


            <Link to="/login">
                <button className="create"> Criar Conta </button>
            </Link>   
            
        </div>
    </>
    );
};


const MapStateToProps = state => (
    { 
        Name: state.NewUser.NewUser.name,
        Email: state.NewUser.NewUser.email,
        Password: state.NewUser.NewUser.password
    }
)

export default connect (MapStateToProps)(SignIn2)