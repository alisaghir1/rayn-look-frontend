import './App.css'
import { BrowserRouter, Routes, Route, navigate } from 'react-router-dom'


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
      <Route path='/' element={Layout}>
        <Route />
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
