import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([
    {
      main: "Eri Winckler",
      subMain:
        "I am a web developer and I like to use React, Python and specially Java to create awesome stuff.",
      about:
        "I am a self taught developer that started my journey learning Python and eventually fell in love with Front End, learning HTML, CSS, JS and React. Lately I've picked up Java and I am loving the language.",
      address: "East Providence",
      state: "Rhode Island, USA, 02914",
      email: "efwinckler@gmail.com",
      school: "Uninter",
      course: "Associate System Analysis and Development",
      yearSpan: "2020 - 2022",
      schoolDescription:
        "I am learning to see the broader picture of all the different coding languages and getting the chance to try different ones.",
      olderSchool: "PUCPR",
      olderCourse: "Law",
      olderYearSpan: "2008 - 2013",
      olderSchoolDescription:
        "Studied law in Brazil, very interesting to see how at the same time that we have a totally different system from the US there's a lot of commonalities.",
    },
  ]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
