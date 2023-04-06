import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Signin';
import AppCtx from './context/AppCtx';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Details from './pages/Details';
import { useEffect } from 'react';

import {getProduct} from "./api/ecommerceApi"

function App() {

  useEffect(() => {
  const fetchProduct = async() => {
      return await getProduct();
  }
    console.log(fetchProduct().then())
  },[])
  return (

    <div className="App">
      <AppCtx>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} index/>
          <Route path="/login" element={<Login />} index/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </AppCtx>
    </div>
  )
}

export default App
