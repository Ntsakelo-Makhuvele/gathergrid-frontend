import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home'
import ProfileDashboard from './Views/ProfileDashboard'
import Profile from './Layout/Components/Profile'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service/provider" element={<ProfileDashboard />}>
       <Route path="/service/provider/profile" element={<Profile />} /> 
      </Route>
    </Routes>
  )
}

export default App
