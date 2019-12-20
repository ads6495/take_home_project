import React from 'react';
import './App.css';
import Table from './components/Table';
import Nav from './components/Navigation'
import Innovate from './components/Innovate'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Table} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/contact" component={Innovate} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
