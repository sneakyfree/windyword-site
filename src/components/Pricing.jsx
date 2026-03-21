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
      'Unlimited local transcriptions',
      'Download any model — all 2,000+',
      '5-minute recordings',
      'Offline-capable — local by default, you choose if data ever leaves your device',
      'Open source models you OWN',
      'Commercial use allowed',
      'Community support'
    ],
    cta: 'Download Free',
    highlight: false,
    note: 'No sign-up. No credit card. No catch.',
    comparison: null,
  },
  {
    name: 'Windy Pro',
    price: { monthly: '$4.99', annual: '$49', lifetime: '$99' },
    period: { monthly: '/mo', annual: '/yr', lifetime: 'one-time' },
    tagline: 'Cloud superpowers. 30-minute recordings. Everything synced.',
    features: [
      'Everything in Free, plus:',
      '30-minute recordings',
      'All 15 engines + 99 languages',
      { text: 'Cloud STT via WindyCloud (blazing fast)', subscriptionOnly: true },
      'Sync transcriptions across all devices',
      'Batch mode — drop 50 files, walk away',
      'LLM polish — AI cleans up your transcript',
      'Speaker identification (who said what)',
      'Feed your voice data to WindyClone',
      'Priority support + early access'
    ],
    cta: 'Start Pro — 14 Days Free',
    highlight: true,
    badge: 'RECOMMENDED',
    note: 'Cancel anytime. Free tier keeps working forever.',
    comparison: null,
  }
];

function CompetitorComparison() {
  const competitors = [
    { name: 'Wispr Flow', free: '5 min', paid: '$8.99/mo', paidFeatures: '5-min recordings, cloud-only', verdict: 'Our FREE tier = their paid tier' },
    { name: 'Otter.ai', free: '300 min/mo', paid: '$16.99/mo', paidFeatures: 'Cloud-only, no offline', verdict: 'We\'re offline-first + unlimited local' },
    { name: 'Rev.com', free: 'None', paid: '$29.99/mo', paidFeatures: 'Cloud-only, English focus', verdict: 'We have 2,000+ specialist models — free' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="mt-16 max-w-4xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-center mb-2">The Uncomfortable Truth About Our Competitors</h3>
      <p className="text-gray-500 text-center text-sm mb-8">We're not trying to be mean. These are just facts.</p>
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

const Pricing = () => {
  const [billing, setBilling] = useState('monthly');

  return (
    <section id="pricing" className="py-24 px-6 bg-windy-dark relative overflow-hidden">
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
            Free Isn't the <span className="text-gradient">Catch</span>. It's the <span className="text-gradient">Point</span>.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We believe voice AI should be accessible to everyone. The free tier isn't crippled — 
            it's the full product. Pro adds cloud convenience for power users.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                    <span className="text-xs text-green-400 font-bold">Save $10.88</span>
                  </div>
                )}
                {billing === 'lifetime' && plan.name === 'Windy Pro' && (
                  <div className="mt-2">
                    <span className="text-xs text-green-400 font-bold">Pays for itself in 20 months. Own it forever.</span>
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
                      <span className="text-gray-300 text-sm">
                        {text}
                        {dimmed && <span className="text-gray-600 text-xs ml-1">(subscription only)</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
              
              {/* Cloud STT policy callout for Pro */}
              {plan.highlight && (
                <div className={`mb-4 px-4 py-3 rounded-lg text-xs font-semibold ${
                  billing === 'lifetime' 
                    ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}>
                  {billing === 'lifetime' 
                    ? '🏠 Lifetime = Local engines only — Own Your Stack. No cloud dependency, ever.'
                    : '☁️ Cloud STT included — powered by WindyCloud. Blazing fast, always up to date.'}
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
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-500">
            Cancel Pro anytime. No questions. No guilt. Free keeps working forever.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
