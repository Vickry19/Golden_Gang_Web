import AOS from 'aos';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Check from './components/Check';

function App() {
  AOS.init({
    offset: '100'
  });

  axios.defaults.baseURL = 'http://localhost:8000';

  return (
    <>
    <Navbar />

    <Hero />

    <Check />
    </>
  );
}

export default App;
