import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Treatments() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden bg-opalya-cream text-opalya-brown">
      {/* Grainy Background Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5CCIg0hu0VYoGGT1SwSV4v--Lf20mgyB822jI6VT54wDO8B9yVgSzlVwhiCRkpVoTdPRCVw8G5MxHAz0ZNdJwQ8XqSih5Fqulb3Qaf7fweWkSgcsLsg2WbaYiSRcjnxqmQSHDglNHjjnqS3oAlfFF7sS5X_82WztZ-f_Sffx01auW6m5H7QcOZ8k4hZbSQrfOLTwf7jF9sbknL7NukNOHBpC2K5bIDUtb-bRnMOYpIOCk8SRiR_g-T3j3fneSGtnvUQ7zrpl_oYot")',
        backgroundRepeat: 'repeat'
      }}></div>



      {/* Floating Images */}
      {/* Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-24 left-[10%] lg:left-[15%] w-48 h-64 md:w-64 md:h-80 z-10 hidden sm:block"
      >
        <img
          src="/images/Hair Installation 3.jpg"
          alt="Hair Installation"
          className="w-full h-full object-cover rounded-[120px] shadow-sm"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-12 right-[5%] lg:right-[18%] w-56 h-80 md:w-72 md:h-[450px] z-10 hidden sm:block"
      >
        <img
          src="/images/Hair Syle 3.png"
          alt="Hair Styling"
          className="w-full h-full object-cover rounded-[120px] shadow-sm"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 left-[5%] lg:left-[10%] w-64 h-80 md:w-80 md:h-[480px] z-10 hidden sm:block"
      >
        <img
          src="/images/Nails 3.png"
          alt="Nail Care"
          className="w-full h-full object-cover rounded-[120px] shadow-sm"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-20 right-[10%] lg:right-[12%] w-48 h-56 md:w-60 md:h-72 z-10 hidden sm:block"
      >
        <img
          src="/images/Hair Installation 4.jpg"
          alt="Hair Treatment"
          className="w-full h-full object-cover rounded-[120px] shadow-sm"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Bottom Center Shape */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -bottom-24 right-[25%] w-80 h-64 z-0 hidden lg:block"
      >
        <div className="w-full h-full bg-[#a3c2a4] rounded-[120px] shadow-sm opacity-90"></div>
      </motion.div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-20 text-center max-w-2xl px-4 flex flex-col items-center"
      >
        <div className="mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L13.8 8.2L22 10L13.8 11.8L12 20L10.2 11.8L2 10L10.2 8.2L12 0Z" />
            <path d="M12 4L13 10L19 11L13 12L12 18L11 12L5 11L11 10L12 4Z" opacity="0.3" />
          </svg>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-4">
          Services For<br />
          <span className="italic font-light">Every Style</span>
        </h1>
        <p className="text-sm tracking-wide opacity-80 mb-10">
          Explore services designed to keep you looking polished and elegant.
        </p>
        <Link to="/services" className="bg-[#5C799A] text-white px-8 py-3 rounded-full flex items-center gap-3 text-[10px] tracking-widest font-bold hover:bg-[#113E75] transition-colors uppercase">
          All Services
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
