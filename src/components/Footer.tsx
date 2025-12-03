import { Heart } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/hanaaaneyy?igsh=emR4eXVyNWp3aXI2", label: "Instagram" },
  { icon: FaYoutube, href: "https://youtu.be/qW7ftY_vsXM?si=k1TKJKf9AecbozTT", label: "YouTube" },
  { icon: FaFacebookF, href: "https://www.facebook.com/hananshaahmusic", label: "Facebook" },
  { icon: FaSpotify, href: "https://open.spotify.com/artist/5WGX9SJLY7TCqRUJcfcaYi?si=R-P8DdQzQyKc2rPBzDoiHQ", label: "Spotify" },
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
            <a href="#home" className="flex items-center gap-0 font-display text-2xl font-bold tracking-tighter">
              <span className="text-primary">H</span>
              <span className="text-foreground">ananshaah</span>
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

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Hanan Shaah. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Powered by <span className="font-semibold text-primary">Haxord Technologies</span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
