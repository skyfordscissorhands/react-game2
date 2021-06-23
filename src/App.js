
import Generator from "./pages/generator";
import HomePage from "./pages/index";
import Quiz from "./pages/quiz";

import {  BrowserRouter as Router,  Route,  Link, Switch} from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      
      <Router>
      <Switch>
      
        <Route path="/generator">
        
          <Generator />
        </Route>
        <Route path="/quiz">
          
          <Quiz />
        </Route>
        <Route path="/">
         
          <HomePage />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
