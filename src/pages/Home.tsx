import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, BrainCircuit, CloudCog, ShieldCheck, Cpu } from "lucide-react";
import { useRef } from "react";

export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="flex flex-col flex-1 w-full relative">
      <Hero />
      <ClientMarquee />
      <Capabilities />
      <StatsSection />
      <Testimonials />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-gray-200">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMzIsIDEyOCwgMTQxLCAwLjA4KSIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-electric-teal opacity-[0.03] blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-electric-teal opacity-[0.02] blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-teal/30 bg-electric-teal/10 mb-8 overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-electric-teal animate-pulse"></span>
              <span className="text-sm font-medium text-electric-teal tracking-wide">THE FUTURE RUNS ON VIR</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.1] mb-8 font-heading">
              Intelligence.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-[#55B7C2]">
                Engineered at Velocity.
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary leading-relaxed max-w-xl mb-4 font-sans">
              We empower global enterprises to navigate the digital frontier through agentic AI, cloud-native architecture, and precision software engineering.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full mb-10">
              <span className="text-electric-teal font-bold text-sm">VIR</span>
              <span className="text-gray-400">|</span>
              <span className="text-text-secondary text-sm font-medium">Visionary Innovation into Reality</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center gap-2 bg-electric-teal hover:bg-electric-teal/90 text-white px-8 py-4 rounded font-medium transition-all hover:gap-4 shrink-0"
              >
                Scale at Speed <ArrowRight size={18} />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex justify-center items-center bg-transparent border border-gray-300 hover:border-electric-teal hover:bg-electric-teal/5 text-text-primary px-8 py-4 rounded font-medium transition-all shrink-0"
              >
                Our Manifesto
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center min-h-[500px]"
          >
             <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">
                 <div className="absolute inset-[25%] border border-electric-teal/20 rounded-full shadow-[0_0_20px_rgba(32,128,141,0.05)_inset]"></div>
                 <div className="absolute inset-[10%] border border-electric-teal/10 block border-dashed rounded-full"></div>
                 <div className="absolute inset-[-5%] border border-electric-teal/5 block rounded-full"></div>
                 
                 <div className="relative z-10 w-40 h-40 bg-white border border-electric-teal/50 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(32,128,141,0.2)] group overflow-hidden">
                    <div className="absolute inset-0 bg-electric-teal/5 group-hover:bg-electric-teal/10 transition-colors duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-electric-teal/0 via-electric-teal/10 to-electric-teal/0 group-hover:scale-150 transition-transform duration-700"></div>
                    <span className="text-text-primary font-heading font-extrabold text-4xl tracking-tighter relative z-20">vir.ai</span>
                 </div>
                 
                 <OrbitNode radius={120} initialAngle={0} duration={30} label="Agentic AI" />
                 <OrbitNode radius={120} initialAngle={120} duration={30} label="GenAI" />
                 <OrbitNode radius={120} initialAngle={240} duration={30} label="Data Eng" />
                 
                 <OrbitNode radius={185} initialAngle={45} duration={40} reverse label="Cloud Native" />
                 <OrbitNode radius={185} initialAngle={165} duration={40} reverse label="Zero Trust" />
                 <OrbitNode radius={185} initialAngle={285} duration={40} reverse label="DevOps" />

                 <OrbitNode radius={250} initialAngle={90} duration={50} label="Edge Compute" />
                 <OrbitNode radius={250} initialAngle={210} duration={50} label="IoT Systems" />
                 <OrbitNode radius={250} initialAngle={330} duration={50} label="Quantum" />
                 
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OrbitNode({ radius, initialAngle, label, duration, reverse = false }: { radius: number, initialAngle: number, label: string, duration: number, reverse?: boolean }) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-0 h-0 z-20"
      initial={{ rotate: initialAngle }}
      animate={{ rotate: initialAngle + (reverse ? -360 : 360) }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute group z-30"
        style={{ left: radius, top: 0, y: '-50%', x: '-50%' }}
        initial={{ rotate: -initialAngle }}
        animate={{ rotate: -(initialAngle + (reverse ? -360 : 360)) }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md border border-electric-teal/30 rounded-full group-hover:border-electric-teal group-hover:bg-electric-teal/10 group-hover:shadow-[0_0_20px_rgba(32,128,141,0.2)] transition-all cursor-pointer shadow-sm">
          <div className="w-1.5 h-1.5 bg-electric-teal rounded-full shadow-[0_0_8px_#20808D] group-hover:scale-150 transition-transform duration-300" />
          <span className="text-text-primary text-xs font-bold tracking-wider whitespace-nowrap opacity-80 group-hover:opacity-100 group-hover:text-electric-teal transition-colors duration-300">
            {label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

const clientLogos = [
  "GLOBALCORP", "AERODYNAMICS", "NEXUS FIN", "MEDITECH", "QUANTUM INTL", 
  "OMNI SYSTEMS", "VERTEX LOGISTICS", "SYNTHESIS"
];

function ClientMarquee() {
  return (
    <section className="py-12 bg-gray-50 border-b border-gray-200 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      
      <div className="flex whitespace-nowrap animate-marquee">
        {[...clientLogos, ...clientLogos].map((logo, idx) => (
          <div key={idx} className="mx-16 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity">
            <span className="text-2xl font-bold font-heading tracking-widest text-text-secondary uppercase">{logo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  const services = [
    {
      title: "AI & Analytics",
      desc: "Agentic AI frameworks, GenAI integration, and predictive data engineering at enterprise scale.",
      icon: <BrainCircuit size={32} />,
      details: [
        "Machine Learning & Deep Learning",
        "Generative AI Solutions",
        "Predictive Analytics",
        "Data Engineering & Governance",
        "Natural Language Processing",
        "Computer Vision"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      desc: "Accelerated multi-cloud migrations, precise DevOps, and hybrid ecosystem orchestration.",
      icon: <CloudCog size={32} />,
      details: [
        "Multi-Cloud Strategy",
        "Cloud Migration & Modernization",
        "DevOps & SRE",
        "Kubernetes & Containerization",
        "Serverless Architecture",
        "Cloud Cost Optimization"
      ]
    },
    {
      title: "Cybersecurity",
      desc: "Zero-trust architectures and active threat neutralization for mission-critical operations.",
      icon: <ShieldCheck size={32} />,
      details: [
        "Zero Trust Architecture",
        "Threat Intelligence",
        "SOC as a Service",
        "Identity & Access Management",
        "Cloud Security Posture",
        "Compliance & Risk"
      ]
    },
    {
      title: "Engineering Services",
      desc: "R&D product engineering, complex embedded systems, and precise IoT deployments.",
      icon: <Cpu size={32} />,
      details: [
        "Product Engineering",
        "Embedded Systems",
        "IoT Solutions",
        "Quality Assurance",
        "Performance Engineering",
        "DevSecOps"
      ]
    }
  ];

  return (
    <section className="py-32 bg-white relative border-b border-gray-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-6 tracking-tight">Full-Spectrum Engineering</h3>
          <p className="text-xl text-text-secondary leading-relaxed">
            We architect robust solutions across the entire technology stack, turning complex challenges into enduring structural advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-gray-50 border border-gray-200 hover:border-electric-teal/50 rounded transition-all duration-500 h-[320px] overflow-hidden"
            >
              {/* Default View */}
              <div className="absolute inset-0 p-8 flex flex-col transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-[-20px]">
                <div className="text-electric-teal mb-8 group-hover:scale-110 transition-transform origin-left">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-text-primary font-heading mb-4">{service.title}</h4>
                <p className="text-text-secondary leading-relaxed flex-1">{service.desc}</p>
                
                <div className="mt-8 pt-6 border-t border-gray-200 group-hover:border-electric-teal/30 flex items-center justify-between text-electric-teal font-medium">
                   <span>Explore</span>
                   <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Hover View */}
              <div className="absolute inset-0 p-8 flex flex-col opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-br from-gray-50 to-white">
                <div className="text-electric-teal mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold text-text-primary font-heading mb-4">{service.title}</h4>
                <ul className="space-y-2 flex-1">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-sm text-text-secondary">
                      <div className="w-1 h-1 bg-electric-teal rounded-full shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                  className="mt-4 inline-flex items-center gap-2 text-electric-teal hover:text-text-primary text-sm font-medium transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "2026", label: "Year Founded" },
    { value: "6", label: "Leadership Experts" },
    { value: "Global", label: "Delivery Capability" },
    { value: "AI-First", label: "Engineering Approach" },
  ];

  return (
    <section className="py-24 bg-electric-teal relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkiLz48L3N2Zz4=')] opacity-50"></div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-2">{stat.value}</div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-32 bg-white border-b border-gray-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">Client Impact</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading tracking-tight">Trusted by Titans</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-10 border border-gray-200 rounded relative">
            <div className="absolute -top-6 -left-6 text-electric-teal opacity-20 font-serif text-9xl leading-none">"</div>
            <p className="text-xl text-text-primary leading-relaxed mb-8 relative z-10">
              "Vir Technologies didn't just migrate your archaic core to the cloud—they fundamentally re-engineered your operational telemetry. The precision is unmatched."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-electric-teal/10 rounded-full flex items-center justify-center border border-electric-teal/30">
                 <span className="text-electric-teal font-bold">BT</span>
              </div>
              <div>
                <div className="text-text-primary font-bold font-heading">Brahmaiah Thoka</div>
                <div className="text-text-secondary text-sm">CTO</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-10 border border-gray-200 rounded relative">
            <div className="absolute -top-6 -left-6 text-electric-teal opacity-20 font-serif text-9xl leading-none">"</div>
            <p className="text-xl text-text-primary leading-relaxed mb-8 relative z-10">
              "Our grasp of Agentic AI implementation helped us automate over 40% of our tier-1 engineering supply chain. We deliver at blistering velocity."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-electric-teal/10 rounded-full flex items-center justify-center border border-electric-teal/30">
                 <span className="text-electric-teal font-bold">P</span>
              </div>
              <div>
                <div className="text-text-primary font-bold font-heading">Poojan sai Para</div>
                <div className="text-text-secondary text-sm">VP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent"></div>
      <div className="absolute right-0 top-0 w-[40rem] h-[40rem] bg-electric-teal opacity-[0.03] blur-[100px] rounded-full translate-y-[-50%] translate-x-[50%]"></div>
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-5xl font-bold font-heading text-text-primary mb-6">Ready to Scale at Speed?</h2>
        <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
          Partner with our global engineering hubs to transform your digital ecosystem. Let's architect the future together.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex justify-center items-center gap-2 bg-electric-teal hover:bg-electric-teal/90 text-white px-10 py-5 rounded font-bold uppercase tracking-wider transition-all hover:scale-105"
        >
          Engage Vir Technologies <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}