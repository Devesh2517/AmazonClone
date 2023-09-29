// import logo from './logo.svg';
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Mobile from './components/product/Mobile';
import ProductState from './context/ProductState'
import Bucket from './components/Bucket';
import  Login from './components/Login'
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import Clothes from './components/product/Clothes'
import Groceries from './components/product/Groceries'
 
function App() {
  

  return (
    <>
    <ProductState>
    <Router>
    <Navbar></Navbar>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/signup' element={<Signup/>}/>
    <Route exact path='/electronics' element={<Mobile/>}/>
    <Route exact path='/clothes' element={<Clothes/>}/>
    <Route exact path='/groceries' element={<Groceries/>}/>
    <Route exact path='/cart' element={<Bucket/>}/>
    <Route exact path='/checkout' element={<Checkout/>}/>
    </Routes>
    <Footer/>
    </Router>
    
    </ProductState>
    </>
  );
}

export default App;
