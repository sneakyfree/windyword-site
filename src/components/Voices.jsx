import { motion } from 'framer-motion';

const normieImages = [
  { src: '/images/normies/normie-v2-1.jpg', alt: 'Creative professional using voice-to-text' },
  { src: '/images/normies/normie-v2-2.jpg', alt: 'Student using voice-to-text for notes' },
  { src: '/images/normies/normie-v3-1.jpg', alt: 'Entrepreneur dictating business ideas' },
  { src: '/images/normies/normie-v2-3.jpg', alt: 'Developer using voice-to-text for coding' },
  { src: '/images/normies/normie-v3-2.jpg', alt: 'Writer using voice-to-text for their novel' },
  { src: '/images/normies/normie-v2-4.jpg', alt: 'Professional using voice-to-text at work' },
  { src: '/images/normies/normie-v3-3.jpg', alt: 'Content creator dictating scripts' },
  { src: '/images/normies/normie-v2-5.jpg', alt: 'Researcher using voice-to-text for notes' },
  { src: '/images/normies/normie-v3-4.jpg', alt: 'Doctor using voice-to-text for medical notes' },
  { src: '/images/normies/normie-v3-5.jpg', alt: 'Journalist dictating in the field' },
  { src: '/images/normies/normie-v3-6.jpg', alt: 'Teacher using voice-to-text for lesson plans' },
  { src: '/images/normies/normie-1.jpg', alt: 'Mom using voice-to-text for grocery lists' },
];

const testimonials = [
  {
    quote: "I replaced a $200/month medical transcription service with WindyWord. The EN↔ES Medical model catches terminology that Google just butchers. My clinic saved $2,400 in the first year.",
    name: "Dr. Maria Santos",
    role: "Family Medicine, Miami",
    image: normieImages[0].src
  },
  {
    quote: "As a foreign correspondent, I need offline translation in places with no internet. WindyWord runs entirely on my laptop. I've filed stories from conflict zones where my phone had zero signal.",
    name: "Ahmed Hassan",
    role: "Journalist, Reuters",
    image: normieImages[9].src
  },
  {
    quote: "I fed 200 hours of podcast audio into WindyWord, then sent the transcriptions to WindyClone. Now my AI twin does Spanish-language intros in MY voice. My listeners thought I learned Spanish overnight.",
    name: "Sofia Rodriguez",
    role: "Podcast Creator, 500K subscribers",
    image: normieImages[6].src
  },
  {
    quote: "The legal German model understood terminology that made our previous vendor look like it was guessing. Contract review went from 3 hours to 45 minutes. We're never going back.",
    name: "Klaus Weber",
    role: "Partner, Weber & Stein Legal",
    image: normieImages[3].src
  }
];

const Voices = () => {
  return (
    <section id="voices" className="py-24 px-6 bg-windy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Voices of the <span className="text-gradient">Converted</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            People who stopped typing and started creating.
          </p>
        </motion.div>

        {/* Normie showcase strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-6 font-semibold">Everyone speaks. Now everyone creates.</p>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {normieImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative group rounded-xl overflow-hidden border border-gray-800/40 hover:border-windy-amber/40 transition-all"
              >
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-windy-gray/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800/60 hover:border-windy-amber/30 transition-all"
            >
              <div className="text-4xl text-windy-amber/30 mb-3 font-serif">"</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800/40">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-windy-amber/30 flex-shrink-0">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-sm mb-5">Join the Movement — Speak Your First Word</p>
          <button className="px-10 py-4 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold text-lg rounded-xl hover:scale-105 transition-transform border-glow">
            Claim Your Voice
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Voices;
