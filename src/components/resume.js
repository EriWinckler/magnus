import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <h1 className="sectionHeader">
          <span>Education</span>
        </h1>
        <div className="formalEducation">
          <div className="educationRow">
            <h3>Uninter</h3>
            <p className="info">
              Associate System Analysis and Development
              <span>•</span>
              <em className="date">2020 - 2022</em>
            </p>
            <p>
              I am learning to see the broader picture of all the different coding
              languages and getting the chance to try different ones.
            </p>
            <br />
            <h3>PUCPR</h3>
            <p className="info">
              Law
              <span>•</span>
              <em className="date">2008 - 2013</em>
            </p>
            <p>
              Studied law in Brazil, very interesting to see how at the same time
              that we have a totally different system from the US there's a lot of
              commonalities.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
