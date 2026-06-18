


// import { Link } from "react-router-dom";
// import { motion } from "motion/react";
// import { ArrowRight, Globe, Zap, Shield, Users, Target, Lightbulb, Award } from "lucide-react";

// export function About() {
//   return (
//     <div className="flex-1 flex flex-col">
//       <section className="relative pt-24 pb-32 overflow-hidden border-b border-gray-200">
//         <div className="absolute inset-0 bg-gradient-to-br from-electric-teal/5 to-transparent pointer-events-none" />
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMzIsIDEyOCwgMTQxLCAwLjA4KSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
        
//         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl"
//           >
//             <div className="flex items-center gap-2 text-electric-teal font-medium mb-6">
//               <span className="w-8 h-[2px] bg-electric-teal"></span>
//               ABOUT US
//             </div>
//             <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-text-primary">
//               Engineering the <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-[#55B7C2]">
//                 Next Frontier
//               </span>
//             </h1>
//             <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
//               Vir Technologies was founded with a singular mission: to architect intelligent systems that transform how enterprises operate, compete, and grow in an AI-first world.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-24 bg-white border-b border-gray-200">
//         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">Our Story</h2>
//               <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-8 tracking-tight leading-[1.1]">
//                 From Vision to <br />Global Impact
//               </h3>
//               <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
//                 <p>
//                   Founded in 2018, Vir Technologies emerged from a simple but powerful conviction: that enterprise technology should be intelligent, autonomous, and engineered for velocity.
//                 </p>
//                 <p>
//                   What began as a specialized AI research consultancy has evolved into a global engineering powerhouse. Today, we partner with Fortune 500 companies, disruptive startups, and government entities across 50+ countries to deliver transformative digital solutions.
//                 </p>
//                 <p>
//                   Our journey has been defined by relentless innovation — from pioneering early agentic AI frameworks to architecting zero-trust cloud infrastructures for mission-critical operations worldwide.
//                 </p>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="relative"
//             >
//               <div className="aspect-[4/5] bg-gray-100 border border-gray-200 rounded overflow-hidden relative">
//                 <img 
//                   src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
//                   alt="Vir Technologies Headquarters"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                 <div className="absolute bottom-8 left-8 right-8">
//                   <div className="text-electric-teal font-medium text-sm tracking-widest uppercase mb-2">Global Headquarters</div>
//                   <div className="text-white font-heading text-2xl font-bold">Bengaluru, India</div>
//                 </div>
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gray-200 rounded -z-10"></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-gray-50 border-b border-gray-200">
//         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="p-10 bg-white border border-gray-200 rounded relative overflow-hidden group hover:border-electric-teal/40 transition-colors"
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-electric-teal/5 rounded-bl-full"></div>
//               <Target size={40} className="text-electric-teal mb-6" />
//               <h3 className="text-2xl font-bold text-text-primary font-heading mb-4">Our Mission</h3>
//               <p className="text-text-secondary leading-relaxed text-lg">
//                 To empower enterprises with autonomous, intelligent systems that eliminate operational friction, amplify human potential, and create sustainable competitive advantage through precision engineering.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="p-10 bg-white border border-gray-200 rounded relative overflow-hidden group hover:border-electric-teal/40 transition-colors"
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-electric-teal/5 rounded-bl-full"></div>
//               <Lightbulb size={40} className="text-electric-teal mb-6" />
//               <h3 className="text-2xl font-bold text-text-primary font-heading mb-4">Our Vision</h3>
//               <p className="text-text-secondary leading-relaxed text-lg">
//                 A world where every enterprise operates with the speed, intelligence, and adaptability of a living system — where technology anticipates needs, automates complexity, and enables humans to focus on what matters most.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-32 bg-white border-b border-gray-200">
//         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">What We Stand For</h2>
//             <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading tracking-tight">Our Core Values</h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Zap size={28} />,
//                 title: "Velocity",
//                 desc: "We move fast without breaking things. Speed is our competitive advantage, but never at the expense of quality or integrity."
//               },
//               {
//                 icon: <Shield size={28} />,
//                 title: "Trust & Security",
//                 desc: "Every system we build is secure by design. We hold ourselves to the highest standards of data protection and ethical responsibility."
//               },
//               {
//                 icon: <Users size={28} />,
//                 title: "Human-Centric AI",
//                 desc: "Technology should serve humanity. We design AI that augments human capability, not replaces it — creating synergy between people and machines."
//               },
//               {
//                 icon: <Globe size={28} />,
//                 title: "Global Perspective",
//                 desc: "We think beyond borders. Our solutions are built for global scale, cultural adaptability, and local relevance."
//               },
//               {
//                 icon: <Award size={28} />,
//                 title: "Engineering Excellence",
//                 desc: "Good enough is never enough. We pursue perfection in every line of code, every architecture decision, and every client interaction."
//               },
//               {
//                 icon: <Target size={28} />,
//                 title: "Outcome Obsession",
//                 desc: "We measure success by the tangible business outcomes we deliver for our clients — not by features shipped or hours billed."
//               }
//             ].map((value, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1, duration: 0.5 }}
//                 className="group p-8 bg-gray-50 border border-gray-200 hover:border-electric-teal/30 rounded transition-all hover:-translate-y-1"
//               >
//                 <div className="text-electric-teal mb-6 group-hover:scale-110 transition-transform origin-left">
//                   {value.icon}
//                 </div>
//                 <h4 className="text-xl font-bold text-text-primary font-heading mb-3">{value.title}</h4>
//                 <p className="text-text-secondary leading-relaxed">{value.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-gray-50 border-b border-gray-200">
//         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">Our Journey</h2>
//             <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading tracking-tight">Key Milestones</h3>
//           </div>

//           <div className="relative max-w-4xl mx-auto">
//             <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 md:-translate-x-px"></div>
            
//             {[
//               { year: "2018", title: "Foundation", desc: "Vir Technologies founded in Bengaluru with a team of 12 AI researchers and cloud architects." },
//               { year: "2019", title: "First Enterprise Win", desc: "Secured first Fortune 500 client for enterprise cloud migration and AI analytics platform." },
//               { year: "2020", title: "Global Expansion", desc: "Opened offices in Singapore, London, and San Francisco. Team grew to 500+ engineers." },
//               { year: "2021", title: "Agentic AI Platform", desc: "Launched proprietary agentic AI framework, enabling autonomous enterprise workflows." },
//               { year: "2022", title: "Unicorn Status", desc: "Achieved $1B valuation following Series C funding. Expanded to 30+ countries." },
//               { year: "2023", title: "Zero Trust Security Suite", desc: "Released comprehensive cybersecurity platform adopted by defense and financial sectors." },
//               { year: "2024", title: "50,000 Engineers", desc: "Crossed 50,000 employees worldwide. Opened innovation labs in Tel Aviv and Tokyo." },
//               { year: "2025", title: "Quantum-Ready Cloud", desc: "Pioneered quantum-resistant cloud architecture for next-generation enterprise security." }
//             ].map((milestone, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 className={`relative flex items-start gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//               >
//                 <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
//                   <div className="bg-white border border-gray-200 p-6 rounded hover:border-electric-teal/40 transition-colors">
//                     <div className="text-electric-teal font-heading font-bold text-2xl mb-2">{milestone.year}</div>
//                     <h4 className="text-text-primary font-heading font-bold text-lg mb-2">{milestone.title}</h4>
//                     <p className="text-text-secondary">{milestone.desc}</p>
//                   </div>
//                 </div>
                
//                 <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-2 border-electric-teal rounded-full flex items-center justify-center -translate-x-1/2 z-10">
//                   <div className="w-3 h-3 bg-electric-teal rounded-full"></div>
//                 </div>
                
//                 <div className="flex-1 hidden md:block"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-white border-b border-gray-200">
//         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">Global Presence</h2>
//               <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-8 tracking-tight">
//                 Engineering Without Borders
//               </h3>
//               <p className="text-lg text-text-secondary leading-relaxed mb-10">
//                 With delivery centers and innovation hubs across six continents, we bring global expertise and local insight to every engagement.
//               </p>
              
//               <div className="grid grid-cols-2 gap-6">
//                 {[
//                   { city: "Bengaluru", country: "India", role: "Global HQ" },
//                   { city: "Singapore", country: "Singapore", role: "APAC Hub" },
//                   { city: "London", country: "UK", role: "EMEA Hub" },
//                   { city: "San Francisco", country: "USA", role: "Americas Hub" },
//                   { city: "Tel Aviv", country: "Israel", role: "R&D Lab" },
//                   { city: "Tokyo", country: "Japan", role: "Innovation Lab" }
//                 ].map((office, idx) => (
//                   <div key={idx} className="p-4 border border-gray-200 rounded hover:border-electric-teal/30 transition-colors bg-gray-50">
//                     <div className="text-text-primary font-heading font-bold">{office.city}</div>
//                     <div className="text-electric-teal text-sm">{office.country}</div>
//                     <div className="text-text-secondary text-xs mt-1">{office.role}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="relative h-[500px] bg-gray-100 border border-gray-200 rounded overflow-hidden"
//             >
//               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
//               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
              
//               {[
//                 { top: "45%", left: "65%", label: "Bengaluru" },
//                 { top: "50%", left: "75%", label: "Singapore" },
//                 { top: "30%", left: "48%", label: "London" },
//                 { top: "35%", left: "20%", label: "San Francisco" },
//                 { top: "38%", left: "55%", label: "Tel Aviv" },
//                 { top: "40%", left: "80%", label: "Tokyo" }
//               ].map((loc, idx) => (
//                 <div key={idx} className="absolute" style={{ top: loc.top, left: loc.left }}>
//                   <div className="relative">
//                     <div className="w-3 h-3 bg-electric-teal rounded-full animate-pulse"></div>
//                     <div className="absolute -inset-2 border border-electric-teal/30 rounded-full animate-ping"></div>
//                     <div className="absolute top-4 left-1/2 -translate-x-1/2 text-text-primary text-xs font-medium whitespace-nowrap bg-white/90 px-2 py-1 rounded shadow-sm">
//                       {loc.label}
//                     </div>
//                   </div>
//                 </div>
//               ))}
              
//               <div className="absolute bottom-8 left-8">
//                 <div className="text-5xl font-bold text-text-primary font-heading">50+</div>
//                 <div className="text-electric-teal text-sm tracking-wider uppercase">Countries Served</div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="py-32 bg-gray-50 border-b border-gray-200">
//         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">Why Choose Us</h2>
//             <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading tracking-tight">The Vir Difference</h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 num: "01",
//                 title: "Agentic-First Architecture",
//                 desc: "We don't just implement AI — we architect autonomous systems that think, adapt, and optimize without human intervention."
//               },
//               {
//                 num: "02",
//                 title: "Velocity Engineering",
//                 desc: "Our proprietary delivery frameworks compress transformation timelines from years to months without compromising quality."
//               },
//               {
//                 num: "03",
//                 title: "Deep Domain Expertise",
//                 desc: "Industry-specialized teams bring decades of sector-specific knowledge across banking, healthcare, manufacturing, and more."
//               }
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1, duration: 0.5 }}
//                 className="p-8 bg-white border border-gray-200 hover:border-electric-teal/30 rounded transition-all group"
//               >
//                 <div className="text-electric-teal/30 font-heading font-bold text-5xl mb-6 group-hover:text-electric-teal/50 transition-colors">{item.num}</div>
//                 <h4 className="text-xl font-bold text-text-primary font-heading mb-4">{item.title}</h4>
//                 <p className="text-text-secondary leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-electric-teal relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkiLz48L3N2Zz4=')] opacity-50"></div>
        
//         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/20">
//             {[
//               { value: "500+", label: "Global Clients" },
//               { value: "50+", label: "Countries Present" },
//               { value: "10B+", label: "Transactions Secured" },
//               { value: "50K+", label: "Engineers Worldwide" }
//             ].map((stat, idx) => (
//               <div key={idx} className="px-4">
//                 <div className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-2">{stat.value}</div>
//                 <div className="text-white/80 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-white border-b border-gray-200 overflow-hidden relative">
//         <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-transparent"></div>
//         <div className="absolute right-0 top-0 w-[40rem] h-[40rem] bg-electric-teal opacity-[0.03] blur-[100px] rounded-full translate-y-[-50%] translate-x-[50%]"></div>
        
//         <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <h2 className="text-5xl font-bold font-heading text-text-primary mb-6">Join the Mission</h2>
//           <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
//             Whether you're looking to transform your enterprise or build your career with the brightest minds in technology, we'd love to hear from you.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link 
//               to="/contact" 
//               className="inline-flex justify-center items-center gap-2 bg-electric-teal hover:bg-electric-teal/90 text-white px-10 py-5 rounded font-bold uppercase tracking-wider transition-all hover:scale-105"
//             >
//               Start a Conversation <ArrowRight size={20} />
//             </Link>
//             <Link 
//               to="/careers" 
//               className="inline-flex justify-center items-center bg-transparent border border-gray-300 hover:border-electric-teal hover:bg-electric-teal/5 text-text-primary px-10 py-5 rounded font-bold uppercase tracking-wider transition-all"
//             >
//               View Careers
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

















import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Globe, Zap, Shield, Users, Target, Lightbulb, Award } from "lucide-react";

export function About() {
  return (
    <div className="flex-1 flex flex-col">
      <section className="relative pt-24 pb-32 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-teal/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMzIsIDEyOCwgMTQxLCAwLjA4KSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 text-electric-teal font-medium mb-6">
              <span className="w-8 h-[2px] bg-electric-teal"></span>
              ABOUT US
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-text-primary">
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-[#55B7C2]">
                Next Frontier
              </span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              Vir Technologies was founded with a singular mission: to architect intelligent systems that transform how enterprises operate, compete, and grow in an AI-first world — built from the heart of Andhra Pradesh, engineered for the globe.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-8 tracking-tight leading-[1.1]">
                Born in Guntur. <br />Built for the World.
              </h3>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  Founded in 2026 in Guntur, Andhra Pradesh, Vir Technologies emerged from a bold conviction: that world-class enterprise technology can be conceived, engineered, and delivered from India's emerging tech corridors — not just its metros.
                </p>
                <p>
                  What began as a focused AI and cloud engineering consultancy is rapidly evolving into a global-ready technology services firm. We partner with enterprises across industries to deliver transformative digital outcomes with precision and velocity.
                </p>
                <p>
                  Our journey is defined by a relentless drive to build — agentic AI systems, secure cloud infrastructures, and engineering platforms that give our clients a lasting competitive edge.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gray-100 border border-gray-200 rounded overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                  alt="Vir Technologies Headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-electric-teal font-medium text-sm tracking-widest uppercase mb-2">Global Headquarters</div>
                  <div className="text-white font-heading text-2xl font-bold">Guntur, Andhra Pradesh, India</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gray-200 rounded -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 bg-white border border-gray-200 rounded relative overflow-hidden group hover:border-electric-teal/40 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-teal/5 rounded-bl-full"></div>
              <Target size={40} className="text-electric-teal mb-6" />
              <h3 className="text-2xl font-bold text-text-primary font-heading mb-4">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                To empower enterprises worldwide with autonomous, intelligent systems that eliminate operational friction, amplify human potential, and create sustainable competitive advantage through precision engineering — delivered from India to the world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-10 bg-white border border-gray-200 rounded relative overflow-hidden group hover:border-electric-teal/40 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-teal/5 rounded-bl-full"></div>
              <Lightbulb size={40} className="text-electric-teal mb-6" />
              <h3 className="text-2xl font-bold text-text-primary font-heading mb-4">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                A world where every enterprise — regardless of geography — operates with the speed, intelligence, and adaptability of a living system. We believe the future of technology is not limited to global capitals; it is built wherever brilliant engineers dare to dream.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">What We Stand For</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading tracking-tight">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={28} />,
                title: "Velocity",
                desc: "We move fast without breaking things. Speed is our competitive advantage, but never at the expense of quality or integrity."
              },
              {
                icon: <Shield size={28} />,
                title: "Trust & Security",
                desc: "Every system we build is secure by design. We hold ourselves to the highest standards of data protection and ethical responsibility."
              },
              {
                icon: <Users size={28} />,
                title: "Human-Centric AI",
                desc: "Technology should serve humanity. We design AI that augments human capability — creating synergy between people and machines."
              },
              {
                icon: <Globe size={28} />,
                title: "Global Perspective",
                desc: "We think beyond borders. Our solutions are built for global scale, cultural adaptability, and local relevance — serving clients in any country, any timezone."
              },
              {
                icon: <Award size={28} />,
                title: "Engineering Excellence",
                desc: "Good enough is never enough. We pursue perfection in every line of code, every architecture decision, and every client interaction."
              },
              {
                icon: <Target size={28} />,
                title: "Outcome Obsession",
                desc: "We measure success by tangible business outcomes we deliver for our clients — not by features shipped or hours billed."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group p-8 bg-gray-50 border border-gray-200 hover:border-electric-teal/30 rounded transition-all hover:-translate-y-1"
              >
                <div className="text-electric-teal mb-6 group-hover:scale-110 transition-transform origin-left">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-text-primary font-heading mb-3">{value.title}</h4>
                <p className="text-text-secondary leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">Our Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading tracking-tight">Key Milestones</h3>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 md:-translate-x-px"></div>
            {[
              { year: "Jan 2026", title: "Foundation", desc: "Vir Technologies incorporated in Guntur, Andhra Pradesh by a founding team of AI engineers, cloud architects, and enterprise technologists with a shared vision." },
              { year: "Feb 2026", title: "Core Team Assembled", desc: "Key leadership roles filled — CTO, COO, CFO, CMO, and VP of AI — bringing together expertise across machine learning, cloud infrastructure, and enterprise operations." },
              { year: "Mar 2026", title: "Product & Platform Development", desc: "Internal R&D lab established. Work begins on Vir's proprietary agentic AI framework and cloud-native delivery accelerators." },
              { year: "Apr 2026", title: "First Client Engagement", desc: "Signed first enterprise client for AI-assisted process automation — proof that deep engineering capability from Guntur can serve global business needs." },
              { year: "May 2026", title: "Services Portfolio Launch", desc: "Officially launched full suite of services: AI & Analytics, Cloud & Infrastructure, Cybersecurity, and Engineering Services — with active client conversations across sectors." },
              { year: "Jun 2026", title: "Global Delivery Readiness", desc: "Established remote delivery capability to serve clients across any geography. Building toward our first international partnerships and presence in key markets." }
            ].map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white border border-gray-200 p-6 rounded hover:border-electric-teal/40 transition-colors">
                    <div className="text-electric-teal font-heading font-bold text-2xl mb-2">{milestone.year}</div>
                    <h4 className="text-text-primary font-heading font-bold text-lg mb-2">{milestone.title}</h4>
                    <p className="text-text-secondary">{milestone.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-2 border-electric-teal rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-electric-teal rounded-full"></div>
                </div>
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">Global Reach</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-8 tracking-tight">
                Engineering Without Borders
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Headquartered in Guntur, India, Vir Technologies is built to serve enterprises anywhere in the world. Our remote-first delivery model means geography is never a barrier to getting world-class engineering.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-10">
                We are actively building international partnerships and delivery presence to serve clients across Asia, the Middle East, Europe, and the Americas. Wherever you operate, we can engineer for you.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { city: "Guntur", country: "India", role: "Global HQ" },
                  { city: "Hyderabad", country: "India", role: "Engineering Hub" },
                  { city: "Bengaluru", country: "India", role: "Talent Hub" },
                  { city: "Remote / Virtual", country: "Worldwide", role: "Global Delivery" }
                ].map((office, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 rounded hover:border-electric-teal/30 transition-colors bg-gray-50">
                    <div className="text-text-primary font-heading font-bold">{office.city}</div>
                    <div className="text-electric-teal text-sm">{office.country}</div>
                    <div className="text-text-secondary text-xs mt-1">{office.role}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] bg-gray-100 border border-gray-200 rounded overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="text-5xl font-bold text-text-primary font-heading">Global</div>
                <div className="text-electric-teal text-sm tracking-wider uppercase">Service Capability — Any Country</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-electric-teal font-medium tracking-widest uppercase mb-4 text-sm">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-text-primary font-heading tracking-tight">The Vir Difference</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Agentic-First Architecture",
                desc: "We don't just implement AI — we architect autonomous systems that think, adapt, and optimize. Built from first principles, not stitched-together tools."
              },
              {
                num: "02",
                title: "Velocity Engineering",
                desc: "Our delivery frameworks are designed to compress transformation timelines. From discovery to deployment, we move with intent and precision."
              },
              {
                num: "03",
                title: "Founder-Led Quality",
                desc: "As a startup, every engagement has our founders' attention. You get senior-level thinking, not junior execution — on every project, every time."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 bg-white border border-gray-200 hover:border-electric-teal/30 rounded transition-all group"
              >
                <div className="text-electric-teal/30 font-heading font-bold text-5xl mb-6 group-hover:text-electric-teal/50 transition-colors">{item.num}</div>
                <h4 className="text-xl font-bold text-text-primary font-heading mb-4">{item.title}</h4>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-electric-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/20">
            {[
              { value: "2026", label: "Founded" },
              { value: "6", label: "Leadership Team" },
              { value: "Global", label: "Delivery Capability" },
              { value: "∞", label: "Ambition" }
            ].map((stat, idx) => (
              <div key={idx} className="px-4">
                <div className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-2">{stat.value}</div>
                <div className="text-white/80 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-200 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-transparent"></div>
        <div className="absolute right-0 top-0 w-[40rem] h-[40rem] bg-electric-teal opacity-[0.03] blur-[100px] rounded-full translate-y-[-50%] translate-x-[50%]"></div>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl font-bold font-heading text-text-primary mb-6">Join the Mission</h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're looking to transform your enterprise or build your career at an ambitious, founder-led technology company, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 bg-electric-teal hover:bg-electric-teal/90 text-white px-10 py-5 rounded font-bold uppercase tracking-wider transition-all hover:scale-105"
            >
              Start a Conversation <ArrowRight size={20} />
            </Link>
            <Link
              to="/careers"
              className="inline-flex justify-center items-center bg-transparent border border-gray-300 hover:border-electric-teal hover:bg-electric-teal/5 text-text-primary px-10 py-5 rounded font-bold uppercase tracking-wider transition-all"
            >
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}