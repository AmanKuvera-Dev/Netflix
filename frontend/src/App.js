import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './Components/Home/Home';

function App() {

  const user= null;

  return (
    <div className="app">
      <Router>
      {!user ? (<Redirect to="/"/>) : (
        
        <Switch>
          <Route path="/:id/Dashboard">
            <Dashboard/>
          </Route>
        </Switch>

      )}
      <Route path="/">
        <Home/>
      </Route>
        
      </Router>
    </div>
  );
}

export default App;
