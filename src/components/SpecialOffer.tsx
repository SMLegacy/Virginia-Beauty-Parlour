import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function SpecialOffer() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-cover bg-center overflow-hidden" style={{
      backgroundImage: 'url("/images/hairstyles group 2.png")'
    }}>
      {/* Deep blue overlay for the blue palette to show through */}
      <div className="absolute inset-0 bg-[#113E75]/30"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center p-8 md:p-12 mx-4 border border-[#5C799A]/40"
        style={{
          background: 'linear-gradient(135deg, #113E75/95 0%, #5C799A/90 100%)',
          backgroundColor: '#113E75',
          borderRadius: '50% / 50%',
          aspectRatio: '1.6 / 1',
          width: '100%',
          maxWidth: '650px'
        }}
      >
        <span className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-[#879DB8] mb-4">
          Special Offer
        </span>
        <h2 className="font-serif text-[#DBEDF5] text-4xl md:text-5xl lg:text-6xl mb-4 leading-[1.1]">
          The Beauty <br />
          <span className="italic font-medium text-white">You Deserve</span>
        </h2>
        <p className="text-[#879DB8] text-base md:text-lg mb-8 font-medium">
          Enjoy 20% off all braiding and nail services.
        </p>
        <Link
          to="/contact"
          className="bg-[#5C799A] hover:bg-[#DBEDF5] text-white hover:text-[#113E75] font-semibold py-3 px-8 rounded-full flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#113E75]/40 border border-[#879DB8]/40"
        >
          <span>BOOK NOW</span>
          <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
