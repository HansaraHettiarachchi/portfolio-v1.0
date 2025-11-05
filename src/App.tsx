import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllProjects from './pages/AllProjects'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/projects' element={<AllProjects />} />
      </Routes>
    </>
  )
}

export default App
