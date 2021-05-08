import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import SignInSide from './Components/LoginPage/SignInPage';
import Home from './Components/LandingPage/Home';
import ProjectForm from './Components/Forms/ProjectForm'
import EmployeeProfile from './Components/EmployeeProfile/EmployeeProfile';
import ProjectPage from './Components/ProjectPage/ProjectPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <HashRouter>
          <Switch>
            <Route exact path="/" component={SignUpPage}/>
            <Route exact path="/login" component={SignInSide}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/addProject" component={ProjectForm}/>
            <Route exact path="/employeesProfile" component={EmployeeProfile}/>
            <Route exact path="/projectPage/:pid" component={ProjectPage}/>
          </Switch>
      </HashRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
