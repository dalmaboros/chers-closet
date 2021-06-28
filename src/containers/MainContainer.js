import React, { Component } from 'react'
import { connect } from 'react-redux'
import ClothesBrowser from '../components/ClothesBrowser'
import Modal from '../components/Modal'
import { hideModal, showModal } from '../actions/clothesActions'
import './MainContainer.css'
import { Link } from 'react-router-dom'

class MainContainer extends Component {
    handleOnClickDressMe = () => {
        if (this.isMatch()) {
            this.props.hideModal()
        } else {
            this.props.showModal()
        }
    }

    isMatch = () => {
        let selectedBottom = this.props.clothes.clothes.bottoms.pieces[this.props.clothes.clothes.bottoms.selectedPiece]
        let selectedTop = this.props.clothes.clothes.tops.pieces[this.props.clothes.clothes.tops.selectedPiece]

        if (selectedTop.imageURL === "https://i.imgur.com/LH4eU3x.jpg" && selectedBottom.imageURL === "https://i.imgur.com/5RGZE6c.jpg") {
            return true
        } else {
            return false
        }
    }

    handleClose = () => {
        this.props.hideModal()
    }

    render() {
        if (this.props.clothes.clothes.length === 0) return null;

        const tops = this.props.clothes.clothes.tops
        const bottoms = this.props.clothes.clothes.bottoms

        let dressMePath;
        if (this.isMatch()) {
            dressMePath = "/dressme"
        } else {
            dressMePath = "#"
        }

        return (
            <div className="main-container">
                <Modal show={this.props.clothes.showModal} handleClose={this.handleClose} />
                <div className="content-wrapper">
                    <ClothesBrowser pieces={tops.pieces} category={tops.category} selectedPiece={tops.selectedPiece} />
                    <ClothesBrowser pieces={bottoms.pieces} category={bottoms.category} selectedPiece={bottoms.selectedPiece} />
                </div>
                <div className="button">
                    <Link to="/browse">
                        <button>Browse</button>
                    </Link>
                </div>
                <div className="button">
                    <Link to={dressMePath}>
                        <button onClick={this.handleOnClickDressMe}>DressMe</button>
                    </Link>
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
      hideModal: () => dispatch(hideModal()),
      showModal: () => dispatch(showModal())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);