import Hero from '../components/Hero';
import Essence from '../components/Essence';
import Treatments from '../components/Treatments';
import Testimonials from '../components/Testimonials';
import SpecialOffer from '../components/SpecialOffer';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Virginia Beauty Parlour | Hair & Nails Salon in Durban',
    description: "Durban's premier hair braiding, weave installation & nail art salon. Affordable, professional beauty services at Shop 4, 407 Anton Lembede St. Book now!",
    canonicalPath: '/',
  });

  return (
    <div className="min-h-screen bg-opalya-bg font-sans text-opalya-brown selection:bg-opalya-green selection:text-white">
      <Hero />
      <Essence />
      <Treatments />
      <Testimonials />
      <SpecialOffer />
    </div>
  );
}
