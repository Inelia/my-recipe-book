import "./App.css"
import {Routes,Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Meals from './pages/Meals/Meals'
import Footer  from "./components/Footer/Footer"
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="meals" element={<Meals />} />
          <Route path="/meals/:type" element={<Meals />} />
        <Route path="/*" element ={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
