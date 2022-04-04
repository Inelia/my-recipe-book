import "./App.css"
import {Routes,Route, Link} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Meals from './pages/Meals/Meals'
import Footer  from "./components/Footer/Footer"
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails"
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="meals" element={<Meals />} />
          <Route path="/meals/:type" element={<Meals />} />
        <Route path="/*" element ={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />}/>
      </Routes>
      <Footer />
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Il n'y a rien à voir ici!</h2>
      <p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </p>
    </div>
  );
}
export default App;