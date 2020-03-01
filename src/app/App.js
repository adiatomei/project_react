import React from 'react';
import LoginScreen from './screens/LoginScreen'
import Home from './screens/Home'

import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/"><LoginScreen/></Route>
        <Route exact path="/Home"><Home/></Route>
      </div>
    </Switch>
  );
}

export default App;
