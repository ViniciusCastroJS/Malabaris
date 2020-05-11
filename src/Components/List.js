import React, {useEffect} from 'react'
import Card from './Card';
import {connect } from 'react-redux'
import {FetchEvents} from '../Redux/ExportAction'
import { bindActionCreators} from 'redux'
import '../pages/dashboard/style.css'


const List = ({banco_de_dados,FetchEvents}) => {

    useEffect(
        ()=> {
            FetchEvents()
        },[FetchEvents]
    )

    return (
        <div className="list">
        
            <h3 className="manha"> Manhã </h3>
                <div className="linha"></div>
            <h3 className="tarde"> Tarde </h3>
                <div className="linha2"></div>
            <div className="not-box"></div>
            <h3 className="notavailable"> Não Disponível </h3>

            {banco_de_dados.events.map(
                    elem => <Card
                    key={Date.now()} 
                    nome={elem.name}
                    local={elem.address}
                    turno={elem.day_shift}
                    />
                )}
        </div>
    )
}

const mapStateToProps = state => 
    ({ banco_de_dados : state.dados})

const mapDispatchToProps = dispatch => bindActionCreators({FetchEvents}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(List)

