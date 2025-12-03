import { useState, useRef, useEffect } from "react";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";

const images = [
    "https://hinlers.com/cdn/shop/files/g5_resized.jpg?v=1737155278&width=720",
    "https://hinlers.com/cdn/shop/files/g11_resized.jpg?v=1737155251&width=720",
    "https://hinlers.com/cdn/shop/files/g4_resized.jpg?v=1737145745&width=1100"
];

const BrandSection = () => {
    const [index, setIndex] = useState(0);
    const touchStart = useRef(0);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleTouchStart = (e) => {
        touchStart.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const end = e.changedTouches[0].clientX;
        const diff = touchStart.current - end;

        if (diff > 50) nextImage(); // Swipe Left
        if (diff < -50) prevImage(); // Swipe Right
    };

    return (
        <section id="brand" className="section-padding relative overflow-hidden bg-secondary/20">

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* ---------------- TEXT SECTION ---------------- */}
                    <div className="space-y-8 animate-fade-up">
                        <div>
                            <p className="section-subtitle mb-4">Our Brand</p>
                            <h2 className="section-title">
                                HINLERS <span className="text-gradient-primary">Apparel</span>
                            </h2>
                        </div>

                        <p className="text-xl text-muted-foreground font-light leading-relaxed">
                            Discover my exclusive clothing line, designed for those who dare to stand out.
                            Premium quality, unique designs, and a touch of artistic soul in every piece.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Star size={20} />
                                </div>
                                <span className="text-lg font-medium">Premium Quality Fabrics</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <ShoppingBag size={20} />
                                </div>
                                <span className="text-lg font-medium">Exclusive Limited Editions</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="https://hinlers.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                Shop Now
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* ---------------- IMAGE SWIPE SLIDER ---------------- */}
                    <div className="relative animate-fade-up animation-delay-200">

                        <a
                            href="https://hinlers.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cursor-pointer"
                        >
                            <div
                                className="aspect-square rounded-3xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group mx-auto w-full max-w-md"
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                                onClick={nextImage} // desktop click
                            >
                                <img
                                    key={index}
                                    src={images[index]}
                                    alt="Hinlers Brand"
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />

                                {/* ---- SLIDING INDICATOR ON IMAGE ---- */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
                                    {images.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === i ? "bg-white scale-125" : "bg-white/40"
                                                }`}
                                        ></div>
                                    ))}
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium px-6 py-2 rounded-full border border-white/30 backdrop-blur-md bg-white/10">
                                        View Collection
                                    </span>
                                </div>
                            </div>
                        </a>

                        {/* Floating Badge */}
                        <a
                            href="https://hinlers.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -bottom-6 -right-6 bg-background border border-border p-4 rounded-2xl shadow-xl animate-float cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                                <span className="font-semibold text-sm">New Collection Drop</span>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BrandSection;
