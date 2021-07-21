import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchClothes, selectNextPiece, selectPreviousPiece } from '../actions/clothesActions'
import './ClothesBrowser.css'

class ClothesBrowser extends Component {
    handleOnClickNext() {
        this.props.selectNextPiece(this.props.category)
    }

    handleOnClickPrevious() {
        this.props.selectPreviousPiece(this.props.category)
    }

    render() {
        if (this.props.pieces.length === 0) return null;

        return (
            <div className="carousel">
                <div className="carousel-image" style={{backgroundImage: `url(${this.props.pieces[this.props.selectedPiece].image_url})`}} >
                </div>

                <div className="carousel-control-panel">
                    <button className="carousel-control back" onClick={event => this.handleOnClickPrevious(event)}>
                        <span className="material-icons">
                            fast_rewind
                        </span>
                    </button>
                    <button className="carousel-control play"> 
                        <span className="material-icons">
                            play_arrow
                        </span>
                    </button>
                    <button className="carousel-control forward" onClick={event => this.handleOnClickNext(event)}>
                        <span className="material-icons">
                            fast_forward
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchClothes: () => dispatch(fetchClothes()),
        selectNextPiece: (category) => dispatch(selectNextPiece(category)),
        selectPreviousPiece: (category) => dispatch(selectPreviousPiece(category))
    }
}

export default connect(null, mapDispatchToProps)(ClothesBrowser)