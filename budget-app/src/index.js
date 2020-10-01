import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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

const Header = () => {
  return (
    <header>
      <h1>Budget App</h1>
    <NavLink to="/create" activeClassName="is-active">Add Expenses</NavLink> 
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
    <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
    </header>
  )
}

const routes = (
  <BrowserRouter>
  <div>
  <Header />
  <Switch>
  <Route exact path="/" component={ExpenseDashboardPage} />
  <Route path="/create" component={AddExpensePage} />
  <Route path="/edit" component={EditPage} />
  <Route path="/help" component={HelpPage} />
  <Route component={NotFoundPage} />
  </Switch>
  </div>
  </BrowserRouter>
)


ReactDOM.render(
  routes,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
