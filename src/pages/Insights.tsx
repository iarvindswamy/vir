import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const insightsList = [
  { name: "Case Studies", href: "/case-studies" },
  { name: "Views", href: "/blogs" },
  { name: "Analyst Insights", href: "/research" },
  { name: "News", href: "/newsroom" },
  { name: "Events", href: "/events" }
];

const featuredContent = [
  {
    tag: "Featured White Paper",
    title: "Product Development with AI and Sustainability: Vir Technologies x MIT Technology Review Report",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    href: "/research"
  },
  {
    tag: "Featured Event",
    title: "Vir Technologies is a Platinum Sponsor at TM Forum DTW Ignite 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    href: "/events"
  }
];

export function Insights() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-electric-teal/20">
        <div className="absolute inset-0 bg-linear-to-br from-electric-teal/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-electric-teal font-medium mb-6">
              <span className="w-8 h-0.5 bg-electric-teal"></span>
              INSIGHTS
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Insights
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-off-black flex-1">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Insights List */}
            <div className="lg:col-span-7">
              <div className="space-y-2">
                {insightsList.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                  >
                    <Link
                      to={item.href}
                      className="group flex items-center py-4 text-xl font-medium text-paper-white hover:text-electric-teal transition-colors border-b border-electric-teal/10"
                    >
                      {item.name}
                      <ArrowRight size={18} className="ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Featured Content */}
            <div className="lg:col-span-5 space-y-6">
              {featuredContent.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className="group relative overflow-hidden rounded bg-deep-charcoal border border-electric-teal/20 hover:border-electric-teal/40 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-off-black/90 via-off-black/40 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="text-electric-teal text-sm font-medium tracking-wider uppercase mb-3">
                      {item.tag}
                    </div>
                    <h3 className="text-paper-white font-heading font-bold text-lg leading-snug mb-4 group-hover:text-electric-teal transition-colors">
                      {item.title}
                    </h3>
                    <Link 
                      to={item.href}
                      className="inline-flex items-center gap-2 text-paper-white hover:text-electric-teal text-sm font-bold uppercase tracking-wider transition-colors"
                    >
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}