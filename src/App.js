import './App.css';
import { useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Form from './components/Form';
import ResourceDisplay from './components/ResourceDisplay';
import Error from './components/Error';

function App() {

  return (
    <div className="App container p-2">
      <BrowserRouter>
        <Form></Form>
        <Switch>
          <Route exact path="/:resource/:id">
            <ResourceDisplay />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
