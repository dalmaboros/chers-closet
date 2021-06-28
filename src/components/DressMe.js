import React from 'react'
import './DressMe.css'
import dressme from '../images/dressme.gif'

const DressMe = () => {
    return(
        <div className="main-container">
            <div className="content-wrapper">
                <img src={dressme} alt="" id="dressme" width="100%" />
            </div>
            <div className="button">
                <button>Browse</button>
            </div>
            <div className="button">
                <button>Dress Me</button>
            </div>
        </div>
    )
}

export default DressMe