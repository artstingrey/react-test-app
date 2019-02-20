import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import TagCloud from './components/tag-cloud/TagCloud';
import SinglePage from './components/tag-cloud/SinglePage';

class App extends Component {
 
  render() {
    
    return (
      <Router>
        <div className="App">
          <Route path='/' component={TagCloud} exact/> 
          <Route path={`/:tagId`} component={SinglePage} exact/> 
        </div>  
      </Router>
    );
  }
}

export default App;
