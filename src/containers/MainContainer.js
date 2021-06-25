import React, { Component } from 'react'
// import { connect } from 'react-redux'
import ClothesBrowser from '../components/ClothesBrowser'
import './MainContainer.css'
import leopardbg from '../images/leopard-bg.jpeg'

// state should go here

class MainContainer extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="carousel-wrapper">
                    <ClothesBrowser />
                    <ClothesBrowser />
                </div>
                <div className="button">
                    <p>Browse</p>
                </div>
                <div className="button">
                    <p>Dress Me</p>
                </div>
            </div>
        )
    }
}

export default MainContainer