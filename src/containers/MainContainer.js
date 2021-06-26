import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClothesBrowser from '../components/ClothesBrowser'
import { fetchClothes } from '../actions/clothesActions'
import './MainContainer.css'

class MainContainer extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="carousel-wrapper">
                    <ClothesBrowser clothes={this.props.clothes.clothes.tops} selectedPiece={this.props.clothes.selectedTop} />
                    <ClothesBrowser clothes={this.props.clothes.clothes.bottoms} selectedPiece={this.props.clothes.selectedBottom} />
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

const mapStateToProps = state => {
    return state
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchClothes: () => dispatch(fetchClothes())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);