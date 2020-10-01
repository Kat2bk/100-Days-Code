import React from 'react';
import './styles/components/App.scss';
import { Route, Switch} from 'react-router-dom';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path="/" component={ExpenseDashboardPage} />
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit" component={EditPage} />
    <Route path="/help" component={HelpPage} />
    <Route component={NotFoundPage} />
    </Switch>
    </div>
  );
}

export default App;
