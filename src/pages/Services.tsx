import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, BrainCircuit, CloudCog, ShieldCheck, Cpu, ChevronRight } from "lucide-react";

const serviceCategories = [
  {
    title: "Consulting & Applications",
    services: [
      { name: "Tech Consulting", href: "/services/consulting", desc: "Strategic technology advisory and digital transformation roadmaps." },
      { name: "Application Services", href: "/services/enterprise-apps", desc: "End-to-end application development, modernization, and management." },
      { name: "ADMS", href: "/services/enterprise-apps", desc: "Application development, maintenance, and support services." },
      { name: "Intelligent Automation", href: "/services/ai-analytics", desc: "RPA, process automation, and AI-driven workflow optimization." },
      { name: "Testing Services", href: "/services/engineering", desc: "Comprehensive QA, automation testing, and performance validation." },
      { name: "Performance Engineering", href: "/services/engineering", desc: "System performance optimization and load testing." }
    ]
  },
  {
    title: "Digital Core Services",
    services: [
      { name: "Cloud & Infrastructure", href: "/services/cloud", desc: "Multi-cloud strategy, migration, and managed services." },
      { name: "Cloud Consulting", href: "/services/cloud", desc: "Cloud architecture design and cost optimization." },
      { name: "Network Services", href: "/services/network", desc: "SD-WAN, network transformation, and 5G solutions." },
      { name: "Cyber Security", href: "/services/cybersecurity", desc: "Zero-trust security, threat detection, and compliance." }
    ]
  },
  {
    title: "Engineering, AI & Enterprise Apps",
    services: [
      { name: "Engineering Services", href: "/services/engineering", desc: "Product engineering, embedded systems, and IoT." },
      { name: "Data Analytics", href: "/services/ai-analytics", desc: "Big data solutions, BI, and advanced analytics." },
      { name: "Artificial Intelligence", href: "/services/ai-analytics", desc: "Machine learning, deep learning, and agentic AI." },
      { name: "Digital Enterprise Applications", href: "/services/enterprise-apps", desc: "ERP, CRM, and enterprise platform implementation." },
      { name: "Microsoft Business Applications", href: "/services/enterprise-apps", desc: "Dynamics 365, Power Platform, and Microsoft 365." },
      { name: "Enterprise Digital Solutions", href: "/services/enterprise-apps", desc: "Custom enterprise software and digital platforms." },
      { name: "SAP", href: "/services/enterprise-apps", desc: "SAP implementation, migration, and managed services." },
      { name: "ServiceNow", href: "/services/enterprise-apps", desc: "ITSM, workflow automation, and platform integration." },
      { name: "Oracle", href: "/services/enterprise-apps", desc: "Oracle Cloud, database, and application services." },
      { name: "Salesforce", href: "/services/enterprise-apps", desc: "CRM implementation, customization, and integration." },
      { name: "Pega", href: "/services/enterprise-apps", desc: "BPM, case management, and intelligent automation." }
    ]
  },
  {
    title: "Business & Innovation",
    services: [
      { name: "Business Process Services", href: "/services/bpo", desc: "Finance, HR, procurement, and customer support outsourcing." },
      { name: "Experience Services", href: "/services/cx-ux", desc: "UX design, customer experience, and service design." },
      { name: "Integrated Offerings", href: "/services", desc: "End-to-end bundled solutions for complex transformations." },
      { name: "Sustainability Services", href: "/sustainability", desc: "ESG strategy, carbon tracking, and green IT." }
    ]
  }
];

export function Services() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b border-electric-teal/20">
        <div className="absolute inset-0 bg-linear-to-br from-electric-teal/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMzIsIDEyOCwgMTQxLCAwLjE1KSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-electric-teal font-medium mb-6">
              <span className="w-8 h-0.5 bg-electric-teal"></span>
              CAPABILITIES
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              Our Services
            </h1>
            <p className="text-xl text-muted-teal leading-relaxed max-w-2xl">
              Full-spectrum technology capabilities designed to accelerate digital transformation, optimize operations, and engineer competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-off-black flex-1 border-b border-electric-teal/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-deep-charcoal border border-electric-teal/10 rounded p-8 hover:border-electric-teal/30 transition-colors"
              >
                <h3 className="text-2xl font-bold text-paper-white font-heading mb-6 pb-4 border-b border-electric-teal/20">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.services.map((service, sIdx) => (
                    <li key={sIdx}>
                      <Link 
                        to={service.href}
                        className="group flex items-start gap-3 p-3 rounded hover:bg-electric-teal/5 transition-colors"
                      >
                        <ChevronRight size={18} className="text-electric-teal mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                        <div>
                          <div className="text-paper-white font-medium group-hover:text-electric-teal transition-colors">
                            {service.name}
                          </div>
                          <div className="text-muted-teal text-sm mt-1">
                            {service.desc}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-24 bg-deep-charcoal border-b border-electric-teal/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-8 text-sm">Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Products & Platforms", desc: "Proprietary solutions and platforms that accelerate time-to-value.", href: "/services" },
              { title: "Innovation, R&D — Makers Lab", desc: "Our dedicated research lab exploring emerging technologies and future capabilities.", href: "/innovation-labs" },
              { title: "Scale at Speed™", desc: "Our proprietary methodology for rapid, risk-mitigated enterprise transformation.", href: "/about" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 bg-off-black border border-electric-teal/20 rounded hover:border-electric-teal/40 transition-all group"
              >
                <h3 className="text-xl font-bold text-paper-white font-heading mb-3 group-hover:text-electric-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-teal mb-6">{item.desc}</p>
                <Link to={item.href} className="inline-flex items-center gap-2 text-electric-teal hover:text-paper-white transition-colors text-sm font-medium">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}