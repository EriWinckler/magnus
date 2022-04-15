import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([
    {
      main: "Eri Winckler",
      subMain:
        "I am a web developer and I like to use React, Java and Python to create awesome stuff.",
      about:
        "I am a self taught developer that started my journey learning Python and eventually fell in love with Front End, learning HTML, CSS, JS and React. Lately I've picked up Java and I am loving the language.",
      address: "East Providence",
      state: "Rhode Island, USA, 02914",
      email: "efwinckler@gmail.com",
      school: "CareerDevs",
      course: "FullStack Developer",
      yearSpan: "2021-2022",
      schoolDescription:
        "Learning the best techniques and tricks for real job environment in Java",
      olderSchool: "Uninter",
      olderCourse: "Associate System Analysis and Development",
      olderYearSpan: "2020 - 2022",
      olderSchoolDescription:
        "I am learning to see the broader picture of all the different coding languages and getting the chance to try different ones.",
    },
  ]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
