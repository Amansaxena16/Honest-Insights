import HomePage from "./components/home/Home"
import Login from "./components/login/Login"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/login" element={< Login/>} />
        </Routes>
    </Router>
  )
}

export default App
