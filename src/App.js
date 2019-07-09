import React from "react";
import styled from "react-emotion";
import { Link, Route, Switch } from "react-router-dom";

// import LabbaseSTGAxios from "./components/LabbaseSTGAxios";
import RailsAPI from "./components/RailsAPI";
import BubbleEvent from "./components/BubbleEvent";
import HooksComponent from "./components/HooksComponent";
import Children from "./components/Children";

const Body = styled("div")`
  width: 1024px;
  margin: 0 auto;
`;

const Header = styled("div")`
  width: 100%;
  height: 50px;
  background-color: f5f5f5;
`;

const CustomLink = styled(Link)`
  margin-right: 10px;
`;

const links = [
  { name: "Rails API", link_to: "/railsAPI" },
  { name: "Event Bubble", link_to: "/eventBubble" },
  { name: "Children", link_to: "/children" },
  { name: "Hooks", link_to: "/hooks" }
];

const App = () => {
  return (
    <Body>
      <Header>
        {links.map(link => {
          return (
            <CustomLink key={link.link_to} to={link.link_to}>
              {link.name}
            </CustomLink>
          );
        })}
      </Header>
      <Switch>
        <Route path="/railsAPI" component={RailsAPI} />
        <Route path="/eventBubble" component={BubbleEvent} />
        <Route path="/children" component={Children} />
        <Route path="/hooks" component={HooksComponent} />
      </Switch>
    </Body>
  );
};

export default App;
