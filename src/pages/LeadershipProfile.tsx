import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { leadershipTeam } from "../lib/data";
import { ArrowLeft, Linkedin, Mail } from "lucide-react";

export function LeadershipProfile() {
  const { id } = useParams();
  const leader = leadershipTeam.find((l) => l.id === id);

  if (!leader) {
    return <Navigate to="/leadership" replace />;
  }

  return (
    <div className="flex-1 flex flex-col lg:flex-row min-h-[calc(100vh-88px)] bg-off-black relative">
       {/* Left side: Image Background */}
       <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto lg:fixed lg:top-[88px] lg:bottom-0 lg:left-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-deep-charcoal"></div>
          <motion.img 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            src={leader.image} 
            alt={leader.name}
            className="absolute inset-0 w-full h-full object-cover filter grayscale mix-blend-luminosity opacity-80"
          />
          {/* Fading Edge for Desktop */}
          <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-48 bg-gradient-to-r from-transparent via-off-black/50 to-off-black z-10 pointer-events-none"></div>
          {/* Fading Edge for Mobile */}
          <div className="block lg:hidden absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-off-black to-transparent z-10 pointer-events-none"></div>
          
          <div className="absolute top-8 left-8 z-20">
             <Link to="/leadership" className="inline-flex items-center gap-2 text-paper-white bg-off-black/50 hover:bg-electric-teal border border-electric-teal/30 hover:border-electric-teal backdrop-blur-md px-4 py-2 rounded-full transition-all text-sm font-medium">
               <ArrowLeft size={16} /> Back to Team
             </Link>
          </div>
       </div>

       {/* Right side: Content */}
       <div className="w-full lg:w-1/2 relative flex items-center bg-off-black lg:ml-auto">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMzIsIDEyOCwgMTQxLCAwLjEpIi8+PC9zdmc+')] opacity-30 pointer-events-none"></div>
          
          <div className="px-8 py-16 lg:px-16 xl:px-24 w-full relative z-10 max-w-3xl">
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
                <div className="text-electric-teal font-medium tracking-widest uppercase text-sm mb-4">
                  {leader.role}
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold font-heading text-paper-white mb-6 leading-[1.1]">
                  {leader.name}
                </h1>
                
                <div className="flex items-center gap-6 mb-12">
                   <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-deep-charcoal border border-electric-teal/30 hover:border-electric-teal text-paper-white hover:text-electric-teal transition-all group">
                     <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                   </a>
                   <a href={`mailto:${leader.email}`} className="w-12 h-12 flex items-center justify-center rounded-full bg-deep-charcoal border border-electric-teal/30 hover:border-electric-teal text-paper-white hover:text-electric-teal transition-all group">
                     <Mail size={20} className="group-hover:scale-110 transition-transform" />
                   </a>
                </div>
                
                <div className="p-8 bg-deep-charcoal border-l-4 border-electric-teal rounded-r mb-12 relative overflow-hidden">
                   <div className="absolute -top-12 -left-4 text-electric-teal opacity-[0.03] font-serif text-[240px] leading-none pointer-events-none">"</div>
                   <p className="text-2xl font-heading text-paper-white leading-relaxed font-light italic relative z-10">
                     "{leader.quote}"
                   </p>
                </div>

                <div className="space-y-6 text-lg text-muted-teal leading-relaxed font-sans">
                   {leader.bio.split("\n\n").map((paragraph, idx) => (
                     <p key={idx}>{paragraph}</p>
                   ))}
                </div>
                
                <div className="mt-16 pt-8 border-t border-electric-teal/20 pb-16">
                   <h4 className="text-paper-white font-heading font-semibold mb-8 text-xl tracking-wide uppercase">Career Highlights</h4>
                   <ul className="space-y-6">
                     {leader.highlights.map((highlight, idx) => (
                       <li key={idx} className="flex items-center gap-4">
                         <div className="w-10 h-10 flex border border-electric-teal/20 rounded-full items-center justify-center bg-electric-teal/5 text-electric-teal font-heading font-bold">
                           {idx + 1}
                         </div>
                         <span className="text-paper-white/90 text-lg">{highlight}</span>
                       </li>
                     ))}
                   </ul>
                </div>
             </motion.div>
          </div>
       </div>
    </div>
  );
}
