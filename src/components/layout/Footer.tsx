import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram, Mail, ArrowRight, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="h-12 w-12 rounded-xl overflow-hidden">
  <img
    src="/logo.png"
    alt="Vir Technologies Logo"
    className="h-full w-full object-cover"
  />
</div>
              <span className="text-text-primary font-heading font-bold text-2xl tracking-tight">
                Vir <span className="font-medium text-electric-teal">Technologies</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              Intelligence. Engineered at Velocity. We enable global enterprises to navigate the digital frontier through agentic AI, cloud native innovation, and world-class engineering.
            </p>
            
            {/* Contact Info - Email & Phone displayed as text */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-electric-teal shrink-0" />
                <span className="text-text-primary font-medium">contact@virtechnologies.in</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-electric-teal shrink-0" />
                <span className="text-text-primary font-medium">+91 85229 27443</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-electric-teal shrink-0" />
                <span className="text-text-secondary">Guntur, Andhra Pradesh, India</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-primary hover:text-electric-teal hover:border-electric-teal hover:bg-electric-teal/10 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-primary hover:text-electric-teal hover:border-electric-teal hover:bg-electric-teal/10 transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-primary hover:text-electric-teal hover:border-electric-teal hover:bg-electric-teal/10 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-text-primary hover:text-electric-teal hover:border-electric-teal hover:bg-electric-teal/10 transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-text-primary font-heading font-semibold mb-6">Capabilities</h4>
            <ul className="space-y-3">
              <FooterLink href="/services/ai-analytics">AI & Analytics</FooterLink>
              <FooterLink href="/services/cloud">Cloud & Infrastructure</FooterLink>
              <FooterLink href="/services/engineering">Engineering Services</FooterLink>
              <FooterLink href="/services/cybersecurity">Cybersecurity</FooterLink>
              <FooterLink href="/services">View All Services</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-heading font-semibold mb-6">Industries</h4>
            <ul className="space-y-3">
              <FooterLink href="/industries/banking-financial">Banking & Finance</FooterLink>
              <FooterLink href="/industries/healthcare">Healthcare & Life Sciences</FooterLink>
              <FooterLink href="/industries/manufacturing">Manufacturing</FooterLink>
              <FooterLink href="/industries/retail">Retail & CPG</FooterLink>
              <FooterLink href="/industries">View All Industries</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-heading font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/leadership">Leadership</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/investors">Investor Relations</FooterLink>
              <FooterLink href="/newsroom">Newsroom</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          <div className="lg:col-span-1 xl:col-span-1">
            <h4 className="text-text-primary font-heading font-semibold mb-6">Start a Project</h4>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Have a specific requirement? Reach out to our global team to explore how Vir Technologies can architect a solution tailored for your enterprise.
            </p>
            
            {/* Email displayed as text + copyable */}
            <div className="mb-4 p-3 bg-white border border-gray-200 rounded-none">
              <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Email</div>
              <div className="text-text-primary font-medium text-sm break-all">contact@virtechnologies.in</div>
            </div>
            
            {/* Phone displayed as text + copyable */}
            <div className="mb-6 p-3 bg-white border border-gray-200 rounded-none">
              <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Phone</div>
              <div className="text-text-primary font-medium text-sm">+91 85229 27443</div>
            </div>

            <a href="mailto:contact@virtechnologies.in" className="inline-flex items-center justify-center gap-2 bg-white border border-electric-teal hover:bg-electric-teal/10 text-electric-teal w-full px-5 py-3 rounded font-medium transition-colors group">
              <Mail size={18} />
              <span className="text-sm">Email Us</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+918522927443" className="inline-flex items-center justify-center gap-2 bg-electric-teal hover:bg-electric-teal/90 text-white w-full px-5 py-3 rounded font-medium transition-colors group mt-3">
              <Phone size={18} />
              <span className="text-sm">Call Us</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © {currentYear} Vir Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/cookie-policy">Cookie Policy</FooterLink>
            <FooterLink href="/terms-of-use">Terms of Use</FooterLink>
            <FooterLink href="/accessibility">Accessibility</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={href} className="text-text-secondary hover:text-electric-teal transition-colors text-sm">
        {children}
      </Link>
    </li>
  );
}