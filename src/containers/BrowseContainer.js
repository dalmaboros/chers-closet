import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ClothesBrowser from '../components/ClothesBrowser'
import Modal from '../components/Modal'
import { hideModal, showModal } from '../actions/clothesActions'
import './BrowseContainer.css'

class BrowseContainer extends Component {
    handleOnClickDressMe = () => {
        if (this.isMatch()) {
            this.props.hideModal()
        } else {
            this.props.showModal()
        }
    }

    isMatch = () => {
        let selectedBottom = this.props.clothes.bottoms.pieces[this.props.clothes.bottoms.selectedPiece]
        let selectedTop = this.props.clothes.tops.pieces[this.props.clothes.tops.selectedPiece]

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
        if (this.props.clothes.length === 0) return null;

        const tops = this.props.clothes.tops
        const bottoms = this.props.clothes.bottoms

        let dressMePath;
        if (this.isMatch()) {
            dressMePath = "/dressme"
        } else {
            dressMePath = "#"
        }

        return (
            <div className="main-container">
                <Modal show={this.props.modalVisible} handleClose={this.handleClose} />
                <div className="interface-column col-1">
                    <div className="button">
                        <Link to="/browse">
                            <button className="button-nav active">Browse</button>
                        </Link>
                    </div>
                </div>
                <div className="interface-column col-2">
                    <div className="content-wrapper">
                        <ClothesBrowser pieces={tops.pieces} category={tops.category} selectedPiece={tops.selectedPiece} />
                        <ClothesBrowser pieces={bottoms.pieces} category={bottoms.category} selectedPiece={bottoms.selectedPiece} />
                    </div>
                </div>
                <div className="interface-column col-3">
                    <div className="button">
                        <Link to={dressMePath}>
                            <button className="button-nav" onClick={this.handleOnClickDressMe}>Dress <br></br>Me</button>
                        </Link>
                    </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);