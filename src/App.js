import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SideBar from './Components/SideBar';
import './App.css';
import Home from './Components/Home';
import Inbox from './Components/Inbox';
import Span from './Components/Span';
import Sent from './Components/Sent';



class App extends Component {
  
  render () {
    return (
      <div className="App">
        
        <Router>
          <SideBar  />
          <Switch>
          <Route exact path="/" component={Home}/>
            <Route path="/inbox" component={Inbox}/>
            <Route path="/sent"  component={Sent}/>
            <Route path="/span" component={Span}/>
            <Route path="/*" ><Redirect to="/" /></Route>
          </Switch>
        </Router>
       
        
      </div>
    );
  }
}

export default App;
