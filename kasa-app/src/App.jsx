// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import FicheLogement from './pages/FicheLogement'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout principal qui englobe les pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          {/* Catch-all pour la 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App