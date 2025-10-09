import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About'
import Bracket from './components/Bracket';
import Oauth from './components/Oauth';
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/bracket" element={<Bracket />} />
          <Route path="/oauth" element={<Oauth />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
