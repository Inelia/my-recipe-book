import "./App.css"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Meals from './pages/Meals/Meals'
function App() {

  return (
    <div className="App">
      <p>J-michel craint</p>
      <Routes>
        <Route path="/" element ={<Home />} />
         <Route path="/services" element ={<Home />} />
        <Route path="meals" element={<Meals />} >
          <Route path="starter" element={<Meals type="starter" />} />
          <Route path="starter" element={<Meals type="main" />} />
          <Route path="starter" element={<Meals type="dessert" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
