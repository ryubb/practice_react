import React from "react";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";

import BubbleEvent from "./components/BubbleEvent";
import HooksComponent from "./components/HooksComponent";
import Children from "./components/Children";
import Generator from "./components/Generator";
import SagaTest from "./components/SagaTest";
import TodoAppSaga from "./components/TodoAppSaga";

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
  { name: "Event Bubble", link_to: "/eventBubble" },
  { name: "Children", link_to: "/children" },
  { name: "Hooks", link_to: "/hooks" },
  { name: "Generator", link_to: "/generator" },
  { name: "SagaTest", link_to: "/saga_test" },
  { name: "TodoSaga", link_to: "/todo_saga" }
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
        <Route path="/eventBubble" component={BubbleEvent} />
        <Route path="/children" component={Children} />
        <Route path="/hooks" component={HooksComponent} />
        <Route path="/generator" component={Generator} />
        <Route path="/saga_test" component={SagaTest} />
        <Route path="/todo_saga" component={TodoAppSaga} />
      </Switch>
    </Body>
  );
};

export default App;
