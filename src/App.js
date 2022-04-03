import { Switch, Redirect, Route } from 'react-router-dom';
import React from 'react';
import UseStateSplit from './pages/UseStateSplit';
import UseReducerSplit from './pages/UseStateSplit';
import Splitter from './pages/Splitter';
import Layout from './UI/Layout.js';

function App() {
  return (
    <Layout>


      <Switch>
        <Route path="/usestate">
          <UseStateSplit/>
        </Route>
        <Route path="/usereducer">
          <UseReducerSplit/>
        </Route>
        <Route path="/split">
          <Splitter/>
        </Route>
        <Route path="*">
          <Redirect to="/usestate"/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
