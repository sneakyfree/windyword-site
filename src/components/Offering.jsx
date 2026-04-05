import { motion } from 'framer-motion';
import { useState } from 'react';

const billingOptions = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'annual', label: 'Annual', badge: 'Save 17%' },
  { key: 'lifetime', label: 'Lifetime', badge: 'Own Forever' },
];

const plans = [
  {
    name: 'Free',
    price: { monthly: '$0', annual: '$0', lifetime: '$0' },
    period: { monthly: 'forever', annual: 'forever', lifetime: 'forever' },
    tagline: 'Not a trial. Not a teaser. The real thing.',
    features: [
      '2 voice engines',
      'Auto-detects any of 99 languages',
      '5-minute voice-to-text sessions (local)',
      '1 device',
      'Offline-capable — local by default, you choose if data ever leaves your device',
      'Open source models you OWN',
      'Commercial use allowed',
      '500 MB WindyCloud storage',
      'Community support'
    ],
    cta: 'Download Free',
    highlight: false,
    note: 'No sign-up. No credit card. No catch.',
  },
  {
    name: 'Windy Pro',
    price: { monthly: '$4.99', annual: '$49', lifetime: '$99' },
    period: { monthly: '/mo', annual: '/yr', lifetime: 'one-time' },
    tagline: 'All 15 voice engines. Unlimited local. Cloud sync.',
    features: [
      'Everything in Free, plus:',
      'All 15 voice engines + 99 languages',
      'Unlimited local voice-to-text — speak all day, no internet needed',
      { text: '15-minute cloud voice-to-text sessions', subscriptionOnly: true },
      '3 devices',
      'Ad-free',
      { text: 'Cloud processing via WindyCloud (blazing fast)', subscriptionOnly: true },
      'Sync transcriptions across all devices',
      'Batch mode — drop 50 files, walk away',
      'LLM polish — AI cleans up your transcript',
      'Speaker identification (who said what)',
      'Feed your voice data to WindyClone',
      '5 GB WindyCloud storage',
      'Priority support + early access'
    ],
    cta: 'Start Pro — 14 Days Free',
    highlight: true,
    badge: 'RECOMMENDED',
    note: 'Cancel anytime. Free tier keeps working forever.',
  },
  {
    name: 'Windy Ultra',
    price: { monthly: '$8.99', annual: '$79', lifetime: '$199' },
    period: { monthly: '/mo', annual: '/yr', lifetime: 'one-time' },
    tagline: 'Live translation. Conversation mode. The global communicator.',
    features: [
      'Everything in Pro, plus:',
      'Live translation — 5 language pairs',
      'Conversation mode — two people, two languages, one device',
      { text: '30-minute cloud voice-to-text sessions', subscriptionOnly: true },
      '5 devices',
      { text: 'Cloud translation API + Cloud processing', subscriptionOnly: true },
      '25 offline translation engines',
      '10 GB WindyCloud storage'
    ],
    cta: 'Start Ultra — 14 Days Free',
    highlight: false,
    badge: 'NEW',
    note: 'Cancel anytime. Downgrades to Pro features.',
  },
  {
    name: 'Windy Max',
    price: { monthly: '$14.99', annual: '$149', lifetime: '$299' },
    period: { monthly: '/mo', annual: '/yr', lifetime: 'one-time' },
    tagline: 'The ultimate. 99 languages. Medical & legal grade.',
    features: [
      'Everything in Ultra, plus:',
      '99 translation language pairs',
      'Text-to-speech output',
      'Medical & legal glossaries',
      { text: '60-minute cloud voice-to-text sessions', subscriptionOnly: true },
      '10 devices',
      { text: 'Priority cloud processing — fastest queue', subscriptionOnly: true },
      '100 offline translation engines',
      'Offline translation — no internet needed',
      '25 GB WindyCloud storage'
    ],
    cta: 'Start Max — 14 Days Free',
    highlight: false,
    badge: 'ULTIMATE',
    note: 'Cancel anytime. The full Windy experience.',
  }
];

function CompetitorComparison() {
  const competitors = [
    { name: 'Popular Dictation Apps', free: '5 min limit', paid: '$8–10/mo', paidFeatures: 'Short recordings, cloud-only', verdict: 'Our FREE tier = their paid tier' },
    { name: 'Meeting Transcription Tools', free: '300 min/mo cap', paid: '$15–20/mo', paidFeatures: 'Cloud-only, no offline mode', verdict: 'We\'re offline-first + unlimited local' },
    { name: 'Premium Transcription Services', free: 'None', paid: '$25–30/mo', paidFeatures: 'Cloud-only, limited languages', verdict: 'We have 3,500+ specialist models — free' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="mt-16 max-w-4xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-center mb-2">How We Compare</h3>
      <p className="text-gray-500 text-center text-sm mb-8">Most voice-to-text tools charge for what we give away free.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {competitors.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-windy-gray/40 border border-gray-800/50 rounded-xl p-5"
          >
            <div className="text-sm font-bold text-white mb-3">{c.name}</div>
            <div className="space-y-2 text-xs mb-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Free tier:</span>
                <span className="text-gray-400">{c.free}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Paid:</span>
                <span className="text-red-400/80 line-through">{c.paid}</span>
              </div>
              <div className="text-gray-500">{c.paidFeatures}</div>
            </div>
            <div className="text-xs text-windy-amber font-semibold border-t border-gray-800/40 pt-3">
              ✦ {c.verdict}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">WindyWord: <span className="text-windy-amber font-bold">$0 forever</span> with more features than their paid tiers.</p>
        <p className="text-xs text-gray-600 mt-1">We make money when you love us enough to go Pro. That's how it should work.</p>
      </div>
    </motion.div>
  );
}

const Offering = () => {
  const [billing, setBilling] = useState('lifetime');

  return (
    <section id="offering" className="py-24 px-6 bg-windy-dark relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-windy-amber/3 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            The <span className="text-gradient">Offering</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Free isn't the catch. It's the covenant. We believe voice AI belongs to everyone.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-windy-gray/80 rounded-xl p-1 border border-gray-800/60">
            {billingOptions.map(t => (
              <button key={t.key} onClick={() => setBilling(t.key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all relative ${
                  billing === t.key ? 'bg-windy-amber text-windy-dark' : 'text-gray-400 hover:text-white'
                }`}
              >
                {t.label}
                {t.badge && billing === t.key && (
                  <span className="ml-2 text-[10px] font-bold">{t.badge}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Lifetime explainer banner */}
        {billing === 'lifetime' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl border-2 border-purple-500/40 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-purple-500/10"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">🏠</span>
              <div>
                <h4 className="text-lg font-black text-purple-300 mb-1">Lifetime = Local Engines Only</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Lifetime purchases give you <strong className="text-white">permanent ownership of all local voice engines and offline translation models</strong>. 
                  Run them forever on your devices — no internet, no subscription, no expiration.
                </p>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  <strong className="text-purple-300">Cloud features</strong> (cloud sessions, cloud processing, cloud translation API) 
                  require an active subscription or the <span className="text-purple-300 font-semibold">☁️ Cloud Boost add-on ($2.99/mo)</span>. 
                  Cloud features are marked <span className="line-through text-gray-500">like this</span> below.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {billing === 'monthly' || billing === 'annual' ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto mb-10 p-4 rounded-xl border border-blue-500/30 bg-blue-500/5 text-center"
          >
            <p className="text-sm text-blue-300">
              🌪️ Subscriptions include <strong>everything</strong> — local engines + cloud sessions + cloud processing. All 3 modes: Device Only · Device + WindyCloud · Auto.
            </p>
          </motion.div>
        ) : null}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-windy-gray/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border-2 transition-all ${
                plan.highlight 
                  ? 'border-windy-amber/50 card-glow md:scale-[1.03]' 
                  : 'border-gray-800/60'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark text-sm font-black rounded-full">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-1 text-white">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{plan.tagline}</p>
              
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-black text-gradient">{plan.price[billing]}</span>
                <span className="text-gray-400 text-lg ml-2">{plan.period[billing]}</span>
                {billing === 'annual' && plan.name === 'Windy Pro' && (
                  <div className="mt-2">
                    <span className="text-xs text-gray-500 line-through mr-2">$59.88/yr at monthly</span>
                    <span className="text-xs text-green-400 font-bold">Save 17%</span>
                  </div>
                )}
                {billing === 'annual' && plan.name === 'Windy Ultra' && (
                  <div className="mt-2">
                    <span className="text-xs text-gray-500 line-through mr-2">$107.88/yr at monthly</span>
                    <span className="text-xs text-green-400 font-bold">Save 27%</span>
                  </div>
                )}
                {billing === 'annual' && plan.name === 'Windy Max' && (
                  <div className="mt-2">
                    <span className="text-xs text-gray-500 line-through mr-2">$179.88/yr at monthly</span>
                    <span className="text-xs text-green-400 font-bold">Save 17%</span>
                  </div>
                )}
                {billing === 'lifetime' && plan.name === 'Windy Pro' && (
                  <div className="mt-2">
                    <span className="text-xs text-green-400 font-bold">Own all 15 local voice engines forever. No subscription needed for offline use.</span>
                  </div>
                )}
                {billing === 'lifetime' && plan.name === 'Windy Ultra' && (
                  <div className="mt-2">
                    <span className="text-xs text-green-400 font-bold">Own all engines + 25 offline translation models forever. Cloud features optional ($2.99/mo).</span>
                  </div>
                )}
                {billing === 'lifetime' && plan.name === 'Windy Max' && (
                  <div className="mt-2">
                    <span className="text-xs text-green-400 font-bold">Own everything local — 100 offline translation engines + medical/legal glossaries. Cloud optional ($2.99/mo).</span>
                  </div>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => {
                  const isObj = typeof feature === 'object';
                  const text = isObj ? feature.text : feature;
                  const isSubscriptionOnly = isObj && feature.subscriptionOnly;
                  const dimmed = isSubscriptionOnly && billing === 'lifetime';
                  return (
                    <li key={i} className={`flex items-start gap-3 ${dimmed ? 'opacity-40' : ''}`}>
                      <svg className="w-5 h-5 text-windy-amber flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${dimmed ? 'line-through text-gray-600' : 'text-gray-300'}`}>
                        {text}
                        {dimmed && <span className="no-underline text-purple-400/70 text-xs ml-1 font-semibold" style={{textDecoration: 'none', display: 'inline'}}> ☁️ subscription</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
              
              {/* Processing mode callout for Pro */}
              {plan.highlight && (
                <div className={`mb-4 px-4 py-3 rounded-lg text-xs font-semibold ${
                  billing === 'lifetime' 
                    ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}>
                  {billing === 'lifetime' 
                    ? '🏠 Lifetime = local engines — Own Your Stack forever. Add ☁️ Cloud Boost ($2.99/mo) anytime.'
                    : '🌪️ 3 processing modes: Device Only · Device + WindyCloud · Auto. All fully private — you choose where your voice is processed.'}
                </div>
              )}
              {billing === 'lifetime' && plan.name !== 'Free' && !plan.highlight && (
                <div className="mb-4 px-4 py-3 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  🏠 Lifetime = local engines — Own Your Stack forever. Add ☁️ Cloud Boost ($2.99/mo) anytime.
                </div>
              )}
              
              <button className={`w-full px-6 py-4 font-bold rounded-xl transition-all text-lg ${
                plan.highlight
                  ? 'bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark hover:scale-[1.02]'
                  : 'bg-windy-dark border-2 border-windy-amber/60 text-windy-amber hover:bg-windy-amber/10 hover:border-windy-amber'
              }`}>
                {plan.cta}
              </button>
              
              {plan.note && (
                <p className="text-xs text-gray-600 text-center mt-3">{plan.note}</p>
              )}
            </motion.div>
          ))}
        </div>

        <CompetitorComparison />
        
        {/* Ecosystem cross-promotion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-2">Your Voice Opens Every Door</h3>
          <p className="text-gray-500 text-center text-sm mb-8">WindyWord is your entry point. The Windy ecosystem does the rest.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '☁️', name: 'WindyCloud', hook: 'Need more storage? Sync your transcriptions, models, and voice data across every device.', url: 'https://windycloud.com' },
              { icon: '✈️', name: 'WindyTraveler', hook: 'Traveling soon? Offline translation, AI tour guides, local deals — powered by 3,500+ specialist models.', url: 'https://windytraveler.com' },
              { icon: '🧬', name: 'WindyClone', hook: 'Your recordings can build your digital twin. Same voice, any language. Your AI identity.', url: 'https://windyclone.ai' },
            ].map((p, i) => (
              <motion.a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group bg-windy-dark/60 border border-gray-800/50 rounded-xl p-5 hover:border-windy-amber/40 transition-all"
              >
                <span className="text-3xl block mb-2">{p.icon}</span>
                <h4 className="text-sm font-bold text-white group-hover:text-windy-amber transition-colors mb-1">{p.name}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{p.hook}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-500">
            Cancel anytime. No questions. No guilt. Free keeps working forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Offering;
