import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClothes } from './actions/clothesActions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WardrobeContainer from './containers/WardrobeContainer'
import Loader from './components/Loader'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchClothes()
  }

  render() {
    return (
      <div className="app-wrapper">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
        <Router>
          <Route exact path="/" component={Loader} />
          <Route exact path="/browse" component={WardrobeContainer} />
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
