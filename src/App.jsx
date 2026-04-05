import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheWord from './components/TheWord';
import Powers from './components/Powers';
import TheVault from './components/TheVault';
import TheRitual from './components/TheRitual';
import Voices from './components/Voices';
import Offering from './components/Offering';
import Kingdom from './components/Kingdom';
import Claim from './components/Claim';
import Covenant from './components/Covenant';
import Scrolls from './components/Scrolls';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-windy-dark">
      <Navbar />
      <Hero />
      <TheWord />
      <Powers />
      <TheVault />
      <TheRitual />
      <Voices />
      <Offering />
      <Kingdom />
      <Claim />
      <Covenant />
      <Scrolls />
      <Footer />
    </div>
  );
}

export default App;
