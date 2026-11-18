import { CONTENT } from "../content";

const Resume = () => {
  const [newer, older] = CONTENT.education;

  return (
    <section id="resume">
      <h1 className="sectionHeader">
        <span>Education</span>
      </h1>
      <div className="formalEducation">
        <div className="educationRow">
          <h3>{newer.school}</h3>
          <p className="info">
            {newer.course}
            <span>•</span>
            <em className="date">{newer.years}</em>
          </p>
          <p>{newer.description}</p>
          <br />
          <h3>{older.school}</h3>
          <p className="info">
            {older.course}
            <span>•</span>
            <em className="date">{older.years}</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
