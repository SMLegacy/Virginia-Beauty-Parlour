import { Star, Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function Contact() {
  useSEO({
    title: 'Contact Us | Virginia Beauty Parlour Durban',
    description: 'Find Virginia Beauty Parlour at Shop 4, 407 Anton Lembede St, Durban. Call (+27) 64 554 7559 or book online. Open Monday–Saturday.',
    canonicalPath: '/contact',
  });

  return (
    <div className="min-h-screen bg-[#DBEDF5] text-[#113E75] font-sans">


      <div className="flex h-full grow flex-col">
        <div className="px-4 md:px-12 lg:px-40 flex flex-1 justify-center py-8 md:py-12">
          <div className="flex flex-col max-w-[960px] flex-1">

            {/* Header Section */}
            <div className="flex flex-col items-center justify-center text-center gap-4 mb-8 md:mb-10">
              <div className="bg-[#113E75]/10 p-3 rounded-full">
                <Star className="text-[#113E75] w-8 h-8 fill-current" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#113E75]">
                Visit Us in Durban
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-6">
              {/* Call Us */}
              <div className="flex items-center gap-4 rounded-xl border border-[#113E75]/20 bg-white/60 backdrop-blur-sm p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#113E75]/10 text-[#113E75]">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-bold leading-tight">Call Us</p>
                  <p className="text-[#5C799A] text-sm font-normal">(+27) 64 554 7559</p>
                </div>
              </div>
              {/* Visit Us */}
              <div className="flex items-center gap-4 rounded-xl border border-[#113E75]/20 bg-white/60 backdrop-blur-sm p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#113E75]/10 text-[#113E75]">
                  <MapPin className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-bold leading-tight">Visit Us</p>
                  <p className="text-[#5C799A] text-sm font-normal">407 Anton Lembede St, Durban</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-[#879DB8]/20">
            <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-8 text-[#113E75]">Schedule Visit</h2>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Full Name */}
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#113E75]">Full Name</span>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-[#879DB8]/30 bg-white/50 focus:ring-[#113E75] focus:border-[#113E75] h-12 px-4 outline-none transition-colors placeholder-[#879DB8]"
                  />
                </label>

                {/* Email */}
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#113E75]">Email</span>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-[#879DB8]/30 bg-white/50 focus:ring-[#113E75] focus:border-[#113E75] h-12 px-4 outline-none transition-colors placeholder-[#879DB8]"
                  />
                </label>

                {/* Phone */}
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#113E75]">Phone Number</span>
                  <input
                    type="tel"
                    placeholder="(+27) 64 554 7559"
                    className="w-full rounded-xl border border-[#879DB8]/30 bg-white/50 focus:ring-[#113E75] focus:border-[#113E75] h-12 px-4 outline-none transition-colors placeholder-[#879DB8]"
                  />
                </label>

                {/* Service */}
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#113E75]">Service</span>
                  <select className="w-full rounded-xl border border-[#879DB8]/30 bg-white/50 focus:ring-[#113E75] focus:border-[#113E75] h-12 px-4 outline-none transition-colors appearance-none text-[#113E75]">
                    <option>Professional Braiding</option>
                    <option>Nail Art & Care</option>
                    <option>Everyday Glam Makeup</option>
                    <option>Expert Weave Installation</option>
                  </select>
                </label>

                {/* Preferred Date */}
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#113E75]">Preferred Date</span>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-[#879DB8]/30 bg-white/50 focus:ring-[#113E75] focus:border-[#113E75] h-12 px-4 outline-none transition-colors text-[#113E75]"
                  />
                </label>

                {/* Preferred Time */}
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#113E75]">Preferred Time</span>
                  <input
                    type="time"
                    className="w-full rounded-xl border border-[#879DB8]/30 bg-white/50 focus:ring-[#113E75] focus:border-[#113E75] h-12 px-4 outline-none transition-colors text-[#113E75]"
                  />
                </label>
              </div>



              {/* Confirm Request Button */}
              <div className="mt-8">
                <button
                  type="button"
                  className="w-full md:w-auto min-w-[200px] h-14 px-8 rounded-xl bg-[#113E75] text-white font-bold text-lg uppercase tracking-wider hover:bg-[#5C799A] transition-colors shadow-lg shadow-[#113E75]/20"
                >
                  Confirm Request
                </button>
              </div>
            </form>
          </div>



        </div>
      </div>
    </div>
  );
}
