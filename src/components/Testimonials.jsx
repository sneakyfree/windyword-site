import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "I replaced a $200/month medical transcription service with WindyWord. The EN↔ES Medical model catches terminology that Google just butchers. My clinic saved $2,400 in the first year.",
    name: "Dr. Maria Santos",
    role: "Family Medicine, Miami",
    avatar: "👩‍⚕️"
  },
  {
    quote: "As a foreign correspondent, I need offline translation in places with no internet. WindyWord runs entirely on my laptop. I've filed stories from conflict zones where my phone had zero signal.",
    name: "Ahmed Hassan",
    role: "Journalist, Reuters",
    avatar: "📰"
  },
  {
    quote: "I fed 200 hours of podcast audio into WindyWord, then sent the transcriptions to WindyClone. Now my AI twin does Spanish-language intros in MY voice. My listeners thought I learned Spanish overnight.",
    name: "Sofia Rodriguez",
    role: "Podcast Creator, 500K subscribers",
    avatar: "🎙️"
  },
  {
    quote: "The legal German model understood terminology that made our previous vendor look like it was guessing. Contract review went from 3 hours to 45 minutes. We're never going back.",
    name: "Klaus Weber",
    role: "Partner, Weber & Stein Legal",
    avatar: "⚖️"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-windy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Don't Take Our Word. <span className="text-gradient">Take Theirs.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From doctors to journalists to podcasters — people who need accuracy, not approximation.
          </p>
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
                <div className="text-3xl">{testimonial.avatar}</div>
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
          <p className="text-gray-500 text-sm mb-5">Join 50,000+ professionals who switched to specialist AI</p>
          <button className="px-10 py-4 bg-gradient-to-r from-windy-gold to-windy-amber text-windy-dark font-bold text-lg rounded-xl hover:scale-105 transition-transform border-glow">
            Download Free — Own Your Voice AI
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
