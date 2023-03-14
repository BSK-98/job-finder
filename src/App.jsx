// components  imports
import { Topbar } from './components';
import { Routes, Route } from 'react-router-dom';

import { Services, About, Home } from './pages';

import './App.css';
import Footer from './components/global/Footer';

function App() {
  

  return (
    <div className="App">
      <Topbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
