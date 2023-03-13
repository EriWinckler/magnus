import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([
    {
      main: "Eri Winckler",
      subMain:
        "I am a software developer that uses React, Java and Python to create awesome stuff.",
      about:
        "I started my journey as a developer learning Python and eventually fell in love with with React and Java as a perfect pair.",
      address: "Remote",
      state: "United States",
      email: "efwinckler@gmail.com",
      school: "Uninter",
      course: "Software Developer",
      yearSpan: "2019-2022",
      schoolDescription:
        "Software Development course learning all the most important principles of the industry and the Software Development Life Cycle.",
      olderSchool: "CareerDevs",
      olderCourse: "FullStack Developer",
      olderYearSpan: "2021 - 2021",
      olderSchoolDescription:
        "Learning the best techniques and tricks focused on a real job environment in Java.",
    },
  ]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
