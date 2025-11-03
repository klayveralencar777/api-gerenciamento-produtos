import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>

        </Routes>
    </BrowserRouter>



  )
}

export default App
