import React from "react";
import styled from "react-emotion";

// import HooksComponent from "./components/HooksComponent";
// import LabbaseSTGAxios from "./components/LabbaseSTGAxios";
import RailsAPI from "./components/RailsAPI";
import BubbleEvent from "./components/BubbleEvent";

const Body = styled("div")`
  width: 1024px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Body>
      <RailsAPI />
      <BubbleEvent />
    </Body>
  );
};

export default App;
