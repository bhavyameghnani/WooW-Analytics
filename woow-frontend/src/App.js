import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import SignInSide from './Components/LoginPage/SignInPage';
import Home from './Components/LandingPage/Home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <HashRouter>
          <Switch>
            <Route exact path="/" component={SignUpPage}/>
            <Route exact path="/login" component={SignInSide}/>
            <Route exact path="/home" component={Home}/>
          </Switch>
      </HashRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
