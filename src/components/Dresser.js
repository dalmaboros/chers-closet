import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dressme from '../images/dressme.gif'
import './Dresser.css'

class Dresser extends Component {
    render() {

    return(
        <div className="main-container">
            <div className="interface-column col-1">
                <div className="button">
                    <Link to="/browse">
                        <button className="button-nav">Browse</button>
                    </Link>
                </div>
            </div>
            <div className="interface-column col-2">
                <div className="content-wrapper dressme" style={{backgroundImage: `url(${dressme}?${Date.now()})`}}>
                    {/* <img src={`${dressme}?${Date.now()}`} alt="" id="dressme" /> */}
                </div>
            </div>
            <div className="interface-column col-3">
                <div className="button">
                    <Link to="/dressme">
                        <button className="button-nav active">Dress <br></br>Me</button>
                    </Link>
                </div>
            </div>
        </div>
    )
    }
}

export default Dresser