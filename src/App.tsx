import React from "react";

import "./App.css";
import FCCounterApp from "./components/FCCounterApp";
import ClassCounterApp from "./components/ClassCounterApp";
import StatefulComponentWithDefaultPropsApp from "./components/StatefulComponentWithDefaultPropsApp";
import GenericListComponentApp from "./components/GenericListComponentApp";
import RenderPropsApp from "./components/RenderPropsApp";
import MouseProviderApp from "./components/MouseProviderApp";
import Counter from "./components/HooksUseStateCore";
import { ReducerCounter } from "./components/HooksUseReducerCore";
import ChHeader from "./components/ChHeader.jsx";
import UsersContainer from './components/UsersContainer'

import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const App = () => (
  <ThemeProvider>
    <CSSReset />
    <ChHeader />
    <UsersContainer/>
    <h5>Functional Component </h5>
    <FCCounterApp />
    <h5>Class </h5>
    <ClassCounterApp />
    <h5>Stateful Component with Default Props</h5>
    <StatefulComponentWithDefaultPropsApp />
    <h5>Generic List Component</h5>
    {/* <GenericListComponentApp /> */}
    <h5>Render Props</h5>
    <RenderPropsApp />
    <h5>Mouse Provider (a form of render props)</h5>
    <MouseProviderApp />
    <h5>Hooks counter</h5>
    <Counter initialCount={10} />
    <h5>Hooks Reducer counter</h5>
    <ReducerCounter initialCount={300} />
    <h5>Ch start</h5>
  </ThemeProvider>
);

export default App;
