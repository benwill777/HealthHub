import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AnalizeRecipe from './components/AnalizeRecipe'
import RecipeFacts from './components/RecipeFacts'

class App extends Component {

  render() {

    return (

      <Router>
        <Switch>
          <div>
            <Navbar>
              <h2>HealthHub</h2>
            </Navbar>


            <Route exact path="/" component={HomePage} />
            <Route exact path="/recipes/" component={AnalizeRecipe} />
            <Route exact path="/recipes/:id" component={AnalizeRecipe} />

          </div>

        </Switch>
      </Router>
    );
  }
}

export default App;
