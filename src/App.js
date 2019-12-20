import React from 'react';
import './App.css';
import Table from './components/Table';
import Nav from './components/Navigation'
import About from './components/About'
import FormField from './components/FormField'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Table} />
          <Route path="/about" component={About} />
          <Route path="/form" component={FormField} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
