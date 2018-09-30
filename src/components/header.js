import React, {Component} from 'react'
import {Nav} from './nav'

export class Header extends Component {
  render() {
    return(
      <div>
        <div id="beforeNav">
          <img src="./img/photo.jpg" alt="Photo" />
          <h1>John Doe</h1>
        </div>
        <Nav />
        <div className="border"></div>
      </div>
    )
  }
}
