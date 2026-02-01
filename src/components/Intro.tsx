import { motion } from 'framer-motion';
import culturalImage from '../Assets/3.jpeg';

export function SmallIntro() {
  return (
    <section className="py-12 md:py-20 bg-cream px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 md:h-20 bg-terracotta/30" />

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.8
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">

          <div className="md:col-span-5 relative">
            <span className="block font-sans text-terracotta text-xs uppercase tracking-widest mb-3">
              Our Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-deep-brown leading-tight mb-4 md:mb-6">
              Welcome to the{' '}
              <span className="italic text-warm-gray">Grain Coast</span>,
              Africa's oldest republic.
            </h2>
            <div className="w-12 md:w-20 h-1 bg-terracotta mb-4 md:mb-6" />

            <div className="relative aspect-[4/5] w-full md:w-4/5 overflow-hidden rounded-sm mt-4">
              <img
                src={culturalImage}
                alt="Liberian cultural experience"
                className="object-cover w-full h-full" />

              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-2 md:p-3 text-xs font-sans text-deep-brown">
                Traditional dancers in Bong County
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-6 space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg text-warm-gray leading-relaxed font-sans font-light">
            <p className="first-letter:text-4xl md:first-letter:text-5xl first-letter:font-serif first-letter:text-terracotta first-letter:float-left first-letter:mr-2 first-letter:leading-none">
              Liberia is a land of untold stories. From the dense rainforests of
              Bong County to the historic shores of Providence Island, this is a
              country where history lives in the soil and culture flows like the
              rivers. At Roots of Africa Tours, we guide you beyond the surface
              to experience the authentic heartbeat of the nation.
            </p>
            <p>
              Our journeys are immersive and personal. We believe in connecting
              you with the people—the fishermen of West Point, the farmers near
              Kpatawee, and the elders who keep our traditions alive.
            </p>
            <p className="hidden sm:block">
              We don't just offer tours; we offer a bridge to understanding.
              Experience the warmth of Liberian hospitality, the rhythm of
              traditional dance, and the breathtaking natural wonders that
              remain untouched by mass tourism.
            </p>

            <div className="pt-4 md:pt-6 flex items-center gap-3">
              <div className="h-px w-8 md:w-12 bg-deep-brown/20" />
              <span className="font-display italic text-lg md:text-xl text-deep-brown">
                The Roots Team
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}