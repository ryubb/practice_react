import React from "react";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";

import RailsAPI from "./components/RailsAPI";
import LabbaseSTGAxios from "./components/LabbaseSTGAxios";
import BubbleEvent from "./components/BubbleEvent";
import HooksComponent from "./components/HooksComponent";
import Children from "./components/Children";
import TodoApp from "./components/TodoApp";
import Generator from "./components/Generator";
import SagaTest from "./components/SagaTest";

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
  { name: "LabbaseSTG API", link_to: "/labbaseSTGAPI" },
  { name: "Event Bubble", link_to: "/eventBubble" },
  { name: "Children", link_to: "/children" },
  { name: "Hooks", link_to: "/hooks" },
  { name: "TodoApp", link_to: "/todo" },
  { name: "Generator", link_to: "/generator" },
  { name: "SagaTest", link_to: "/saga_test" }
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
        <Route path="/labbaseSTGAPI" component={LabbaseSTGAxios} />
        <Route path="/eventBubble" component={BubbleEvent} />
        <Route path="/children" component={Children} />
        <Route path="/hooks" component={HooksComponent} />
        <Route path="/todo" component={TodoApp} />
        <Route path="/generator" component={Generator} />
        <Route path="/saga_test" component={SagaTest} />
      </Switch>
    </Body>
  );
};

export default App;
