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
                width: "95%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand css"
            ></span>
            <em>Java</em>
          </li>
          <li>
            <span
              style={{
                width: "90%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand css"
            ></span>
            <em>Spring Boot</em>
          </li>
          <li>
            <span
              style={{
                width: "80%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand javascript"
            ></span>
            <em>Docker</em>
          </li>
          <li>
            <span
              style={{
                width: "80%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand javascript"
            ></span>
            <em>Ansible</em>
          </li>
          <li>
            <span
              style={{
                width: "80%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand javascript"
            ></span>
            <em>AWS</em>
          </li>
          <li>
            <span
              style={{
                width: "70%",
                backgroundColor: getRandomColor(),
              }}
              className="bar-expand reactjs"
            ></span>
            <em>GitLab CI/CD</em>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
