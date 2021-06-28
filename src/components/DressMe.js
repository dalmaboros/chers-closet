import React, { Component } from 'react'
import './DressMe.css'
import { Link } from 'react-router-dom'
import dressme from '../images/dressme.gif'

class DressMe extends Component {
    render() {

    return(
        <div className="main-container">
            <div className="content-wrapper">
                <img src={`${dressme}?${Date.now()}`} alt="" width="100%" />
            </div>
            <div className="button">
                <Link to="/browse">
                    <button>Browse</button>
                </Link>
            </div>
            <div className="button">
                <Link to="/dressme">
                    <button>Dress Me</button>
                </Link>
            </div>
        </div>
    )
    }
}

export default DressMe