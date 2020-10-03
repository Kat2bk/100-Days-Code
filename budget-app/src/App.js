import React from 'react';
import './styles/components/App.scss';
import { Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import NotFoundPage from "./components/NotFoundPage";
import HelpPage from "./components/HelpPage";
import AddExpensePage from "./components/AddExpensePage";
import ExpenseDashboardPage from "./components/ExpenseDashboard";

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path="/" component={ExpenseDashboardPage} />
    <Route path="/create" component={AddExpensePage} />
    <Route path="/help" component={HelpPage} />
    <Route component={NotFoundPage} />
    </Switch>
    </div>
  );
}

export default App;

// <Route path="/edit/:id" component={EditPage} />