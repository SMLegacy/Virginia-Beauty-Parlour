import { Phone, MapPin } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function Contact() {
  useSEO({
    title: 'Contact Us | Virginia Beauty Parlour Durban',
    description: 'Find Virginia Beauty Parlour at Shop 4, 407 Anton Lembede St, Durban. Call (+27) 64 554 7559 or book online. Open Monday–Saturday.',
    canonicalPath: '/contact',
  });

  return (
    <div className="min-h-screen bg-[#DBEDF5] text-[#113E75] font-sans px-4 py-10 md:px-12 lg:px-40">
      <div className="max-w-[680px] mx-auto flex flex-col gap-4">

        {/* Top Contact Cards — 2 column */}
        <div className="grid grid-cols-2 gap-4">
          {/* Call Us */}
          <div className="flex items-center justify-between rounded-2xl border border-[#113E75]/15 bg-white/70 backdrop-blur-sm p-5 shadow-sm">
            <div className="flex flex-col">
              <p className="text-base font-bold leading-tight">Call Us</p>
              <p className="text-[#5C799A] text-sm font-normal mt-0.5">Reach us by phone</p>
              <p className="text-[#113E75] text-sm font-medium mt-0.5">(+27) 64 554 7559</p>
            </div>
            <Phone className="w-5 h-5 text-[#113E75]/60" />
          </div>
          {/* Visit Us */}
          <div className="flex items-center justify-between rounded-2xl border border-[#113E75]/15 bg-white/70 backdrop-blur-sm p-5 shadow-sm">
            <div className="flex flex-col">
              <p className="text-base font-bold leading-tight">Visit Us</p>
              <p className="text-[#5C799A] text-sm font-normal mt-0.5">407 Anton Lembede St</p>
            </div>
            <MapPin className="w-5 h-5 text-[#113E75]/60" />
          </div>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-[#113E75]/15 bg-white/70 backdrop-blur-sm p-6 md:p-8 shadow-sm">
          {/* Heading with left blue border accent */}
          <h2 className="text-3xl font-serif font-normal text-[#113E75] mb-8 pl-4 border-l-4 border-[#113E75]">
            Schedule Visit
          </h2>

          <form className="flex flex-col gap-5">
            {/* Full Name — full width */}
            <label className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#707C8C]">Full Name *</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-0 border-b border-[#113E75]/25 bg-transparent h-10 px-0 pb-1 outline-none focus:border-[#113E75] transition-colors placeholder-[#879DB8] text-[#113E75]"
              />
            </label>

            {/* Email + Phone — 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#707C8C]">Email *</span>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full border-0 border-b border-[#113E75]/25 bg-transparent h-10 px-0 pb-1 outline-none focus:border-[#113E75] transition-colors placeholder-[#879DB8] text-[#113E75]"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#707C8C]">Phone</span>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full border-0 border-b border-[#113E75]/25 bg-transparent h-10 px-0 pb-1 outline-none focus:border-[#113E75] transition-colors placeholder-[#879DB8] text-[#113E75]"
                />
              </label>
            </div>

            {/* Service — full width */}
            <label className="flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#707C8C]">Service *</span>
              <select className="w-full border-0 border-b border-[#113E75]/25 bg-transparent h-10 px-0 pb-1 outline-none focus:border-[#113E75] transition-colors appearance-none text-[#113E75]">
                <option>Professional Braiding</option>
                <option>Nail Art &amp; Care</option>
                <option>Everyday Glam Makeup</option>
                <option>Expert Weave Installation</option>
              </select>
            </label>

            {/* Date + Time — 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#707C8C]">Preferred Date</span>
                <input
                  type="date"
                  className="w-full border-0 border-b border-[#113E75]/25 bg-transparent h-10 px-0 pb-1 outline-none focus:border-[#113E75] transition-colors text-[#113E75]"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#707C8C]">Preferred Time</span>
                <input
                  type="time"
                  className="w-full border-0 border-b border-[#113E75]/25 bg-transparent h-10 px-0 pb-1 outline-none focus:border-[#113E75] transition-colors text-[#113E75]"
                />
              </label>
            </div>

            {/* Confirm Button — full width */}
            <button
              type="button"
              className="mt-4 w-full h-14 rounded-xl bg-[#113E75] text-white font-bold text-sm uppercase tracking-[0.15em] hover:bg-[#5C799A] transition-colors shadow-md shadow-[#113E75]/20"
            >
              Confirm Request
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
