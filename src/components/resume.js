import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";

const Resume = () => {
  const [user, setUser] = useContext(UserContext);
  const info = user[0];

  return (
    <section id="resume">
      <h1 className="sectionHeader">
        <span>Education</span>
      </h1>
      <div className="formalEducation">
        <div className="educationRow">
          <h3>{info.school}</h3>
          <p className="info">
            {info.course}
            <span>•</span>
            <em className="date">{info.yearSpan}</em>
          </p>
          <p>{info.schoolDescription}</p>
          {
            // <br />
            // <h3>{info.olderSchool}</h3>
            // <p className="info">
            //   {info.olderCourse}
            //   <span>•</span>
            //   <em className="date">{info.olderYearSpan}</em>
            // </p>
            // <p>{info.olderSchoolDescription}</p>
          }
        </div>
      </div>
    </section>
  );
};

export default Resume;
