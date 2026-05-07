import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Coverage from './components/Coverage/Coverage';
import NumbersBar from './components/Stats/NumbersBar';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyChooseUs />
        <Services />
        <Portfolio />
        <Coverage />
        <NumbersBar />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
