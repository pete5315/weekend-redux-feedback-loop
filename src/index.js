import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';



const feedback = (state = [], action) => {
  if (action.type === `GET_FEEDBACK`) {
    return  action.payload
  }
  return state;
};

const currentInfo = (state = [], action) => {
  if (action.type === `SEND_FEEDBACK`) {
    return  {...state, ...action.payload}
  }

  if (action.type === `CLEAR_FEEDBACK`) {
    return  {}
  }

  return state;
};

const store = createStore(
  combineReducers({
    feedback,
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
