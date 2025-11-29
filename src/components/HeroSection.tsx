import heroImage from "@/assets/Hero.jpg";
// Note: HEIC files are not standard for web browsers. 
// If you want to use the HEIC file, please convert it to JPG/PNG.
// I am using the JPG version provided.

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center text-center pb-16 px-4">

        <div className="animate-fade-up">
          <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase mb-6 backdrop-blur-sm">
            Official Portfolio
          </span>
        </div>

        <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl font-light tracking-wide animate-fade-up animation-delay-400">
          Singer <span className="text-primary">•</span> Youtuber <span className="text-primary">•</span> Performer
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 animate-fade-up animation-delay-600">
          <a
            href="#portfolio"
            className="btn-primary min-w-[180px]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="btn-outline min-w-[180px] border-white/20 text-white hover:bg-white hover:text-black"
          >
            Contact Me
          </a>
        </div>
      </div>



      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-slow animation-delay-1000 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
