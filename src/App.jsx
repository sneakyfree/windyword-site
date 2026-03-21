import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveDemo from './components/LiveDemo';
import Features from './components/Features';
import ModelCatalog from './components/ModelCatalog';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Ecosystem from './components/Ecosystem';
import Download from './components/Download';
import OpenSource from './components/OpenSource';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-windy-dark">
      <Navbar />
      <Hero />
      <LiveDemo />
      <Features />
      <ModelCatalog />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Ecosystem />
      <Download />
      <OpenSource />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
