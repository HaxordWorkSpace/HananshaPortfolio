import { useState, useEffect } from "react";
import { Menu, X, Home, User, Calendar, Briefcase, ShoppingBag, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Events", href: "#events", icon: Calendar },
  { name: "Portfolio", href: "#portfolio", icon: Briefcase },
  { name: "Brand", href: "#brand", icon: ShoppingBag },
  { name: "Contact", href: "#contact", icon: Mail },
];

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/hanansha_official" },
  { icon: FaYoutube, href: "https://www.youtube.com/@hanansha" },
  { icon: FaFacebookF, href: "#" },
  { icon: FaTwitter, href: "#" },
];

interface NavigationProps {
  isExpanded?: boolean;
  onToggle?: () => void;
}

const Navigation = ({ isExpanded = false, onToggle }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Navigation */}
      <nav
        className={cn(
          "lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-0 font-display text-2xl font-bold tracking-tighter"
          >
            <span className="text-primary">H</span>
            <span className="text-foreground">anansha</span>
          </a>

          <button
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 top-[72px] bg-background/98 backdrop-blur-xl z-40 transition-all duration-500",
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "text-2xl font-display font-semibold tracking-wide transition-all duration-300",
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="social-icon">
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex fixed top-0 left-0 bottom-0 bg-sidebar border-r border-sidebar-border z-50 flex-col justify-between transition-all duration-300 ease-in-out",
          isExpanded ? "w-72 p-8" : "w-20 py-8 px-2 items-center"
        )}
      >
        {/* Logo */}
        <div className={cn("mt-4 transition-all duration-300", !isExpanded && "scale-75")}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="font-display font-bold tracking-tight leading-none block text-center"
          >
            {isExpanded ? (
              <>
                <span className="inline text-primary text-3xl">H</span>
                <span className="inline text-foreground text-3xl">anansha</span>
              </>
            ) : (
              <span className="block text-primary text-2xl">HS</span>
            )}
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-6 w-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={cn(
                "group flex items-center gap-4 text-lg font-medium transition-all duration-300 relative",
                isExpanded ? "justify-start" : "justify-center",
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title={!isExpanded ? link.name : undefined}
            >
              {isExpanded && (
                <span className={cn(
                  "w-8 h-[1px] bg-primary transition-all duration-300",
                  activeSection === link.href.slice(1) ? "w-12 opacity-100" : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100"
                )} />
              )}

              {/* Icon rendering */}
              <span className={cn("transition-all duration-300 z-10", !isExpanded && "text-primary")}>
                <link.icon size={20} />
              </span>

              {/* Text rendering */}
              <span
                className={cn(
                  "whitespace-nowrap transition-all duration-300 origin-left",
                  isExpanded ? "opacity-100 translate-x-0 w-auto" : "opacity-0 -translate-x-4 w-0 overflow-hidden absolute left-10"
                )}
              >
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-1 shadow-lg hover:bg-primary/90 transition-colors z-50"
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isExpanded ? <X size={16} /> : <Menu size={16} />}
        </button>

        {/* Footer / Socials */}
        <div className={cn("mb-4 flex flex-col gap-4", !isExpanded && "items-center")}>

          <div className={cn("flex gap-3", isExpanded ? "flex-row justify-center" : "flex-col items-center")}>
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className={cn("social-icon", !isExpanded && "w-8 h-8")}>
                <social.icon size={isExpanded ? 14 : 12} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
