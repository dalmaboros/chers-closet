import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClothes } from './actions/clothesActions';

import './App.css';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import Footer from './components/Footer'

class App extends Component {
  componentDidMount() {
    this.props.fetchClothes()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
        <Footer />
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
