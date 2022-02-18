import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, NavLink, Switch } from 'react-router-dom'
import HomePage from './pages/Home';
import New from './pages/New';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
        <ul>
          <li><NavLink activeClassName="active-menu" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active-menu" to="/news" >News</NavLink></li>
          <li><NavLink activeClassName="active-menu" to="/contacts" >Contact</NavLink></li>
        </ul>

        <HomePage />

        <Switch>
          <Route path="/" element={<HomePage />}/>
          <Route path="/news" element={<New />}/>
          <Route path="/contacts" element={<Contact />}/>
        </Switch>

    </div>
  );
}

export default App;
