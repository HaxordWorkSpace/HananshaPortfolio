import { useState, useRef, useEffect } from "react";
import { Play, Image as ImageIcon, SkipBack, SkipForward, ArrowRight, Heart } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import hanan1_1 from "@/assets/hanan1 (1).jpg";
import hanan1_2 from "@/assets/hanan1 (2).jpg";
import hanan1_3 from "@/assets/hanan1 (3).jpg";
import album1 from "@/assets/album-1.png";
import album2 from "@/assets/album-2.png";
import album3 from "@/assets/album-3.png";

const portfolioItems = [
  {
    id: 1,
    type: "video",
    title: "Latest Album",
    image: hanan1_1,
    category: "Full Album",
    spotifyUrl: "https://open.spotify.com/embed/album/626TXwCa6PtZCdXv8yubvQ?utm_source=generator",
    isAlbum: true
  },
  {
    id: 2,
    type: "video",
    title: "Featured Track",
    image: hanan1_2,
    category: "Single",
    spotifyUrl: "https://open.spotify.com/track/1kl8HxZrfUluGnW5rorqzC?si=5463ebe202464ea0",
    isAlbum: false
  },
  {
    id: 3,
    type: "video",
    title: "New Release",
    image: hanan1_3,
    category: "Single",
    spotifyUrl: "https://open.spotify.com/track/0fzIiQPOjv8kcSLCYTUSf3?si=6fa682fbc6844fe1",
    isAlbum: false
  },
  {
    id: 4,
    type: "video",
    title: "Live Performance",
    image: album1,
    category: "Live Sessions",
    spotifyUrl: null,
    isAlbum: false
  },
  {
    id: 5,
    type: "image",
    title: "Behind The Scenes",
    image: album2,
    category: "Studio",
    spotifyUrl: null,
    isAlbum: false
  },
  {
    id: 6,
    type: "video",
    title: "Music Video",
    image: album3,
    category: "Official Video",
    spotifyUrl: null,
    isAlbum: false
  },
];

const PortfolioSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 332; // 300px card + 32px gap
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveSlide(index);
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 332; // 300px card + 32px gap
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveSlide(index);
    }
  };
  return (
    <section id="portfolio" className="section-padding relative bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] animate-pulse-slow animation-delay-1000" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-subtitle mb-4">My Work</p>
            <h2 className="section-title">
              Visual <span className="text-gradient-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              A collection of my most memorable performances, music videos, and creative projects
            </p>
          </div>
        </ScrollAnimation>

        {/* Portfolio Grid */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:justify-items-center md:pb-0 scrollbar-hide"
        >
          {portfolioItems.map((item, index) => (
            <ScrollAnimation key={item.id} delay={index * 0.1} direction="up" className="snap-center shrink-0">
              <div className="group relative w-[300px] md:w-[340px] h-[400px] md:h-[460px] transition-all duration-500 hover:-translate-y-2 filter drop-shadow-lg hover:drop-shadow-[0_20px_40px_rgba(225,29,72,0.3)]">
                <div
                  className="absolute inset-0 bg-secondary/20 overflow-hidden transition-all duration-500"
                  style={{
                    clipPath: "polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)",
                  }}
                >
                  {/* Border Effect */}
                  <div className="absolute inset-0 pointer-events-none z-30 border-[1px] border-white/10"
                    style={{
                      clipPath: "polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)",
                    }}
                  />

                  {/* Content Behind Cover - Music Controllers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-primary/20 to-black flex flex-col items-center justify-center p-6 gap-6">
                    {/* Title */}
                    <div className="text-center">
                      <div className="mb-3 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary">
                        {item.type === "video" ? (
                          <Play className="w-8 h-8 fill-current" />
                        ) : (
                          <ImageIcon className="w-8 h-8" />
                        )}
                      </div>
                      <h3 className="font-display font-bold text-2xl text-white mb-2 drop-shadow-lg">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 rounded-sm text-xs font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg inline-block" style={{ clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)" }}>
                        {item.category}
                      </span>
                    </div>

                    {/* Spotify Player or Music Controllers */}
                    {item.spotifyUrl ? (
                      <div className="w-full max-w-[280px]">
                        <iframe
                          src={item.isAlbum ? item.spotifyUrl : `https://open.spotify.com/embed/track/${item.spotifyUrl.split('/track/')[1].split('?')[0]}`}
                          width="100%"
                          height={item.isAlbum ? "352" : "152"}
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    ) : (
                      <>
                        {/* Music Controllers */}
                        <div className="flex items-center gap-6 bg-black/40 backdrop-blur-md px-6 py-4 rounded-full border border-white/10">
                          <button className="text-white/70 hover:text-primary transition-colors hover:scale-125 transform">
                            <SkipBack className="w-6 h-6" />
                          </button>
                          <button className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                            <Play className="w-6 h-6 ml-1 fill-white" />
                          </button>
                          <button className="text-white/70 hover:text-primary transition-colors hover:scale-125 transform">
                            <SkipForward className="w-6 h-6" />
                          </button>
                        </div>

                        {/* Action Button */}
                        <a
                          href={item.spotifyUrl || "#portfolio"}
                          target={item.spotifyUrl ? "_blank" : "_self"}
                          rel={item.spotifyUrl ? "noopener noreferrer" : undefined}
                          className="text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center gap-2 group/link border-b-2 border-primary/50 pb-1 hover:border-white"
                        >
                          {item.spotifyUrl ? "Listen on Spotify" : "View Project"} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </a>
                      </>
                    )}

                    {/* Heart Button */}
                    <button className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md text-white hover:bg-primary hover:text-white transition-colors border border-white/20 shadow-lg group/btn" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)" }}>
                      <Heart className="w-4 h-4 group-hover/btn:fill-current transition-colors" />
                    </button>
                  </div>

                  {/* Single Cover Image - Slides Up on Hover */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:-translate-y-full z-20"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <ScrollAnimation delay={0.6}>
          <div className="text-center mt-16">
            <a href="#portfolio" className="btn-outline inline-flex group">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PortfolioSection;
