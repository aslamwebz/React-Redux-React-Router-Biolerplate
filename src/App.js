import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import  store  from './store'
import  history  from './history'
import Dashboard from './components/Dashboard'
import About from './components/About'

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </Provider>
  )
}
