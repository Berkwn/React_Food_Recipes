import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
//pages:
import Login from './Pages/Login'
import Recipes from './Pages/Recipes'
import Recipedetail from './Pages/Recipedetail'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/Recipes' element={<Recipes></Recipes>}></Route>
      <Route path='/Recipedetail' element={<Recipedetail></Recipedetail>}></Route>
      </Routes>
      
 
    
    </BrowserRouter>
  
    </>
  )
}

export default App
