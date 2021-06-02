import React from "react";

const Skills = () => {
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <section id="languages">
      <div className="sectionHeader">
        <h1>
          <span>Skills</span>
        </h1>
      </div>

      <br />
      <div className="skillsBars">
        <ul className="skills">
          <li>
            <span
              style={{
                width: "60%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand html"
            ></span>
            <em>JAVA</em>
          </li>
          <li>
            <span
              style={{
                width: "60%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand python"
            ></span>
            <em>Python</em>
          </li>
          <li>
            <span
              style={{
                width: "70%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand reactjs"
            ></span>
            <em>ReactJS</em>
          </li>
          <li>
            <span
              style={{
                width: "80%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand javascript"
            ></span>
            <em>Javascript</em>
          </li>
          <li>
            <span
              style={{
                width: "90%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand css"
            ></span>
            <em>CSS</em>
          </li>
          <li>
            <span
              style={{
                width: "95%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand html"
            ></span>
            <em>HTML</em>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
