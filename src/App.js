import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Skills from './pages/skills';
import Contact from './pages/contact';

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route exact path="/sam-website" element={<Home />} />
                <Route path="/sam-website/about" element={<About />} />
                <Route path="/sam-website/skills" element={<Skills />} />
                <Route path="/sam-website/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
