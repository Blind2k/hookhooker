import { Switch, Redirect, Route } from "react-router-dom";
import React from "react";
import UseStateSplit from "./components/useState/UseStateSplit";
import UseReducerSplit from "./components/useReducer/UseReducerSplit";
import UseEffectSplit from "./components/useEffect/useEffectSplit";
import Splitter from "./pages/Splitter";
import Layout from "./UI/Layout.js";

function App() {
   return (
      <Layout>
         <Switch>
            <Route path="/usestate">
               <UseStateSplit />
            </Route>
            <Route path="/usereducer">
               <UseReducerSplit />
            </Route>
            <Route path="/useeffect">
               <UseEffectSplit />
            </Route>
            <Route path="/split">
               <Splitter />
            </Route>
            <Route path="*">
               <Redirect to="/usestate" />
            </Route>
         </Switch>
      </Layout>
   );
}

export default App;
