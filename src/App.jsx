import { Routes, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import Inicio from './pages/Inicio.jsx'
import Contacto from './pages/Contacto.jsx'
import Acerca from './pages/Acerca.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
