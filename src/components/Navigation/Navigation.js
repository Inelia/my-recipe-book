import React from "react";
import { Outlet, Link } from "react-router-dom"

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