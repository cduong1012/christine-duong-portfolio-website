import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';

function App() {
  

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
