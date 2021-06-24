import React from 'react'
import './Carousel.css'

const Carousel = (props) => {
    return (
        <div className="carousel">
            <div className="carousel-img">
                <p>Clothing image</p>
            </div>
            <div className="carousel-control-panel">
                <span className="carousel-control">
                    Back
                </span>
                <span className="carousel-control">
                    Play
                </span>
                <span className="carousel-control">
                    Forward
                </span>
            </div>
        </div>
    )
}

export default Carousel