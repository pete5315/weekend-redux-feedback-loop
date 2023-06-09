import React from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling'
import Submitted from '../Submitted/Submitted';
import Support from '../Support/Support';
import Understanding from '../Undestanding/Understanding';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <Router>        

      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

        <Route exact path="/">
          <Feeling />
        </Route>
        <Route path="/support">
          <Understanding />
        </Route>
        <Route path="/comments">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/submitted">
          <Submitted />
        </Route>
      </Router>
    </div>
  );
}

export default App;
