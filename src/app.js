import React, {Component} from 'react'
import {render} from 'react-dom'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Home} from './components/home'
import {Projects} from './components/projects'
import {Contact} from './components/contact'
import {Skills} from './components/skills'
import {NotFound} from './components/notfound'
import './styles/styles.scss'

render(
  <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
  </HashRouter>,
  document.getElementById("react-container")
)
