import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

//Reducer for sending and later clearing the feedback submitted by the user
const currentInfo = (state = [], action) => {
  if (action.type === `SEND_FEEDBACK`) {
    //spread return to allow different properties to be added
    return  {...state, ...action.payload}
  }

  if (action.type === `CLEAR_FEEDBACK`) {
    //empty object to clear the state after information has been posted
    return  {}
  }

  return state;
};

//set up the store
const store = createStore(
  combineReducers({
    currentInfo,
  }),
  applyMiddleware(logger),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
);
