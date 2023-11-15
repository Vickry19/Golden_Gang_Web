import AOS from 'aos';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Check from './components/Check';
import Contact from './components/Contact';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    
  });

  axios.defaults.baseURL = 'http://localhost:8000';

  return (
    <>
    <Navbar />

    <Hero />

    <Check />

    <Contact />
    </>
  );
}

export default App;
