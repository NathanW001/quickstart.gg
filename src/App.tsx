import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
