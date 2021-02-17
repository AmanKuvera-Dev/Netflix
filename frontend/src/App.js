import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const user= "null";

  return (
    <div className="app">
      <Router>
      {!user ? (<Redirect to="/"/>) : (<Redirect to="/:id/Dashboard"/>)}
      <Navbar user={user}/>
        <Switch>
          <Route path="/:id/Dashboard">
            <Dashboard/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

      
        
      </Router>
    </div>
  );
}

export default App;
