import { Heart } from "lucide-react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaPinterestP, href: "#", label: "Pinterest" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2 font-display text-3xl font-bold tracking-tight">
              <span className="text-3xl">🎵</span>
              <span className="text-foreground">HANAN</span>
              <span className="text-primary">SHA</span>
            </a>
            <p className="text-muted-foreground max-w-md">
              Creating soulful melodies that touch hearts and inspire millions.
              Thank you for being part of this musical journey.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="social-icon"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get updates on new releases, tour dates, and exclusive content.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-secondary/50 rounded-xl border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors text-sm font-medium">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Hanan Sha. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary" fill="currentColor" /> for music lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
