import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/FunctionalComponent/Navbar.jsx';
import Home from './components/FunctionalComponent/Home.jsx';
import HomePage from './components/FunctionalComponent/HomePage.jsx';
import About from './components/FunctionalComponent/About.jsx';
import Contact from './components/FunctionalComponent/Contact.jsx';
import LearningReact from './components/FunctionalComponent/LearningReact.jsx';
import LearningHooks from './components/FunctionalComponent/LearningHooks.jsx';
import Login from './components/FunctionalComponent/Login.jsx';
import Signup from './components/FunctionalComponent/SignUp.jsx';
import UseState from './components/FunctionalComponent/Hooks/UseState.jsx';
import UseEffect from './components/FunctionalComponent/Hooks/UseEffect.jsx';
import UseRef from './components/FunctionalComponent/Hooks/UseRef.jsx';
import UseCallback from './components/FunctionalComponent/Hooks/UseCallback.jsx';
import UseMemo from './components/FunctionalComponent/Hooks/UseMemo.jsx';
import TestConnection from './components/FunctionalComponent/TestConnection.jsx';
import './css/App.css';

function App() { 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learning-react" element={<LearningReact />} />
        <Route path="/learning-hooks" element={<LearningHooks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hooks/usestate" element={<UseState />} />
        <Route path="/hooks/useeffect" element={<UseEffect />} />
        <Route path="/hooks/useref" element={<UseRef />} />
        <Route path="/hooks/usecallback" element={<UseCallback />} />
        <Route path="/hooks/usememo" element={<UseMemo />} />
        <Route path="/test-connection" element={<TestConnection />} />
      </Routes>
    </Router>
  );
}

export default App;