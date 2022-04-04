import React from "react";
import { Outlet, Link } from "react-router-dom"
// import Home from '../../pages/Home/Home'
// import Meals from '../Meals/Meals'

export default function App() {
  return (
        <nav className='navigation'>
              <Link to="/home">Accueil</Link>
              <Link to="/meals/starter">Entrées</Link>
              <Link to="/meals/main">Plats</Link>
              <Link to="/meals/dessert">Desserts</Link>
              <Outlet/>
        </nav>
  );
}

// function Starters() {
//   return (<main>
//     <Meals type='' />
//   </main>);
// }

// function Main() {
//     return (<main>
//     <Meals type='' />
//   </main>);
// }
// function Dessert() {
//     return (<main>
//     <Meals type='' />
//   </main>);
// }