import React, {Component} from 'react'
import {Header} from './header'
import {Footer} from './footer'

export class Contact extends Component {
  render() {
    return(
      <div>
        <Header />
        <h1 className="heading">Contact me</h1>
        <form id="contact">
          <div className="row">
            <label>Name:</label><br />
            <input type="text" /><br />
          </div>
          <div className="row">
            <label>Email:</label><br />
            <input type="email" /><br />
          </div>
          <div className="row">
            <label>Comment:</label><br />
            <textarea></textarea><br />
          </div>
          <input type="submit" value="Submit" />
        </form>
        <p>Or, you can email me directly at <a href="mailto:redbull00718iam@gmail.com">redbull00718iam@gmail.com</a></p>
        <Footer />
      </div>
    )
  }
}
