import './App.css'
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'


const Layout = () => {
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route />
        <Route />
        <Route />
        <Route />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
