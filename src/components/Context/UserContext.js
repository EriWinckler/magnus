import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([
    {
      main: "Eridan Winckler",
      subMain:
        "Backend & Platform Engineer: Java/Spring Boot, ERP integrations, Ansible, Docker, GitLab CI/CD, AWS",
      about:
        "Brazil-based backend and platform engineer with four-plus years of professional Java and Spring Boot development on a fully remote US team. I build enterprise content management and ERP integration platforms and the automation that provisions, deploys, and releases them: Ansible, Docker, GitLab CI/CD and AWS.",
      address: "Brazil",
      state: "remote (UTC-3)",
      email: "efwinckler@gmail.com",
      school: "Uninter International",
      course: "B.S. in Software Engineering",
      yearSpan: "2019 - 2022",
      schoolDescription:
        "Bachelor's degree covering software engineering principles and the full software development life cycle.",
      olderSchool: "Pontifícia Universidade Católica do Paraná (PUCPR)",
      olderCourse: "Law studies",
      olderYearSpan: "2008 - 2013",
      olderSchoolDescription: "",
    },
  ]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
