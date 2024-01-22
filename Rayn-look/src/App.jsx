import './App.css'
import AdminDashboard from './Admin/AdminDashboard'
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
        <Route />
        <Route path='/' element={<Home />}/>
        <Route />
        <Route />
        <Route />
        <Route />
      </Route>
      <Route path='/Admin' element={< AdminDashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
