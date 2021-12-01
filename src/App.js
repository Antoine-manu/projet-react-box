import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss';
import Home from './react/home'
import Simulate from './react/simulate'
import About from './react/about'
import Header from './react/header'

function App() {
  return (
      <Router>
      <header className="App-header">
          <Header/>
      </header>
      <main>
        <Switch>
          <Route exact path="/about">
              <About />
          </Route>
          <Route exact path="/simulate">
              <Simulate />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;



    