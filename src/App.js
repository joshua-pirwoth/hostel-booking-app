
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/navbar';
// import loginPage from './components/loginpage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<loginPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;


