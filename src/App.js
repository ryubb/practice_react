import React from "react";
import styled from "react-emotion";

import HooksComponent from "./components/HooksComponent";
import LabbaseSTGAxios from "./components/LabbaseSTGAxios";

const Body = styled("div")`
  width: 1024px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Body>
      <HooksComponent />
      <LabbaseSTGAxios />
    </Body>
  );
};

export default App;
