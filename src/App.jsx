import { useState } from 'react';
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

// ── Change this to update the gate password ──
const GATE_PASSWORD = '#1Connie';

function Gate({ onUnlock }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === GATE_PASSWORD) {
      sessionStorage.setItem('ww_unlocked', '1');
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-windy-dark flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        {/* Logo / Title */}
        <h1 className="text-5xl sm:text-6xl font-black text-gradient mb-3 tracking-tight">
          WindyWord
        </h1>
        <p className="text-white/60 text-lg mb-2">Speak It Into Existence</p>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-windy-gold to-transparent mx-auto my-8" />

        {/* Coming Soon */}
        <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-10">
          Coming Soon
        </p>

        {/* Password form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={shake ? 'animate-[shake_0.4s_ease-in-out]' : ''}>
            <input
              type="password"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false); }}
              placeholder="Enter password"
              className={`w-full px-5 py-3 rounded-lg bg-white/5 border text-white placeholder-white/30 text-center focus:outline-none focus:border-windy-gold/60 focus:ring-1 focus:ring-windy-gold/30 transition-colors ${
                error ? 'border-red-500/60' : 'border-white/10'
              }`}
            />
          </div>
          {error && (
            <p className="text-red-400/80 text-sm">Incorrect password</p>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold tracking-wide hover:shadow-lg hover:shadow-windy-gold/25 transition-all"
          >
            Enter
          </button>
        </form>

        <p className="text-white/20 text-xs mt-12">
          &copy; {new Date().getFullYear()} WindyWord
        </p>
      </div>
    </div>
  );
}

function App() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem('ww_unlocked') === '1'
  );

  if (!unlocked) {
    return <Gate onUnlock={() => setUnlocked(true)} />;
  }

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
