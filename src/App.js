import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Router,Routes,routes} from 'react-router-dom';
import Navbar  from './componenets/navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route></Route>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
