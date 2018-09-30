import React, {Component} from 'react'
import {Header} from './header'
import {Footer} from './footer'

export class Skills extends Component {
  render() {
    return(
      <div>
        <Header />
        <h1 className="heading">Skills:</h1>
        <div id="skills">
          <div className="skill">
            <h3>Front-end:</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS</li>
              <li>jQuery</li>
              <li>JavaScript (ES6)</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Back-end:</h3>
            <ul>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Other:</h3>
            <ul>
              <li>Git</li>
              <li>Webpack</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
