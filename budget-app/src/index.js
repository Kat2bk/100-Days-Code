import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from "./App.js"
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import './styles/base/_base.scss';

const ExpenseDashboardPage = () => {
  return (
    <div>
    <p>This is from my dashboard</p>
    </div>
  )
}

const AddExpensePage = () => {
  return (
    <div>
    <p>This is from my add expense page</p>
    </div>
  )
}

const EditPage = () => {
  return (
    <div>
    <p>This is from my edit page</p>
    </div>
  )
}

const HelpPage = () => {
  return (
    <div>
    <p>This is from my help page</p>
    </div>
  )
}

const NotFoundPage = () => {
  return (
    <div>
    <p>404! Not found! <Link to="/">Go Home</Link></p>
    </div>
  )
}


ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
