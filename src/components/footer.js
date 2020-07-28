import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer>

        <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                  <li>
                    <a href="https://www.linkedin.com/in/eridan-winckler-449798169/"  target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/EriWinckler"  target="_blank" rel="noopener noreferrer">
                      <i class="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/efwinckler/" target="_blank" rel="noopener noreferrer" >
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
              </ul>

              <ul className="copyright">
                  <li>&copy; Copyright {(new Date().getFullYear())} Magnus Projects</li>              
              </ul>

            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
  </footer>
    );
  }
}

export default Footer;