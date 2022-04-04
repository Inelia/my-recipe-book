import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../../pages/Home/Home'
import Meals from './Meals/Meals'

export default function App() {
  return (
    <Router>
      <div>
        <nav className='navigation'>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/starters">Entrées</Link>
            </li>
            <li>
              <Link to="/main">Plats</Link>
            </li>
            <li>
              <Link to="/dessert">Dessert</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/starters">
            <Starters />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/dessert">
            <Dessert />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Starters() {
  return (<main>
    <Meals type='' />
  </main>);
}

function Main() {
    return (<main>
    <Meals type='' />
  </main>);
}
function Dessert() {
    return (<main>
    <Meals type='' />
  </main>);
}