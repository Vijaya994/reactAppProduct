
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './components/Pages/Home';
import Contacts from './components/Pages/Contacts';
import About from './components/Pages/About';
import AddProduct from './components/Products/AddProduct';
import EditProduct from './components/Products/EditProduct';
import Product from './components/Products/Product';
 
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
       <Route exact path='/home' element={<Home />}>Home</Route>
       <Route exact path='/about' element={<About/>}>About</Route>
       <Route exact path='/contacts' element={<Contacts/>}>Contacts</Route>
       <Route exact path ='/products/add' element={<AddProduct/>}>AddProduct</Route>
       <Route exact path='/products/edit/:id' element={<EditProduct/>}>Editproduct</Route> 
       <Route exact path ='/products/:id' element={<Product/>}>Product</Route>
       </Routes>
     </BrowserRouter>
     </div>
  );
  }
export default App;

