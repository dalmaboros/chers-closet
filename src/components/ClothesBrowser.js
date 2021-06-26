import React, { Component } from 'react'
import './ClothesBrowser.css'

const ClothesBrowser = (props) => {
    return (
        <div className="carousel">
            <div className="carousel-img">
                <img src={props.clothes[0].imageURL} width="100%" alt="" />
            </div>
            <div className="carousel-control-panel">
                <button className="carousel-control" >
                    Back
                </button>
                <button className="carousel-control">
                    Play
                </button>
                <button className="carousel-control">
                    Forward
                </button>
            </div>
        </div>
    )
}

export default ClothesBrowser