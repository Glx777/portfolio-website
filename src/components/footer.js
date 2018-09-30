import React, {Component} from 'react'

export class Footer extends Component {
  render() {
    return(
      <div id="footer">
        <ul id="social">
          <li><a href="https://www.facebook.com/" target="_blank"><img src="./img/social icons/facebook-logo-button.png" /></a></li>
          <li><a href="https://twitter.com/" target="_blank"><img src="./img/social icons/twitter-logo-silhouette.png" /></a></li>
          <li><a href="https://www.youtube.com/" target="_blank"><img src="./img/social icons/youtube-logo.png" /></a></li>
          <li><a href="https://plus.google.com/" target="_blank"><img src="./img/social icons/google-plus-logo.png" /></a></li>
          <li><a href="https://www.linkedin.com/" target="_blank"><img src="./img/social icons/linkedin-logo.png" /></a></li>
        </ul>
        <p>&copy; 2018 John Doe</p>
      </div>
    )
  }
}
