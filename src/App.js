import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import login from './components/login';
import home from './components/home';

function App() {
  return (
    <div className="App">
        <Router>
            <div className="container">
				<Switch>
					<Route path = "/" exact component = {ListUserComponent}></Route>
					<Route path = "/users" component = {ListUserComponent}></Route> 
					<Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
					<Route path = "/view-user/:id" component = {ViewUserComponent}></Route>
					<Route path = "/update-user/:id" component = {UpdateUserComponent}></Route>
					<Route path = "/login" component = {login}></Route>
					<Route path = "/home/:id" component = {home}></Route>
				</Switch>
			</div>
        </Router>
    </div>
  );
}

export default App;
