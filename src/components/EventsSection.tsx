import { useState } from "react";
import { Calendar, MapPin, Clock, Ticket, ArrowRight, X } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import hanan1_1 from "@/assets/hanan1 (1).jpg";
import hanan1_2 from "@/assets/hanan1 (2).jpg";
import hanan1_3 from "@/assets/hanan1 (3).jpg";
import portfolio1 from "@/assets/portfolio1.jpg";
import portfolio2 from "@/assets/portfolio2.jpg";
import portfolio3 from "@/assets/portfolio3.jpg";
import portfolio4 from "@/assets/portfolio4.jpg";
import portfolio5 from "@/assets/portfolio5.jpg";
import portfolio6 from "@/assets/portfolio6.jpg";
import album1 from "@/assets/album-1.png";
import album2 from "@/assets/album-2.png";
import album3 from "@/assets/album-3.png";

const events = [
  {
    id: 1,
    icon: Calendar,
    title: "Summer Music Festival",
    date: "July 15-17, 2025",
    location: "Central Park, NYC",
    description: "Unforgettable night of live performances with multiple artists across genres.",
    image: hanan1_1,
    line: 1,
  },
  {
    id: 2,
    icon: MapPin,
    title: "European Concert Tour",
    date: "August 2025",
    location: "Paris, London, Berlin",
    description: "Embarking on an exciting tour across major European cities with premium experiences.",
    image: hanan1_2,
    line: 2,
  },
  {
    id: 3,
    icon: Clock,
    title: "Studio Session Workshop",
    date: "June 20, 2025",
    location: "Recording Studio LA",
    description: "Exclusive workshop on professional vocal recording techniques with industry experts.",
    image: hanan1_3,
    line: 1,
  },
  {
    id: 4,
    icon: Ticket,
    title: "Album Launch Event",
    date: "September 10, 2025",
    location: "The Fillmore, SF",
    description: "Celebrating new album release with live performances and exclusive fan interactions.",
    image: portfolio1,
    line: 2,
  },
  {
    id: 5,
    icon: Calendar,
    title: "Jazz Night Sessions",
    date: "July 22, 2025",
    location: "Blue Note Jazz Club",
    description: "Intimate jazz performances featuring collaborative sessions with renowned musicians.",
    image: portfolio2,
    line: 1,
  },
  {
    id: 6,
    icon: MapPin,
    title: "Asia Pacific Tour",
    date: "October 2025",
    location: "Tokyo, Seoul, Bangkok",
    description: "Grand tour across Asia with electrifying performances and meet-and-greet events.",
    image: portfolio3,
    line: 2,
  },
  {
    id: 7,
    icon: Ticket,
    title: "Winter Gala Performance",
    date: "December 15, 2025",
    location: "Royal Albert Hall, London",
    description: "A magical evening of classical and contemporary hits in a historic venue.",
    image: portfolio4,
    line: 1,
  },
  {
    id: 8,
    icon: Calendar,
    title: "Charity Benefit Concert",
    date: "November 05, 2025",
    location: "Madison Square Garden, NYC",
    description: "Supporting global causes with powerful performances and special guest appearances.",
    image: portfolio5,
    line: 2,
  },
  {
    id: 9,
    icon: Clock,
    title: "Vocal Masterclass",
    date: "October 12, 2025",
    location: "Berklee College of Music",
    description: "Sharing techniques and experiences with the next generation of artists.",
    image: portfolio6,
    line: 1,
  },
  {
    id: 10,
    icon: MapPin,
    title: "Live at Sydney Opera House",
    date: "January 20, 2026",
    location: "Sydney Opera House, Australia",
    description: "An iconic performance at one of the world's most famous performing arts centers.",
    image: album1,
    line: 2,
  },
  {
    id: 11,
    icon: Ticket,
    title: "Acoustic Sunset Sessions",
    date: "August 05, 2025",
    location: "Santa Monica Pier, CA",
    description: "Stripped-back acoustic sets with a breathtaking ocean backdrop.",
    image: album2,
    line: 1,
  },
  {
    id: 12,
    icon: Calendar,
    title: "World Music Awards",
    date: "February 14, 2026",
    location: "Dubai Opera, UAE",
    description: "A star-studded night celebrating the best in global music.",
    image: album3,
    line: 2,
  },
];

const UpcomingEventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const line1Events = events.filter(e => e.line === 1);
  const line2Events = events.filter(e => e.line === 2);

  const [emblaRef1] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const [emblaRef2] = useEmblaCarousel({ loop: true, align: "center", direction: "rtl" }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);

  return (
    <section id="events" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 animate-pulse-slow" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow animation-delay-1000" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-20">
            <p className="section-subtitle mb-4">Upcoming Events</p>
            <h2 className="section-title leading-tight">
              Experience Unforgettable <br />
              <span className="text-gradient-primary">Moments & Performances</span>
            </h2>
          </div>
        </ScrollAnimation>

        {/* Line 1 Carousel */}
        <ScrollAnimation delay={0.2}>
          <div className="mb-12 overflow-hidden" ref={emblaRef1}>
            <div className="flex cursor-grab active:cursor-grabbing py-4">
              {line1Events.map((event) => (
                <div key={event.id} className="flex-[0_0_auto] px-4 md:px-6">
                  <EventCard event={event} onClick={() => setSelectedEvent(event)} />
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Line 2 Carousel */}
        <ScrollAnimation delay={0.3}>
          <div className="overflow-hidden" ref={emblaRef2} dir="rtl">
            <div className="flex cursor-grab active:cursor-grabbing py-4">
              {line2Events.map((event) => (
                <div key={event.id} className="flex-[0_0_auto] px-4 md:px-6" dir="ltr">
                  <EventCard event={event} onClick={() => setSelectedEvent(event)} />
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-card border border-primary/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                  <selectedEvent.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  {selectedEvent.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8">
                  {selectedEvent.description}
                </p>

                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
                  Get Tickets
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .event-card {
          flex-shrink: 0;
          width: 280px;
          height: 320px;
        }

        @media (min-width: 768px) {
          .event-card {
            width: 350px;
            height: 450px;
          }
        }
      `}</style>
    </section>
  );
};

const EventCard = ({ event, onClick }: { event: any, onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="event-card group relative rounded-[2rem] overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] border border-white/10 shadow-lg"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent/5" />
      </div>

      {/* Floating Icon (Top Left) */}
      <div className="absolute top-5 left-5 md:top-6 md:left-6 z-10">
        <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <event.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </div>
      </div>

      {/* Content (Bottom) */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 text-white z-10">
        {/* Title */}
        <h3 className="font-display font-bold text-2xl md:text-3xl mb-3 leading-tight">
          {event.title}
        </h3>

        {/* Date and Location */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-200 font-medium">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-200 font-medium">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-4 md:mb-6 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        {/* CTA Button */}
        <button className="flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white font-semibold transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
          <span>Learn More</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default UpcomingEventsSection;