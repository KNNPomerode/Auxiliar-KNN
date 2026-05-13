import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import Books from './pages/Books'
import Units from './pages/Units'
import Content from './pages/Content'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:lang" element={<Collections />} />
      <Route path="/:lang/:collection" element={<Books />} />
      <Route path="/:lang/:collection/:book" element={<Units />} />
      <Route path="/:lang/:collection/:book/:unit" element={<Content />} />
    </Routes>
  )
}
