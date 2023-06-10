import React from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling'
import Submitted from '../Submitted/Submitted';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import RatingComponent from '../RatingComponent/RatingComponent';


function App() {


  const feedbackText = {
    feeling: {
      sentence: "How are you feeling today?",
      type: "Feeling",
      nextFeedback: "understanding"
    },
    understanding: {
      sentence: "How well are you understanding the content?",
      type: "Understanding",
      nextFeedback: "support"
    },
    support: {
      sentence: "How well are you being supported?",
      type: "Support",
      nextFeedback: "comments"
    },
  };

  return (
    <div className='App'>
      <Router>        

      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <form>
        <Route exact path="/">
            <RatingComponent feedbackText={feedbackText.feeling} />
          </Route>
          <Route path="/understanding">
            <RatingComponent feedbackText={feedbackText.understanding} />
          </Route>
          <Route path="/support">
            <RatingComponent feedbackText={feedbackText.support} />
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
      </form>

      </Router>
    </div>
  );
}

export default App;
