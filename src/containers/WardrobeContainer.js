import React, { Component } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header'
import BrowsersContainer from './BrowsersContainer'
import Footer from '../components/Footer'
import Dresser from '../components/Dresser'
import './WardrobeContainer.css'

class WardrobeContainer extends Component {
    render() {
        return(
            <div className="wardrobe-container">
                <Router>
                    <Header />
                    <Route exact path="/browse" component={BrowsersContainer} />
                    <Route exact path="/dressme" component={Dresser} />
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default WardrobeContainer