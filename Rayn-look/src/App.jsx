import './App.css'
import AdminDashboard from './Admin/AdminDashboard'

import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AdminLogin from './Admin/Adminlogin'
import autheslice from './Admin/adminauthentication/autheslice'
import { useSelector } from 'react-redux'
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
// const token = localStorage.getItem('token')
const token  = useSelector((state) => state.auth)
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

          <Route path='adminlogin' element={<AdminLogin />} />
          <Route path='admin' element={token ? <AdminDashboard /> : <Navigate to={'/adminlogin'} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
