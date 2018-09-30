import React, {Component} from 'react'
import {Header} from './header'
import {Footer} from './footer'

export class Projects extends Component {
  render() {
    return(
      <div>
        <Header />
        <h1 className="heading">My Projects</h1>
        <div id="projects">
          <div className="project">
            <img src="./img/todoApp.jpg" />
            <div className="row">
              <h2>Todo App</h2>
              <div className="buttons">
                <a href="#">DEMO</a>
                <a href="https://github.com/Glx777/React-Redux-Todo-App" target="_blank">CODE</a>
              </div>
              <p>This is a simple web application. In this application one can add and delete todos. Also, the application saves todos in local storage.</p>
              <ul className="technologies">
                <li>React</li>
                <li>Redux</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
          <div className="border"></div>
          <div className="project">
            <img src="./img/notesApp.jpg" />
            <div className="row">
              <h2>Notes App</h2>
              <div className="buttons">
                <a href="#">DEMO</a>
                <a href="https://github.com/Glx777/React-Redux-Notes-App" target="_blank">CODE</a>
              </div>
              <p>Simple app that takes notes. One can note title and note details. Once added one can show and hide note details.</p>
              <ul className="technologies">
                <li>React</li>
                <li>Redux</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
          <div className="border"></div>
          <div className="project">
            <img src="./img/Recipe.jpg" />
            <div className="row">
              <h2>Recipe App</h2>
              <div className="buttons">
                <a href="#">DEMO</a>
                <a href="https://github.com/Glx777/React-Redux-Recipe-App" target="_blank">CODE</a>
              </div>
              <p>This is a simple web application. In this application one can add and delete todos. Also, the application saves todos in local storage.</p>
              <ul className="technologies">
                <li>React</li>
                <li>Redux</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
          <div className="border"></div>
          <div className="project">
            <img src="./img/snake-game.jpg" />
            <div className="row">
              <h2>Snake Game</h2>
              <div className="buttons">
                <a href="#">DEMO</a>
                <a href="https://github.com/Glx777/Snake-game" target="_blank">CODE</a>
              </div>
              <p>This is a simple web application. In this application one can add and delete todos. Also, the application saves todos in local storage.</p>
              <ul className="technologies">
                <li>JavaScript (ES5)</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>SCSS</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
          <div className="border"></div>
          <div className="project">
            <img src="./img/gold-parachute.jpg" />
            <div className="row">
              <h2>Gold Parachute Game</h2>
              <div className="buttons">
                <a href="#">DEMO</a>
                <a href="https://github.com/Glx777/Gold-Parachute" target="_blank">CODE</a>
              </div>
              <p>This is a simple web application. In this application one can add and delete todos. Also, the application saves todos in local storage.</p>
              <ul className="technologies">
                <li>JavaScript (ES5)</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
