import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import landscapeImage from '../Assets/9.jpeg';

export function Booking() {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate('/book');
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@rootsofafricatours.com';
  };
  return (
    <section id="book" className="bg-cream py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-deep-brown rounded-sm overflow-hidden text-cream grid md:grid-cols-2">
          <div className="relative h-48 sm:h-56 md:h-auto">
            <img
              src={landscapeImage}
              alt="Liberian landscape"
              className="absolute inset-0 w-full h-full object-cover opacity-80" />

            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-deep-brown/90 to-transparent" />
          </div>

          <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="font-sans text-terracotta text-xs uppercase tracking-widest mb-3">
              Start Your Journey
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 leading-tight">
              Ready to discover Liberia?
            </h2>
            <p className="font-sans text-white/80 text-sm md:text-base font-light mb-6 md:mb-8 leading-relaxed">
              Whether you want to chase waterfalls, explore history, or relax on
              beaches, we'll craft the perfect itinerary.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                onClick={handleBookClick}
                className="bg-terracotta text-white px-6 py-3 font-sans uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-ochre transition-colors rounded-sm">

                Book a Tour
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                onClick={() =>
                window.open('https://wa.me/231555557034', '_blank')
                }
                className="border border-white/30 text-white px-6 py-3 font-sans uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-colors rounded-sm">

                WhatsApp Us
              </motion.button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-6 text-sm font-sans text-white/60">
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"
                onClick={handleEmailClick}>

                <Mail className="w-4 h-4" />
                <span>info@rootsofafricatours.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+231 55 555 7034</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}