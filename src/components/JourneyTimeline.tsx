import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import image3 from '../Assets/3.jpeg';
import image5 from '../Assets/5.jpeg';
import image17 from '../Assets/17.jpg';
import image18 from '../Assets/18.jpg';
import image19 from '../Assets/19.jpg';
import image20 from '../Assets/20.jpg';
import image21 from '../Assets/21.jpg';

const stops = [
  {
    time: '7:00 AM',
    title: 'Departure from Hotel',
    image: image17,
    description: 'Your Roots of Africa Tours guide picks you up from your hotel in Monrovia. After a quick briefing, begin your scenic 3-hour journey to Bong County with views of local villages and lush green forests.',
  },
  {
    time: '10:00 AM',
    title: 'Arrival at Kpatawee Waterfall',
    image: image19,
    description: 'Arrive at the beautiful Kpatawee Waterfall, one of Liberia\'s most breathtaking natural wonders. Be welcomed by the sound of rushing water and the cool forest breeze.',
  },
  {
    time: '10:15 AM',
    title: 'Guided Tour & Cultural Experience',
    image: image3,
    description: 'Your guide shares the fascinating history behind Kpatawee Waterfall and its cultural significance. Learn about traditional beliefs, local customs, and how the waterfall serves as a symbol of life and heritage.',
  },
  {
    time: '11:00 AM',
    title: 'Exploration & Relaxation',
    image: image5,
    description: 'Explore the waterfall area — take photos, enjoy the refreshing water, or simply relax surrounded by nature. Visit nearby rice farms and learn about local farming techniques.',
  },
  {
    time: '12:00 PM',
    title: 'Taste of Local Life',
    image: image20,
    description: 'Try traditional local drinks made by villagers and sample homemade Liberian snacks. A great opportunity to interact with locals and experience authentic Liberian hospitality.',
  },
  {
    time: '1:00 PM',
    title: 'Departure for Monrovia',
    image: image18,
    description: 'Begin your return journey to Monrovia, taking in the countryside views and reflecting on your memorable experience at Kpatawee.',
  },
  {
    time: '4:00 PM',
    title: 'Arrival Back at Hotel',
    image: image21,
    description: 'Arrive safely back at your hotel in Monrovia. Your guide will assist with any questions or additional tour options.',
  },
];

export function JourneyTimeline() {
  const navigate = useNavigate();

  const scrollToBook = () => {
    navigate('/book');
  };

  return (
    <section id="journeys" className="relative bg-cream py-12 md:py-20 px-4 md:px-8 lg:px-12">
      <div className="hidden md:block max-w-7xl mx-auto mb-10 text-center">
        <span className="font-sans text-terracotta text-xs uppercase tracking-widest">
          Signature Itinerary
        </span>
        <h2 className="font-serif text-3xl lg:text-4xl text-deep-brown mt-2">
          Kpatawee Waterfall Day Trip
        </h2>
        <p className="font-sans text-warm-gray mt-3 text-base max-w-2xl mx-auto">
          A full day of nature, culture, and community in Bong County, Liberia.
        </p>
      </div>

      <div className="hidden md:block max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-5 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-deep-brown text-cream p-5 lg:p-6 rounded-sm flex flex-col justify-between"
          >
            <div>
              <span className="font-sans text-terracotta text-xs uppercase tracking-widest">
                Tour Pricing
              </span>
              <h3 className="font-serif text-xl lg:text-2xl mt-2 mb-4">
                Package Details
              </h3>
              <div className="font-sans text-sm space-y-2">
                <div className="flex justify-between border-b border-cream/20 pb-2">
                  <span className="text-cream/70">Logistics</span>
                  <span>$320</span>
                </div>
                <div className="flex justify-between border-b border-cream/20 pb-2">
                  <span className="text-cream/70">Entrance Fees</span>
                  <span>$10</span>
                </div>
                <div className="flex justify-between border-b border-cream/20 pb-2">
                  <span className="text-cream/70">Service Fees</span>
                  <span>$125</span>
                </div>
                <div className="flex justify-between font-bold pt-2 text-lg">
                  <span>Total</span>
                  <span>$455</span>
                </div>
              </div>
            </div>
            <button
              onClick={scrollToBook}
              className="mt-6 border border-cream px-4 py-2 font-sans uppercase tracking-widest text-xs hover:bg-cream hover:text-deep-brown transition-colors rounded-sm w-full"
            >
              Book Now
            </button>
          </motion.div>

          {stops.map((stop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-3 shadow-md">
                <img
                  src={stop.image}
                  alt={stop.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 font-sans text-xs font-bold tracking-wider text-deep-brown rounded-sm">
                  {stop.time}
                </div>
              </div>
              <h3 className="font-serif text-lg lg:text-xl text-deep-brown mb-2">
                {stop.title}
              </h3>
              <p className="font-sans text-warm-gray text-sm font-light leading-relaxed line-clamp-3">
                {stop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="md:hidden max-w-lg mx-auto">
        <div className="mb-8 text-center">
          <span className="font-sans text-terracotta text-xs uppercase tracking-widest">
            Signature Itinerary
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-deep-brown mt-2">
            Kpatawee Waterfall Day Trip
          </h2>
          <p className="font-sans text-warm-gray mt-3 text-sm">
            A full day of nature, culture, and community in Bong County, Liberia.
          </p>

          <div className="mt-6 bg-white/50 p-4 rounded-sm border border-deep-brown/10 text-sm max-w-xs mx-auto">
            <div className="flex justify-between border-b border-deep-brown/10 py-2">
              <span>Logistics</span>
              <span>$320</span>
            </div>
            <div className="flex justify-between border-b border-deep-brown/10 py-2">
              <span>Entrance Fees</span>
              <span>$10</span>
            </div>
            <div className="flex justify-between border-b border-deep-brown/10 py-2">
              <span>Service Fees</span>
              <span>$125</span>
            </div>
            <div className="flex justify-between font-bold py-2 text-deep-brown">
              <span>Total</span>
              <span>$455</span>
            </div>
          </div>
        </div>

        <div className="space-y-8 relative border-l-2 border-deep-brown/20 ml-2 pl-6">
          {stops.map((stop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-terracotta border-4 border-cream" />
              <div className="mb-3">
                <span className="text-terracotta font-bold text-xs tracking-widest block mb-1">
                  {stop.time}
                </span>
                <h3 className="font-serif text-xl text-deep-brown">
                  {stop.title}
                </h3>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-sm mb-3 shadow-md">
                <img
                  src={stop.image}
                  alt={stop.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="font-sans text-warm-gray text-sm font-light leading-relaxed">
                {stop.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={scrollToBook}
            className="bg-deep-brown text-cream px-6 py-3 font-sans uppercase tracking-widest text-sm w-full rounded-sm hover:bg-terracotta transition-colors"
          >
            Book This Tour
          </button>
        </div>
      </div>
    </section>
  );
}