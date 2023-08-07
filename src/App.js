import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage';
import PricingPage from './components/PricingPage/PricingPage';
import ContactsPage from './components/ContactsPage/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<AboutPage />} />  
        <Route path="/pricing" element={<PricingPage />} />  
        <Route path="/contacts" element={<ContactsPage />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
