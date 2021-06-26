import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchClothes, selectNextPiece } from '../actions/clothesActions'
import './ClothesBrowser.css'

class ClothesBrowser extends Component {
    handleOnClickNext() {
        this.props.selectNextPiece(this.props.category)
    }

    handleOnClickPrevious() {
        // this.props.selectPreviousPiece()
    }

    render() {
        if (this.props.clothes.length === 0) return null;
        return (
            <div className="carousel">
                <div className="carousel-img">
                    <img src={this.props.clothes[0].imageURL} width="100%" alt="" />
                </div>
                <div className="carousel-control-panel">
                    <button className="carousel-control" onClick={event => this.handleOnClickPrevious(event)}>
                        Back
                    </button>
                    <button className="carousel-control">
                        Play
                    </button>
                    <button className="carousel-control" onClick={event => this.handleOnClickNext(event)}>
                        Forward
                    </button>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return state
// }

function mapDispatchToProps(dispatch) {
    return {
        fetchClothes: () => dispatch(fetchClothes()),
        selectNextPiece: (category) => dispatch(selectNextPiece(category))
    }
}

export default connect(null, mapDispatchToProps)(ClothesBrowser)