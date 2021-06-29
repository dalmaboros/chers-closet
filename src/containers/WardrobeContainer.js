import React, { Component } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header'
import BrowseContainer from './BrowseContainer'
import Footer from '../components/Footer'
import DressMe from '../components/DressMe'
import './WardrobeContainer.css'

class WardrobeContainer extends Component {
    render() {
        return(
            <div className="wardrobe-container">
                <Router>
                    <Header />
                    <Route exact path="/browse" component={BrowseContainer} />
                    <Route exact path="/dressme" component={DressMe} />
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default WardrobeContainer