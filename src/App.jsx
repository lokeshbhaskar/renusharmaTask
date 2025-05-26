import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Signup from './pages/Signup';
import AuthPage from './pages/AuthPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/authpage" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
