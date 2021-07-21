import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ClothesBrowser from '../components/ClothesBrowser'
import Modal from '../components/Modal'
import './BrowsersContainer.css'

class BrowsersContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMatch: false,
            modalVisible: false,
            dressMePath: "#"
        }
    }

    handleOnClick = () => {
        if (this.state.isMatch) {
            this.setState({modalVisible: false})
        } else {
            this.setState({modalVisible: true})
        }
    }

    handleClose = () => {
        this.setState({modalVisible: false})
    }

    static getDerivedStateFromProps(props, state) {
        if (props.clothes.tops && props.clothes.bottoms) {
            let selectedTop = props.clothes.tops.pieces[props.clothes.tops.selectedPiece]
            let selectedBottom = props.clothes.bottoms.pieces[props.clothes.bottoms.selectedPiece]

            if (selectedTop.image_url === "https://i.imgur.com/LH4eU3x.jpg" && selectedBottom.image_url === "https://i.imgur.com/5RGZE6c.jpg") {
                return {isMatch: true, dressMePath: "/dressme"}
            } else {
                return {isMatch: false, dressMePath: "#"}
            }
        } else {
            return null
        }
    }

    render() {
        if (this.props.clothes.length === 0) return null;

        return (
            <div className="main-container">

                <Modal show={this.state.modalVisible} handleClose={this.handleClose} />

                <div className="interface-column col-1">
                    <div className="button">
                        <Link to="/browse">
                            <button className="button-nav active">Browse</button>
                        </Link>
                    </div>
                </div>

                <div className="interface-column col-2">
                    <div className="content-wrapper">
                        <ClothesBrowser 
                            pieces={this.props.clothes.tops.pieces} 
                            category={this.props.clothes.tops.category} 
                            selectedPiece={this.props.clothes.tops.selectedPiece} />
                        <ClothesBrowser 
                            pieces={this.props.clothes.bottoms.pieces} 
                            category={this.props.clothes.bottoms.category} 
                            selectedPiece={this.props.clothes.bottoms.selectedPiece} />
                    </div>
                </div>

                <div className="interface-column col-3">
                    <div className="button">
                        <Link to={this.state.dressMePath}>
                            <button className="button-nav" onClick={this.handleOnClick}>Dress <br></br>Me</button>
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
  
  export default connect(mapStateToProps)(BrowsersContainer);