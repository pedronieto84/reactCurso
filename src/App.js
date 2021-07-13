import './App.css';
import React from 'react'

import CardDetailPage from './pages/cardDetail';

import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import HomePage from './pages/home';

class App extends React.Component {


  render() {
    return (
      <Router>
  <Switch>
     
       <Route exact path="/:title">
        <CardDetailPage />
      </Route>
        <Route exact path="/">
       <HomePage />
      </Route>
      
      </Switch>
      </Router>
    
   
    )
  }
}

export default App;
