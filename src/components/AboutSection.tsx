import { Music, Mic2, Users, Calendar } from "lucide-react";
import singerHero from "@/assets/singer-hero.png";
import { ScrollAnimation } from "./ScrollAnimation";
import { useRef, useEffect, useState } from "react";

const stats = [
  { icon: Music, value: 50, suffix: "+", label: "Songs Released" },
  { icon: Mic2, value: 120, suffix: "+", label: "Live Shows" },
  { icon: Users, value: 3, suffix: "M", label: "Followers" },
  { icon: Calendar, value: 5, suffix: "+", label: "Years Active" },
];

// Counter Component
const CountUp = ({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const startValue = 0;

          const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = startValue + (end - startValue) * easeOutQuart;

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          animate();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={counterRef} className="text-3xl font-display font-bold mb-2 text-gradient-primary">
      {Math.round(count)}{suffix}
    </div>
  );
};

const AboutSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play with sound
      video.muted = false;
      video.play().catch(() => {
        // If autoplay with sound fails, keep it muted and playing
        video.muted = true;
        video.play();
      });
    }
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 animate-pulse-slow" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow animation-delay-1000" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="relative">
                {/* Background shape */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-xl" />

                {/* Main image container */}
                <div className="relative bg-secondary/30 rounded-3xl p-2 overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
                  <video
                    ref={videoRef}
                    src="https://res.cloudinary.com/dbggehild/video/upload/v1764399482/BANGLORE_PARIPADI_%EF%B8%8F__aseebabdulazeez_vyqend.mp4"
                    className="w-full h-[500px] object-cover rounded-2xl"
                    controls
                    loop
                    playsInline
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right - Content */}
          <div className="space-y-8">
            <ScrollAnimation delay={0.2}>
              <div>
                <p className="section-subtitle mb-4">About The Artist</p>
                <h2 className="section-title leading-tight">
                  Crafting Melodies That <br />
                  <span className="text-gradient-primary">Touch The Soul</span>
                </h2>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With a voice that resonates across genres and a passion for storytelling through music,
                I create experiences that connect deeply with audiences worldwide. Every performance is
                a journey, every song a story waiting to be told.
              </p>
            </ScrollAnimation>

            {/* Feature boxes */}
            <div className="grid grid-cols-2 gap-4">
              <ScrollAnimation delay={0.4}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <h4 className="font-display font-semibold text-lg mb-2">Unique Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    Blending traditional melodies with contemporary sounds
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <h4 className="font-display font-semibold text-lg mb-2">Soulful Style</h4>
                  <p className="text-sm text-muted-foreground">
                    Every note carries emotion and authenticity
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={0.6}>
              <a href="#contact" className="btn-primary inline-flex">
                Book For Events
              </a>
            </ScrollAnimation>
          </div>
        </div>

        {/* Stats Section */}
        <ScrollAnimation delay={0.2} viewportMargin="-50px">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} delay={0.1 + index * 0.1} viewportMargin="-50px">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/30 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <CountUp end={stat.value} suffix={stat.suffix} />
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;
