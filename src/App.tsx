import React from "react";
import { Route } from "react-router-dom";

import FCCounterApp from "./components/FCCounterApp";
import ClassCounterApp from "./components/ClassCounterApp";
import StatefulComponentWithDefaultPropsApp from "./components/StatefulComponentWithDefaultPropsApp";
import GenericListComponentApp from "./components/GenericListComponentApp";
import RenderPropsApp from "./components/RenderPropsApp";
import MouseProviderApp from "./components/MouseProviderApp";
import Counter from "./components/HooksUseStateCore";
import { ReducerCounter } from "./components/HooksUseReducerCore";
import ChHeader from "./components/ChHeader.jsx";
import UsersContainer from "./components/pages/UsersContainer";

import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const App: React.FC<any> = (props:any) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <ChHeader />
      <Route
        exact
        path="/users"
        render={routerProps => {
          return <UsersContainer {...routerProps}/>; //FIXME Better control of routerProps - needed?
        }}
      />

      <Route
        exact
        path="/others" //TODO: Refactor as a separate page (similar to above)
        render={routerProps => {
          return (
            <React.Fragment>
              <h5>Functional Component </h5>
              <FCCounterApp />
              <h5>Class </h5>
              <ClassCounterApp />
              <h5>Stateful Component with Default Props</h5>
              <StatefulComponentWithDefaultPropsApp />
              <h5>Generic List Component</h5>
              <GenericListComponentApp />
              <h5>Render Props</h5>
              <RenderPropsApp />
              <h5>Mouse Provider (a form of render props)</h5>
              <MouseProviderApp />
              <h5>Hooks counter</h5>
              <Counter initialCount={10} />
              <h5>Hooks Reducer counter</h5>
              <ReducerCounter initialCount={300} />
            </React.Fragment>
          );
        }}
      />
    </ThemeProvider>
  );
};

export default App;
