import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

const selectedStyle = {
  color: "dodgerblue"
}

export class Nav extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/projects" activeStyle={selectedStyle}>Projects</NavLink></li>
          <li><NavLink to="/skills" activeStyle={selectedStyle}>Skills</NavLink></li>
          <li><NavLink to="/contact" activeStyle={selectedStyle}>Contact</NavLink></li>
        </ul>
      </nav>
    )
  }
}
