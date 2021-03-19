import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navigation.component'
// import HomePage from './components/homepage.component'
import GameChoice from './components/gamechoice.component'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          {/* <Route path="/" component={HomePage}/> */}
          <Route path="/" component={GameChoice}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
