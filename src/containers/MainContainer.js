import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Carousel from '../components/Carousel'
import './MainContainer.css'
import leopardbg from '../leopard-bg.jpeg'

class MainContainer extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="carousel-wrapper">
                    <Carousel clothes={tops} />
                    <Carousel clothes={bottoms} />
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