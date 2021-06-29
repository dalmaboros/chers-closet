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
        let imageURL = this.props.pieces[this.props.selectedPiece].imageURL
        return (
            <div className="carousel">
                <div className="carousel-img" style={{backgroundImage: `url(${imageURL})`}} >
                    {/* <img src={this.props.pieces[this.props.selectedPiece].imageURL} class="piece" alt="" /> */}
                </div>
                <div className="carousel-control-panel">
                    <button className="carousel-control back" onClick={event => this.handleOnClickPrevious(event)}>
                        <span class="material-icons">
                            fast_rewind
                        </span>
                    </button>
                    <button className="carousel-control play">
                        <span class="material-icons">
                            play_arrow
                        </span>
                    </button>
                    <button className="carousel-control forward" onClick={event => this.handleOnClickNext(event)}>
                        <span class="material-icons">
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