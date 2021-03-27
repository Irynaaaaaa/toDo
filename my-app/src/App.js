import './App.css';
import React, {useState} from 'react';
import {SignUp} from './login/sign-up/index';
import {MainForm} from './to-do/main-form/index';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 

function App() {

  const [name, setName] = useState( '');
  const onButtonClick =  (names) =>
  {
      setName(names);
  }


  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path = "/signup">
              <MainForm name = {name}/>
            </Route>
            <Route path= "/">
              <SignUp onButtonClick = {onButtonClick}/>
            </Route>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
