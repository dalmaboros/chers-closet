import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClothes } from './actions/clothesActions';

import './App.css';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import Footer from './components/Footer'
import DressMe from './components/DressMe'
import Loader from './components/Loader'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    this.props.fetchClothes()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={Loader} />
          <Route exact path="/browse" component={MainContainer} />
          <Route exact path="/dressme" component={DressMe} />
          <Footer />
        </Router>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
