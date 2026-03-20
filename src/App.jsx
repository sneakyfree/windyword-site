import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ModelCatalog from './components/ModelCatalog';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Ecosystem from './components/Ecosystem';
import Download from './components/Download';
import OpenSource from './components/OpenSource';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-windy-dark">
      <Navbar />
      <Hero />
      <Features />
      <ModelCatalog />
      <HowItWorks />
      <Pricing />
      <Ecosystem />
      <Download />
      <OpenSource />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
