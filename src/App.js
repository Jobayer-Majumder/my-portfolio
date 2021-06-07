import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/home/home/Home';
import AllProjects from './Components/AllProjects/AllProjects/AllProjects';
import PageNotFound from './Components/PageNotFound/PageNotFound';


function App() {
  return (

    <Router>
      <Switch>
        <Route path='/projects'>
          <AllProjects />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
