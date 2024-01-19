import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminDashboard from './assets/Admin/AdminDashboard'


const Layout = () => {
  return(
    <>
    </>
  )
}

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route />
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
