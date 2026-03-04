import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    name: "Nomusa.M",
    service: "PROFESSIONAL BRAIDING",
    text: "Long-lasting and neat styles. My go-to place for braiding in Durban!"
  },
  {
    name: "Zinhle.T",
    service: "NAIL ART",
    text: "Beautiful nail care. My hands look polished and elegant."
  },
  {
    name: "Thandeka.N",
    service: "WEAVE INSTALLATION",
    text: "Expert installation services. I love my new natural look!"
  },
  {
    name: "Ayanda.D",
    service: "GLAM MAKEUP",
    text: "Flawless makeup application for my special occasion. Felt so confident!"
  },
  {
    name: "Nokuthula.J",
    service: "BOX BRAIDS",
    text: "Neat and stylish braids that lasted for weeks. Highly recommend!"
  },
  {
    name: "Lerato.N",
    service: "GENTLEMAN'S CUT",
    text: "Top-notch service and a great atmosphere. Virginia is the best."
  },
  {
    name: "Buhle.V",
    service: "GEL MANICURE",
    text: "My nails have never looked better. The attention to detail is amazing."
  },
  {
    name: "Lindiwe.S",
    service: "BRIDAL MAKEUP",
    text: "They made me feel like a queen on my wedding day. Thank you, Virginia!"
  }
];

export default function Testimonials() {
  return (
    <section className="relative min-h-screen w-full px-6 py-20 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start justify-between gap-12 bg-opalya-cream text-opalya-brown overflow-visible">
      {/* Decorative Star Line Art */}
      <svg className="absolute bottom-[-10%] left-[-5%] w-[40%] opacity-10 pointer-events-none" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path d="M250 0 L280 220 L500 250 L280 280 L250 500 L220 280 L0 250 L220 220 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Left Content Block - Pinned */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8 lg:sticky lg:top-32 z-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase opacity-70">TESTIMONIALS</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic leading-[1.1]">
            Your Stories <br />
            of Well-being
          </h2>
        </motion.div>

        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center justify-between gap-4 bg-opalya-gold/50 border border-opalya-brown/20 rounded-full px-8 py-4 w-fit hover:bg-opalya-gold transition-colors duration-300 group"
        >
          <span className="text-sm font-bold tracking-wider uppercase">VIEW ALL</span>
          <div className="flex items-center justify-center">
            <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 5.106a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.591a.75.75 0 010-1.06zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 010 1.06l-1.591 1.591a.75.75 0 11-1.06-1.06l1.591-1.591a.75.75 0 011.06 0zM12 18.75a.75.75 0 01.75.75V21.75a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM5.106 18.894a.75.75 0 011.06 0l1.591 1.591a.75.75 0 01-1.06 1.06l-1.591-1.591a.75.75 0 010-1.06zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM5.106 5.106a.75.75 0 010 1.06L3.515 7.757a.75.75 0 01-1.06-1.06l1.591-1.591a.75.75 0 011.06 0z" />
            </svg>
          </div>
        </motion.a>
      </div>

      {/* Testimonial Cards Grid - single column on mobile, 2 col on md+ */}
      <div className="w-full lg:w-3/5 flex flex-col md:grid md:grid-cols-2 gap-6 z-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {testimonials.filter((_, i) => i % 2 === 0).map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="border border-opalya-brown/30 rounded-3xl p-8 flex flex-col gap-4 hover:border-opalya-brown/60 transition-colors cursor-default"
              style={{ backgroundColor: 'rgba(74, 61, 33, 0.03)' }}
            >
              <div>
                <h3 className="text-xl font-medium">{t.name}</h3>
                <span className="text-[10px] tracking-[0.2em] uppercase opacity-60">{t.service}</span>
              </div>
              <p className="text-lg font-light leading-relaxed">{t.text}</p>
              <div className="flex text-opalya-brown text-sm">★★★★★</div>
            </motion.article>
          ))}
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-6 md:mt-24">
          {testimonials.filter((_, i) => i % 2 !== 0).map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 + 0.1 }}
              className="border border-opalya-brown/30 rounded-3xl p-8 flex flex-col gap-4 hover:border-opalya-brown/60 transition-colors cursor-default"
              style={{ backgroundColor: 'rgba(74, 61, 33, 0.03)' }}
            >
              <div>
                <h3 className="text-xl font-medium">{t.name}</h3>
                <span className="text-[10px] tracking-[0.2em] uppercase opacity-60">{t.service}</span>
              </div>
              <p className="text-lg font-light leading-relaxed">{t.text}</p>
              <div className="flex text-opalya-brown text-sm">★★★★★</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
