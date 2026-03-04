import { motion } from 'motion/react';
import { CheckCircle, Star, Smile, Activity } from 'lucide-react';

export default function Essence() {
  return (
    <section className="relative py-16 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden text-opalya-brown" style={{
      background: 'radial-gradient(circle at 20% 50%, #DBEDF5 0%, #879DB8 50%, #5C799A 100%)'
    }}>
      {/* Subtle grid/mesh overlay could go here */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{
        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiTAiZSrJroeQuJMErO1ksP_Pl82KBeV-aC3nlohjJqhZDrTrA8yREZlJ3wqkGAEMn_0LSH7voYqe3BN-0kkwImR_Qb1ScQiK3UIQQScJgTVJg1STo8ulAxYsRCsp_huPHqTaC3xXeJlTZfTg5eMhvHBwE5c4jjmGFg1d-wDjRzoc_NIBMYw2Y5K5B_lESaXDDdbSS-xtw7ijKFh9MRJSM0A7ZD0QkzWDeVU-v8oCxuj-RHCQv9KRjfcxnJnFwWmJ0r9Nu198Tx7B6")',
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 pt-12"
        >
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">Our Essence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1]">
            Our Story <br />
            <span className="italic font-normal">In Durban</span>
          </h2>
          <p className="max-w-md text-lg leading-relaxed opacity-80">
            Virginia Beauty Parlour is your sanctuary in the heart of Durban. We provide quality services in a welcoming and comfortable environment, perfect for everyday beauty or special occasions.
          </p>
          <button className="flex items-center space-x-3 bg-white/40 backdrop-blur-sm border border-opalya-brown/10 px-8 py-4 rounded-full hover:bg-white/60 transition-colors group">
            <span className="text-sm font-bold tracking-widest uppercase">About Virginia</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-96 h-96 border border-opalya-brown/15 rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] border border-opalya-brown/15 rounded-full pointer-events-none"></div>
          <div className="absolute top-10 left-0 text-opalya-brown/20 pointer-events-none">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
              <path d="M30 0L33.7 26.3L60 30L33.7 33.7L30 60L26.3 33.7L0 30L26.3 26.3L30 0Z" />
            </svg>
          </div>

          {/* The Oval Image / Shape */}
          <div className="relative w-[320px] h-[480px] rounded-[120px] shadow-2xl z-10 overflow-hidden bg-opalya-green">
            <img
              src="/images/Hair Installation 3.jpg"
              alt="Professional Salon Service"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {[
          { icon: Smile, val: "12K+", label: "Satisfied Clients", class: "" },
          { icon: CheckCircle, val: "10+", label: "Years of Service", class: "lg:translate-y-8" },
          { icon: Star, val: "4.97", label: "Average Rating", class: "lg:translate-y-16" },
          { icon: Activity, val: "15", label: "Beauty Services", class: "lg:translate-y-24" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className={`bg-white/30 backdrop-blur-sm border border-white/20 rounded-2xl p-10 flex flex-col items-center justify-center text-center space-y-4 shadow-sm hover:shadow-md transition-shadow ${stat.class}`}
          >
            <stat.icon className="w-6 h-6 opacity-40" strokeWidth={1.5} />
            <div className="text-4xl font-serif italic">{stat.val}</div>
            <div className="text-[11px] font-bold uppercase tracking-widest opacity-60">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
