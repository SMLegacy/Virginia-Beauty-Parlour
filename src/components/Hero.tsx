import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  "/images/Hair Installation 1.jpg",
  "/images/Nails 2.jpg",
  "/images/Makeup 1.jpg",
  "/images/Hair Syle 1.png",
  "/images/Hair Installation 2.jpeg",
  "/images/nails 1.png",
  "/images/Hair Syle 2.png"
];

const transforms = [
  "translate-y-8",
  "-translate-y-4",
  "translate-y-2",
  "-translate-y-6",
  "translate-y-10",
  "-translate-y-2",
  "translate-y-6"
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-opalya-bg text-opalya-brown flex flex-col overflow-hidden">
      {/* Hero Content */}

      <main className="flex flex-col items-center pt-12 md:flex-1 md:pt-24 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 max-w-4xl"
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-4 md:mb-6 leading-[0.9] tracking-tight text-opalya-brown overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              Virginia Beauty
            </motion.span> <br />
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="italic inline-block"
            >
              Parlour
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-base md:text-xl mb-8 md:mb-10 tracking-wide font-light text-opalya-brown/80 px-4"
          >
            Professional, stylish, and affordable beauty services in Durban.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-opalya-brown text-white px-8 py-4 rounded-full font-sans text-xs font-bold tracking-widest hover:bg-opacity-90 transition-all group shadow-xl shadow-opalya-brown/10"
            >
              BOOK NOW
              <svg className="w-4 h-4 ml-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Gallery */}
        <div className="w-full mt-2 md:mt-20 md:flex-1 relative overflow-hidden flex items-end">
          <div className="flex animate-[hero-scroll_30s_linear_infinite] px-2 min-w-max">
            {/* Double the images for seamless loop */}
            {[...images, ...images].map((src, idx) => (
              <div key={idx} className={`w-36 h-56 sm:w-48 sm:h-72 md:w-64 md:h-96 rounded-t-full rounded-b-none overflow-hidden border-4 border-opalya-bg shadow-lg mx-3 md:mx-4 transform ${transforms[idx % images.length]}`}>
                <img src={src} alt={`Spa scene ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes hero-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </main>

      {/* Marquee */}
      <footer className="w-full bg-[#e6d6ab] py-4 border-t border-opalya-brown/10 overflow-hidden z-20 mt-auto">
        <div className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite]">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center mx-8 text-sm font-serif italic tracking-widest uppercase text-opalya-brown">
              Shop No 4, 407 Anton Lembede St, Durban <span className="mx-6 text-xl not-italic">✨</span> 📞 (+27) 64 554 7559
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </footer>
    </section>
  );
}
