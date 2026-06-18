import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-gray-200 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-12 w-12 rounded-xl overflow-hidden">
  <img
    src="/logo.png"
    alt="Vir Technologies Logo"
    className="h-full w-full object-cover"
  />
</div>
            
            <span className="text-text-primary font-heading font-bold text-xl tracking-tight">
              Vir <span className="font-medium text-electric-teal">Technologies</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavItem href="/about" label="About Us" />
            <NavItem href="/leadership" label="Leadership" />
            
            {/* Capabilities Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("capabilities")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/services"
                className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-electric-teal transition-colors py-2 px-3 rounded"
              >
                Capabilities
                <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === "capabilities" ? "rotate-180" : "")} />
              </Link>
              
              {activeDropdown === "capabilities" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white backdrop-blur-xl border border-gray-200 rounded-lg shadow-2xl shadow-black/10 p-8 w-[900px]">
                    <div className="grid grid-cols-4 gap-8">
                      <div>
                        <h4 className="text-electric-teal font-heading font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                          Consulting & Applications
                        </h4>
                        <ul className="space-y-2">
                          <MegaLink href="/services/consulting">Tech Consulting</MegaLink>
                          <MegaLink href="/services/enterprise-apps">Application Services</MegaLink>
                          <MegaLink href="/services/enterprise-apps">ADMS</MegaLink>
                          <MegaLink href="/services/ai-analytics">Intelligent Automation</MegaLink>
                          <MegaLink href="/services/engineering">Testing Services</MegaLink>
                          <MegaLink href="/services/engineering">Performance Engineering</MegaLink>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-electric-teal font-heading font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                          Digital Core Services
                        </h4>
                        <ul className="space-y-2">
                          <MegaLink href="/services/cloud">Cloud & Infrastructure</MegaLink>
                          <MegaLink href="/services/cloud">Cloud Consulting</MegaLink>
                          <MegaLink href="/services/network">Network Services</MegaLink>
                          <MegaLink href="/services/cybersecurity">Cyber Security</MegaLink>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-electric-teal font-heading font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                          Engineering & AI
                        </h4>
                        <ul className="space-y-2">
                          <MegaLink href="/services/engineering">Engineering Services</MegaLink>
                          <MegaLink href="/services/ai-analytics">Data Analytics</MegaLink>
                          <MegaLink href="/services/ai-analytics">Artificial Intelligence</MegaLink>
                          <MegaLink href="/services/enterprise-apps">Digital Enterprise Apps</MegaLink>
                          <MegaLink href="/services/enterprise-apps">Microsoft Business Apps</MegaLink>
                          <MegaLink href="/services/enterprise-apps">SAP</MegaLink>
                          <MegaLink href="/services/enterprise-apps">ServiceNow</MegaLink>
                          <MegaLink href="/services/enterprise-apps">Oracle</MegaLink>
                          <MegaLink href="/services/enterprise-apps">Salesforce</MegaLink>
                          <MegaLink href="/services/enterprise-apps">Pega</MegaLink>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-electric-teal font-heading font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                          Business & Innovation
                        </h4>
                        <ul className="space-y-2">
                          <MegaLink href="/services/bpo">Business Process Services</MegaLink>
                          <MegaLink href="/services/cx-ux">Experience Services</MegaLink>
                          <MegaLink href="/services">Integrated Offerings</MegaLink>
                          <MegaLink href="/sustainability">Sustainability Services</MegaLink>
                        </ul>
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <h4 className="text-electric-teal font-heading font-bold text-sm uppercase tracking-wider mb-3">
                            Spotlight
                          </h4>
                          <Link to="/services" className="text-text-primary hover:text-electric-teal text-sm font-medium transition-colors block mb-1">
                            Products & Platforms
                          </Link>
                          <Link to="/innovation-labs" className="text-text-primary hover:text-electric-teal text-sm font-medium transition-colors block">
                            Innovation, R&D — Makers Lab
                          </Link>
                          <div className="mt-2 text-electric-teal font-heading font-bold text-sm">
                            Scale at Speed™
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-text-secondary text-sm">Explore our full capabilities ecosystem</span>
                      <Link to="/services" className="text-electric-teal hover:text-text-primary text-sm font-medium transition-colors flex items-center gap-1">
                        View All Services <ChevronDown size={14} className="-rotate-90" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/industries"
                className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-electric-teal transition-colors py-2 px-3 rounded"
              >
                Industries
                <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === "industries" ? "rotate-180" : "")} />
              </Link>
              
              {activeDropdown === "industries" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white backdrop-blur-xl border border-gray-200 rounded-lg shadow-2xl shadow-black/10 p-6 w-[600px]">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-electric-teal font-heading font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                          Industries
                        </h4>
                        <ul className="space-y-2">
                          <MegaLink href="/industries/banking-financial">Banking & Financial Services</MegaLink>
                          <MegaLink href="/industries/insurance">Insurance</MegaLink>
                          <MegaLink href="/industries/healthcare">Healthcare & Life Sciences</MegaLink>
                          <MegaLink href="/industries/communications">Communications</MegaLink>
                          <MegaLink href="/industries/manufacturing">Manufacturing</MegaLink>
                          <MegaLink href="/industries/retail">Retail & CPG</MegaLink>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-electric-teal font-heading font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                          More Sectors
                        </h4>
                        <ul className="space-y-2">
                          <MegaLink href="/industries/energy-utilities">Energy & Utilities</MegaLink>
                          <MegaLink href="/industries/travel-transport">Travel & Transport</MegaLink>
                          <MegaLink href="/industries/hi-tech">Hi-Tech</MegaLink>
                          <MegaLink href="/industries/aerospace-defense">Aerospace & Defense</MegaLink>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Insights Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("insights")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/insights"
                className="flex items-center gap-1 text-sm font-medium text-text-primary hover:text-electric-teal transition-colors py-2 px-3 rounded"
              >
                Insights
                <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === "insights" ? "rotate-180" : "")} />
              </Link>
              
              {activeDropdown === "insights" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white backdrop-blur-xl border border-gray-200 rounded-lg shadow-2xl shadow-black/10 p-6 w-[300px]">
                    <ul className="space-y-2">
                      <MegaLink href="/insights">Insights Overview</MegaLink>
                      <MegaLink href="/case-studies">Case Studies</MegaLink>
                      <MegaLink href="/blogs">Views</MegaLink>
                      <MegaLink href="/research">Analyst Insights</MegaLink>
                      <MegaLink href="/newsroom">News</MegaLink>
                      <MegaLink href="/events">Events</MegaLink>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className="bg-electric-teal hover:bg-electric-teal/90 text-white px-5 py-2 rounded font-medium transition-colors text-center ml-4"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-white border-b border-gray-200 p-4 max-h-[calc(100vh-72px)] overflow-y-auto shadow-lg">
          <div className="flex flex-col gap-4">
            <MobileNavItem href="/about" label="About Us" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem href="/leadership" label="Leadership" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem href="/services" label="Capabilities" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem href="/industries" label="Industries" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem href="/insights" label="Insights" onClick={() => setMobileMenuOpen(false)} />
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-electric-teal text-center text-white px-5 py-3 rounded font-medium mt-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      to={href}
      className="text-sm font-medium text-text-primary hover:text-electric-teal transition-colors py-2 px-3 rounded"
    >
      {label}
    </Link>
  );
}

function MegaLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        to={href} 
        className="text-text-secondary hover:text-electric-teal transition-colors text-sm block py-1"
      >
        {children}
      </Link>
    </li>
  );
}

function MobileNavItem({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="block text-lg font-medium text-text-primary hover:text-electric-teal py-2 border-b border-gray-200"
    >
      {label}
    </Link>
  );
}