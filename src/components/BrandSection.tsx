import { ArrowRight, ShoppingBag, Star } from "lucide-react";

const BrandSection = () => {
    return (
        <section id="brand" className="section-padding relative overflow-hidden bg-secondary/20">
            {/* Background elements */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
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

                    {/* Visual/Image Placeholder */}
                    <div className="relative animate-fade-up animation-delay-200">
                        <a href="https://hinlers.com" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                            <div className="aspect-square rounded-3xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm relative group">
                                <img
                                    src="https://hinlers.com/cdn/shop/files/g5_resized.jpg?v=1737155278&width=720"
                                    alt="Hinlers Brand"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium px-6 py-2 rounded-full border border-white/30 backdrop-blur-md bg-white/10">
                                        View Collection
                                    </span>
                                </div>
                            </div>
                        </a>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-background border border-border p-4 rounded-2xl shadow-xl animate-float">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                                <span className="font-semibold text-sm">New Collection Drop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandSection;
