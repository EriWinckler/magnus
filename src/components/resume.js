import React, { Component } from "react";

class Resume extends Component {
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div>
                    <h3>Uninter</h3>
                    <p class="info">
                        Associate System Analysis and Development
                        <span>•</span>
                        <em class="date">2020 - 2022</em>
                    </p>
                    <p>
                        I am learning to see the broader picture of all the different coding languages and getting the chance to try different ones.
                    </p>
                </div>
                <div>
                    <h3>PUCPR</h3>
                    <p class="info">
                        Law
                        <span>•</span>
                        <em class="date">2008 - 2013</em>
                    </p>
                    <p>
                        Studied law in Brazil, very interesting to see how at the same time that we have a totally different system from the US there's a lot of commonalities.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <br />
            <div className="bars">
              <ul className="skills">
                <li>
                    <span class="bar-expand python"></span>
                    <em>Python</em>
                </li>
                <li>
                    <span class="bar-expand reactjs"></span>
                    <em>ReactJS</em>
                </li>
                <li>
                    <span class="bar-expand javascript"></span>
                    <em>Javascript</em>
                </li>
                <li>
                    <span class="bar-expand css"></span>
                    <em>CSS</em>
                </li>
                <li>
                    <span class="bar-expand html"></span>
                    <em>HTML</em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
