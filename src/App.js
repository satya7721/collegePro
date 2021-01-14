
import Login from '../src/components/Login';
import Done from '../src/components/Done';
import {Route,BrowserRouter as Router ,Switch } from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
    
    <Switch>
    < Route path="/done" exact component={Done}>
      
      </Route>
      <Route path="/" component={Login}>
      
      </Route>
      
    </Switch>

    </div>
    </Router>
    
  );
}

export default App;
