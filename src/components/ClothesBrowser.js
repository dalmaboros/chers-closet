import React from 'react'
import './ClothesBrowser.css'

const ClothesBrowser = (props) => {
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

export default ClothesBrowser