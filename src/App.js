import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route exact path="/about" component = {About} />
        <Route exact path="/" component = {Home} />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
