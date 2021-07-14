import './App.css';
import React from 'react'

import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';

import HomePage from './pages/home';
import CardDetailPage from './pages/cardDetailPage';

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
