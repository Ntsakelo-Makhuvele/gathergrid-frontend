import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home'
import ProfileDashboard from './Views/ProfileDashboard'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service/provider" element={<ProfileDashboard />} />
    </Routes>
  )
}

export default App
