import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "As a translator working with 5 languages daily, WindyWord's specialized models are a game-changer. The accuracy is unmatched.",
    name: "Maria Santos",
    role: "Professional Translator",
    avatar: "👩‍💼"
  },
  {
    quote: "I'm a student studying abroad. WindyWord helps me transcribe lectures in English and review them in my native language. Life-saver!",
    name: "Kenji Tanaka",
    role: "International Student",
    avatar: "👨‍🎓"
  },
  {
    quote: "For journalism in conflict zones, local processing is essential. No internet? No problem. WindyWord works offline flawlessly.",
    name: "Ahmed Hassan",
    role: "Journalist",
    avatar: "📰"
  },
  {
    quote: "I run a podcast in Spanish and English. WindyWord transcribes both languages perfectly, and I can clone my voice for intros. Incredible.",
    name: "Sofia Rodriguez",
    role: "Podcast Creator",
    avatar: "🎙️"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-windy-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">What People Are Saying</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From translators to students to journalists—everyone's finding value in WindyWord.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-windy-gray p-8 rounded-lg border border-gray-800 hover:border-windy-amber/50 transition-all"
            >
              {/* Quote */}
              <div className="text-5xl text-windy-amber mb-4">"</div>
              <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">
                {testimonial.quote}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Join thousands of users worldwide</p>
          <button className="px-8 py-4 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold text-lg rounded-lg hover:scale-105 transition-transform">
            Start Free Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
