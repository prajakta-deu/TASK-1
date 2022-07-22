import{BrowserRouter as Router,Route,Routes}from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.components';
import Navbar from './components/Navbar.components';
import Home from './home';
import About from './pages/About.pages';
import Team from './pages/Team.pages';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

      
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Team" element={<Team/>}/>
           
        </Routes>
        <Footer/>
      </Router>
     
     
    </div>
  );
}

export default App;
