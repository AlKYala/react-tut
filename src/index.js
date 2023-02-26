import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import allReducers from "./redux/reducers/reducers";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(allReducers)

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

//with render we use the react-API to render the app. the root ist jsut the root of the DOM and the REACT-API inserts the React application into it