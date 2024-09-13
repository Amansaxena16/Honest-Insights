import Dashboard from "./components/dashboard/Dashboard"
import HomePage from "./components/home/Home"
import Login from "./components/login/Login"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import CreateSpace from "./components/space/CreateSpace"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/login" element={< Login/>} />
          <Route path="/dashboard" element={< Dashboard/>} />
          <Route path="/create" element={< CreateSpace/>} />
        </Routes>
    </Router>
  )
}

export default App
