import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClothesBrowser from '../components/ClothesBrowser'
import { determineMatch } from '../actions/clothesActions'
import './MainContainer.css'

class MainContainer extends Component {
    handleOnClickDressMe = () => {
        let selectedBottom = this.props.clothes.clothes.bottoms.pieces[this.props.clothes.clothes.bottoms.selectedPiece]
        let selectedTop = this.props.clothes.clothes.tops.pieces[this.props.clothes.clothes.tops.selectedPiece]

        this.props.determineMatch({top: selectedTop, bottom: selectedBottom})
    }

    render() {
        console.log(this.props)
        const tops = this.props.clothes.clothes.tops
        const bottoms = this.props.clothes.clothes.bottoms
        
        if (this.props.clothes.clothes.length === 0) return null;
        return (
            <div className="main-container">
                <div className="carousel-wrapper">
                    <ClothesBrowser pieces={tops.pieces} category={tops.category} selectedPiece={tops.selectedPiece} />
                    <ClothesBrowser pieces={bottoms.pieces} category={bottoms.category} selectedPiece={bottoms.selectedPiece} />
                </div>
                <div className="button">
                    <button>Browse</button>
                </div>
                <div className="button">
                    <button onClick={this.handleOnClickDressMe}>Dress Me</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      determineMatch: (selectedPieces) => dispatch(determineMatch(selectedPieces))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);