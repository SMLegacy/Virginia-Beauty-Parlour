import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#113E75] text-[#DBEDF5] py-12 md:py-16 px-6 md:px-20 lg:px-40 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Footer Content Columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20"
        >
          {/* LOGO COLUMN */}
          <div className="flex flex-col items-start">
            <Link to="/">
              <img src="/logo.png" alt="Virginia Beauty" className="h-16 w-auto object-contain mb-6" />
            </Link>
            <p className="text-[#879DB8] text-sm leading-relaxed max-w-xs">
              Your sanctuary in the heart of Durban. We provide quality services in a welcoming and comfortable environment.
            </p>
          </div>

          {/* MENU COLUMN */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold mb-6 tracking-widest uppercase">MENU</h3>
            <nav className="flex flex-col gap-0">
              <Link to="/services" className="text-[#879DB8] hover:text-[#DBEDF5] py-4 border-t border-[#879DB8]/20 transition-colors duration-200">Services</Link>
              <Link to="/" className="text-[#879DB8] hover:text-[#DBEDF5] py-4 border-t border-[#879DB8]/20 transition-colors duration-200">Pricing</Link>
              <Link to="/" className="text-[#879DB8] hover:text-[#DBEDF5] py-4 border-t border-[#879DB8]/20 transition-colors duration-200">About</Link>
              <Link to="/contact" className="text-[#879DB8] hover:text-[#DBEDF5] py-4 border-t border-[#879DB8]/20 transition-colors duration-200">Contact</Link>
            </nav>
          </div>

          {/* SERVICES COLUMN */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold mb-6 tracking-widest uppercase">SERVICES</h3>
            <nav className="flex flex-col gap-0">
              <Link to="/services" className="text-[#879DB8] hover:text-[#DBEDF5] py-4 border-t border-[#879DB8]/20 transition-colors duration-200">Braiding</Link>
              <Link to="/services" className="text-[#879DB8] hover:text-[#DBEDF5] py-4 border-t border-[#879DB8]/20 transition-colors duration-200">Nails</Link>
              <Link to="/services" className="text-[#879DB8] hover:text-[#DBEDF5] py-4 border-t border-[#879DB8]/20 transition-colors duration-200">Makeup</Link>
              <div className="py-4 border-t border-[#879DB8]/20"></div>
            </nav>
          </div>

          {/* INFORMATION COLUMN */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold mb-6 tracking-widest uppercase">INFORMATION</h3>
            <div className="flex flex-col gap-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-[#5C799A]/20 p-2 rounded-lg shrink-0">
                  <MapPin className="text-[#5C799A] w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">Address</span>
                  <span className="text-white text-sm">Shop No 4, 407 Anton Lembede St, Durban</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-[#5C799A]/20 p-2 rounded-lg shrink-0">
                  <Phone className="text-[#5C799A] w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">Phone</span>
                  <span className="text-white text-sm">(+27) 64 554 7559</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-[#5C799A]/20 p-2 rounded-lg shrink-0">
                  <Mail className="text-[#5C799A] w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">Email</span>
                  <span className="text-white text-sm">hello@virginiabeauty.co.za</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GIANT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full text-center mb-12 border-t border-[#879DB8]/20 pt-12"
        >
          <h1 className="text-[18vw] md:text-[15vw] lg:text-[18vw] font-bold text-white/5 leading-none tracking-tighter select-none">
            VIRGINIA.
          </h1>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#879DB8]/20 text-xs tracking-widest uppercase text-[#879DB8]/60 gap-6"
        >
          <div className="flex gap-8">
            <Link to="/" className="hover:text-[#DBEDF5] transition-colors duration-200">TERMS</Link>
            <Link to="/" className="hover:text-[#DBEDF5] transition-colors duration-200">PRIVACY</Link>
          </div>
          <div className="text-center md:text-right">
            © 2024 VIRGINIA BEAUTY PARLOUR. ALL RIGHTS RESERVED.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
