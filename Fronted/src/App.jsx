import Dashboard from "./components/dashboard/Dashboard"
import HomePage from "./components/home/Home"
import Login from "./components/login/Login"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreateSpace from "./components/space/CreateSpace"
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>}/>
          <Route path="/create" element={<ProtectedRoute> <CreateSpace /></ProtectedRoute>}/>
        </Routes>
    </Router>
  )
}

export default App
