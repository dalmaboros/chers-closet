import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
