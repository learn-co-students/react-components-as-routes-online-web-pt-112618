import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => 
<div>
  <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
  <NavLink to="/about" exact style={link} activeStyle={{background: 'darkblue'}}>About</NavLink>
  <NavLink to="/login" exact style={link} activeStyle={{background: 'darkblue'}}>Login</NavLink>
  <NavLink to="/signup" exact style={link} activeStyle={{background: 'yellow'}}>Signup</NavLink>
  <NavLink to="/messages" exact style={link} activeStyle={{background: 'green'}}>Messages</NavLink>
</div>

const Home =() => <h1>Home!</h1>;

const About = () => <h1>This is my about component!</h1>;

const Login = () => 
  <form>
    <h1>Login</h1>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="password" />
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="Login" />
  </form>

const Signup = () => <h1>This is Sign up!</h1>;

const Messages = () => <h1>Add some messages!</h1>

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
