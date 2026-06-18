import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { leadershipTeam } from "../lib/data";

export function Leadership() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-24 overflow-hidden border-b border-electric-teal/20">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-teal/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-electric-teal font-medium mb-6">
              <span className="w-8 h-[2px] bg-electric-teal"></span>
              LEADERSHIP
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              Executive Team
            </h1>
            <p className="text-xl text-muted-teal leading-relaxed max-w-2xl">
              Our leadership team brings together decades of expertise in enterprise engineering, artificial intelligence, and global operations to engineer the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 bg-off-black flex-1 border-b border-electric-teal/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div 
                key={leader.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <Link to={`/leadership/${leader.id}`} className="block relative overflow-hidden rounded border border-electric-teal/20 hover:border-electric-teal/50 transition-colors bg-deep-charcoal aspect-[3/4]">
                   {/* Background Image */}
                   <img 
                     src={leader.image} 
                     alt={leader.name}
                     className="w-full h-full object-cover filter grayscale opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                   />
                   
                   {/* Overlay Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-off-black via-off-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                   
                   {/* Content */}
                   <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                     <h3 className="text-2xl font-bold font-heading text-paper-white mb-1 group-hover:text-electric-teal transition-colors">
                       {leader.name}
                     </h3>
                     <p className="text-sm text-electric-teal font-medium tracking-wide uppercase">
                       {leader.role}
                     </p>
                     
                     <div className="mt-4 flex items-center gap-2 text-paper-white opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm">
                       <span>View Profile</span>
                       <ArrowRight size={16} />
                     </div>
                   </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance Section */}
      <section className="py-24 bg-deep-charcoal border-b border-electric-teal/20">
         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-heading text-paper-white mb-6">Corporate Governance & Ethics</h2>
                <p className="text-muted-teal text-lg leading-relaxed mb-8">
                  Vir Technologies is committed to the highest standards of transparency, accountability, and ethical AI development. Our board of directors and executive leadership ensure rigorous compliance with international mandates.
                </p>
                <Link to="/ethics-governance" className="inline-flex items-center gap-2 text-electric-teal hover:text-paper-white transition-colors font-medium">
                  Read our Governance Principles <ArrowRight size={18} />
                </Link>
             </div>
         </div>
      </section>
    </div>
  );
}
