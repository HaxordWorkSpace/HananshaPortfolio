import { useState } from "react";
import { Calendar, MapPin, Clock, Ticket, ArrowRight, X } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    id: 1,
    icon: Calendar,
    title: "Summer Music Festival",
    date: "July 15-17, 2025",
    location: "Central Park, NYC",
    description: "Unforgettable night of live performances with multiple artists across genres.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=400&fit=crop",
    line: 1,
  },
  {
    id: 2,
    icon: MapPin,
    title: "European Concert Tour",
    date: "August 2025",
    location: "Paris, London, Berlin",
    description: "Embarking on an exciting tour across major European cities with premium experiences.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=400&fit=crop",
    line: 2,
  },
  {
    id: 3,
    icon: Clock,
    title: "Studio Session Workshop",
    date: "June 20, 2025",
    location: "Recording Studio LA",
    description: "Exclusive workshop on professional vocal recording techniques with industry experts.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop",
    line: 1,
  },
  {
    id: 4,
    icon: Ticket,
    title: "Album Launch Event",
    date: "September 10, 2025",
    location: "The Fillmore, SF",
    description: "Celebrating new album release with live performances and exclusive fan interactions.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=400&fit=crop",
    line: 2,
  },
  {
    id: 5,
    icon: Calendar,
    title: "Jazz Night Sessions",
    date: "July 22, 2025",
    location: "Blue Note Jazz Club",
    description: "Intimate jazz performances featuring collaborative sessions with renowned musicians.",
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=400&fit=crop",
    line: 1,
  },
  {
    id: 6,
    icon: MapPin,
    title: "Asia Pacific Tour",
    date: "October 2025",
    location: "Tokyo, Seoul, Bangkok",
    description: "Grand tour across Asia with electrifying performances and meet-and-greet events.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=400&fit=crop",
    line: 2,
  },
];

const UpcomingEventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const line1Events = events.filter(e => e.line === 1);
  const line2Events = events.filter(e => e.line === 2);

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

        {/* Line 1 - Floating Left */}
        <ScrollAnimation delay={0.2}>
          <div className="mb-12 overflow-hidden">
            <div className="flex gap-8 floating-line-left">
              {line1Events.map((event) => (
                <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
              ))}
              {line1Events.map((event) => (
                <EventCard key={`${event.id}-clone`} event={event} onClick={() => setSelectedEvent(event)} />
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Line 2 - Floating Right */}
        <ScrollAnimation delay={0.3}>
          <div className="overflow-hidden">
            <div className="flex gap-8 floating-line-right">
              {line2Events.map((event) => (
                <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
              ))}
              {line2Events.map((event) => (
                <EventCard key={`${event.id}-clone`} event={event} onClick={() => setSelectedEvent(event)} />
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
        .floating-line-left {
          animation: floatLeft 4s linear infinite;
        }

        .floating-line-left:hover {
          animation-play-state: paused;
        }

        .floating-line-right {
          animation: floatRight 4s linear infinite;
        }

        .floating-line-right:hover {
          animation-play-state: paused;
        }

        @keyframes floatLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes floatRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .event-card {
          flex-shrink: 0;
          width: 260px;
          height: 280px;
        }

        @media (min-width: 768px) {
          .event-card {
            width: 320px;
            height: 400px;
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
      className="event-card group relative rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 border border-primary/20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/50 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white">
        {/* Icon */}
        <div className="mb-2 md:mb-4 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 group-hover:scale-110 transform transition-transform duration-300">
          <event.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-xl md:text-2xl mb-2 transition-all duration-300">
          {event.title}
        </h3>

        {/* Date and Location */}
        <div className="flex items-center gap-2 text-sm text-gray-300 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Calendar className="w-4 h-4" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-300 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <MapPin className="w-4 h-4" />
          <span>{event.location}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-2 md:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
          {event.description}
        </p>

        {/* CTA Button */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 w-fit hover:from-primary/30 hover:to-primary/15">
          Learn More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default UpcomingEventsSection;