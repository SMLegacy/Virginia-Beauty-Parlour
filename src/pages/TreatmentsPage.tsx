import { Link } from 'react-router-dom';
import { User, ShoppingBag, Menu, Star, Phone, MapPin, Mail } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const services = [
  {
    title: "Professional Braiding",
    price: "From R350",
    image: "/images/Hair Syle 5.png",
    tag: "Trending"
  },
  {
    title: "Nail Care & Art",
    price: "From R200",
    image: "/images/Nails 4.png",
    tag: "Popular"
  },
  {
    title: "Everyday Glam Makeup",
    price: "From R450",
    image: "/images/Makeup 1.jpg",
    tag: "Popular"
  },
  {
    title: "Expert Installation",
    price: "From R500",
    image: "/images/Hair Installation 5.png",
    tag: "New"
  }
];

export default function ServicesPage() {
  useSEO({
    title: 'Hair Braiding, Nails & Makeup Services | Durban Salon',
    description: "Explore Virginia Beauty Parlour's full menu: box braids, weaves, gel nails & glam makeup. Expert stylists in Durban CBD. Book your appointment today.",
    canonicalPath: '/services',
  });

  return (
    <div className="min-h-screen bg-[#DBEDF5] font-sans text-[#113E75] flex flex-col">


      {/* Marquee Bar */}
      <div className="w-full bg-[#113E75]/5 py-3 border-b border-[#113E75]/10">
        <p className="text-[#113E75]/70 text-[11px] md:text-xs font-semibold uppercase tracking-widest text-center flex items-center justify-center gap-4 px-4 overflow-hidden whitespace-nowrap">
          <span>SHOP NO 4, 407 ANTON LEMBEDE ST, DURBAN</span>
          <Star className="w-3 h-3 text-[#113E75] fill-current" />
          <span>ALL WEEK: WALK-INS WELCOME</span>
          <Star className="w-3 h-3 text-[#113E75] fill-current" />
          <span className="hidden sm:inline">SHOP NO 4, 407 ANTON LEMBEDE ST, DURBAN</span>
        </p>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center text-[#113E75] mb-10">
          Tailored Care for Every Body
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-[#113E75]/10">
          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            <button className="pb-4 border-b-2 border-[#113E75] text-[#113E75] font-bold text-sm tracking-wide">
              All
            </button>
            <button className="pb-4 border-b-2 border-transparent text-[#113E75]/50 font-bold text-sm tracking-wide hover:text-[#5C799A] transition-colors">
              Braiding
            </button>
            <button className="pb-4 border-b-2 border-transparent text-[#113E75]/50 font-bold text-sm tracking-wide hover:text-[#5C799A] transition-colors">
              Nails
            </button>
            <button className="pb-4 border-b-2 border-transparent text-[#113E75]/50 font-bold text-sm tracking-wide hover:text-[#5C799A] transition-colors">
              Makeup
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {services.map((item, idx) => (
            <div key={idx} className="group flex flex-col gap-4">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-[#113E75] text-lg font-semibold">{item.title}</h3>
                <p className="text-[#707C8C] text-sm">{item.price}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-[#5C799A]/20 text-[#5C799A] text-[10px] font-bold tracking-widest uppercase rounded">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
