import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import allReducers from "./redux/reducers/reducers";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import configureStore from "./redux/persist/configureStore";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MyFirstComponent from "./myFirstComponent";
import MySecondComponent from "./mySecondComponent";
import UrlParamComponent from "./UrlParamComponent";
let { store, persistor } = configureStore();


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                  <Routes>
                      <Route index element={<App />}/> {/* index means landing page */}
                      <Route path="/second" element={<MySecondComponent />}/>
                      <Route path="/mother">
                          <Route path="child0" element={<p>This is child 0</p>}/>
                          <Route path="child1" element={<p>This is child 1</p>}/>
                      </Route>
                      <Route path='/giveMeAParam/:param' element={<UrlParamComponent/>}/>
                      <Route path='*' element={<Navigate to='/'/>}/>
                  </Routes>
              </BrowserRouter>
          </PersistGate>
      </Provider>
  </React.StrictMode>
);

//with render we use the react-API to render the app. the root ist jsut the root of the DOM and the REACT-API inserts the React application into it