import { Play, Image as ImageIcon, SkipBack, SkipForward, ArrowRight, Heart } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

const portfolioItems = [
  {
    id: 1,
    type: "video",
    title: "Live at Royal Arena",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop",
    category: "Live Performance"
  },
  {
    id: 2,
    type: "image",
    title: "Midnight Jazz Session",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2070&auto=format&fit=crop",
    category: "Photoshoot"
  },
  {
    id: 3,
    type: "video",
    title: "Official Music Video",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop",
    category: "Music Video"
  },
  {
    id: 4,
    type: "image",
    title: "Studio Vibes",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
    category: "Behind the Scenes"
  },
  {
    id: 5,
    type: "video",
    title: "Acoustic Sessions",
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop",
    category: "Unplugged"
  },
  {
    id: 6,
    type: "image",
    title: "Album Cover Art",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
    category: "Art Direction"
  },
];

const PortfolioSection = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {portfolioItems.map((item, index) => (
            <ScrollAnimation key={item.id} delay={index * 0.1} direction="up">
              <div className="group relative w-[340px] h-[460px] transition-all duration-500 hover:-translate-y-2 filter drop-shadow-lg hover:drop-shadow-[0_20px_40px_rgba(225,29,72,0.3)]">
                <div
                  className="absolute inset-0 bg-secondary/20 overflow-hidden transition-all duration-500"
                  style={{
                    clipPath: "polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)",
                  }}
                >
                  {/* Border Effect (simulated with inner shadow/inset) */}
                  <div className="absolute inset-0 pointer-events-none z-20 border-[1px] border-white/10"
                    style={{
                      clipPath: "polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)",
                    }}
                  />

                  {/* Background Image with Zoom Effect */}
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
                  </div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    {/* Top Bar */}
                    <div className="flex justify-between items-start opacity-0 transform -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="px-3 py-1 rounded-sm text-xs font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg" style={{ clipPath: "polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px)" }}>
                        {item.category}
                      </span>
                      <button className="p-2 bg-white/10 backdrop-blur-md text-white hover:bg-primary hover:text-white transition-colors border border-white/20 shadow-lg group/btn" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)" }}>
                        <Heart className="w-4 h-4 group-hover/btn:fill-current transition-colors" />
                      </button>
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-0 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-hover:shadow-[0_0_30px_rgba(225,29,72,0.5)]" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)" }}>
                        {item.type === "video" ? (
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        ) : (
                          <ImageIcon className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <h3 className="font-display font-bold text-2xl text-white mb-2 drop-shadow-lg">
                        {item.title}
                      </h3>

                      {/* Music Player Bar (Slides up on hover) */}
                      <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                        <div className="pt-4 mt-4 border-t border-white/20 flex items-center justify-between gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <div className="flex items-center gap-3">
                            <button className="text-white/70 hover:text-white transition-colors hover:scale-110">
                              <SkipBack className="w-5 h-5" />
                            </button>
                            <button className="text-white/70 hover:text-white transition-colors hover:scale-110">
                              <Play className="w-5 h-5 fill-white" />
                            </button>
                            <button className="text-white/70 hover:text-white transition-colors hover:scale-110">
                              <SkipForward className="w-5 h-5" />
                            </button>
                          </div>
                          <button className="text-xs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center gap-1 group/link">
                            View <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
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
