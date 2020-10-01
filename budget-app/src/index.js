import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App.js"
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import './styles/base/_base.scss';


ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
