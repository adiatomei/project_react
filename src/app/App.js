import React from 'react';
import LoginScreen from './screens/LoginScreen'
import Home from './screens/Home'
import ThemeContextProvider from './contexts/ThemeContext'

import {
  Switch,
  Route
} from "react-router-dom";

function App(props) {
  
  return (
    <Switch>
      <div className="App">
        <ThemeContextProvider >
          <Route exact path="/"><LoginScreen/></Route>
          <Route exact path="/Home"><Home/></Route>
        </ThemeContextProvider >
      </div>
    </Switch>
  );
}

export default App;
