import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const services = [
    "AI & Analytics",
    "Cloud & Infrastructure",
    "Cybersecurity",
    "Engineering Services",
    "Enterprise Applications",
    "Business Process Services",
    "Experience Services",
    "Consulting",
    "Other"
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-gray-200">
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
              CONTACT US
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-text-primary">
              Let's Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-[#55B7C2]">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
              Have a project in mind or want to explore how Vir Technologies can help your enterprise? Fill out the form below and our team will get back to you within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-text-primary font-heading mb-6">Get in Touch</h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Whether you have a specific requirement, want to discuss a partnership, or just want to learn more about us — we're here to listen.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric-teal/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-electric-teal" />
                    </div>
                    <div>
                      <div className="text-text-primary font-semibold mb-1">Call Us</div>
                      <a href="tel:+918522927443" className="text-text-secondary hover:text-electric-teal transition-colors">
                        +91 85229 27443
                      </a>
                      <div className="text-text-muted text-sm mt-1">Mon - Fri, 9:00 AM - 6:00 PM IST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric-teal/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-electric-teal" />
                    </div>
                    <div>
                      <div className="text-text-primary font-semibold mb-1">Email Us</div>
                      <a href="mailto:contact@virtechnologies.in" className="text-text-secondary hover:text-electric-teal transition-colors">
                        contact@virtechnologies.in
                      </a>
                      <div className="text-text-muted text-sm mt-1">We reply within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric-teal/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-electric-teal" />
                    </div>
                    <div>
                      <div className="text-text-primary font-semibold mb-1">Visit Us</div>
                      <p className="text-text-secondary">
                        Vir Technologies<br />
                        Guntur, Andhra Pradesh<br />
                        India - 522006
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Call Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 bg-electric-teal rounded-lg"
              >
                <h4 className="text-white font-heading font-bold text-lg mb-2">Prefer to talk?</h4>
                <p className="text-white/80 text-sm mb-4">Speak directly with our business development team.</p>
                <a
                  href="tel:+918522927443"
                  className="inline-flex items-center gap-2 bg-white text-electric-teal hover:bg-white/90 px-5 py-3 rounded font-medium text-sm transition-colors w-full justify-center"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-8 lg:p-12"
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle size={64} className="text-electric-teal mb-6" />
                    <h3 className="text-2xl font-bold text-text-primary font-heading mb-4">Thank You!</h3>
                    <p className="text-text-secondary max-w-md">
                      Your message has been received. Our team will review your inquiry and get back to you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded border border-gray-300 focus:border-electric-teal focus:ring-2 focus:ring-electric-teal/20 outline-none transition-all bg-white text-text-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded border border-gray-300 focus:border-electric-teal focus:ring-2 focus:ring-electric-teal/20 outline-none transition-all bg-white text-text-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded border border-gray-300 focus:border-electric-teal focus:ring-2 focus:ring-electric-teal/20 outline-none transition-all bg-white text-text-primary"
                          placeholder="john.doe@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded border border-gray-300 focus:border-electric-teal focus:ring-2 focus:ring-electric-teal/20 outline-none transition-all bg-white text-text-primary"
                          placeholder="+91 85229 27443"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded border border-gray-300 focus:border-electric-teal focus:ring-2 focus:ring-electric-teal/20 outline-none transition-all bg-white text-text-primary"
                          placeholder="Acme Corporation"
                        />
                      </div>
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-text-primary mb-2">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          required
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded border border-gray-300 focus:border-electric-teal focus:ring-2 focus:ring-electric-teal/20 outline-none transition-all bg-white text-text-primary"
                          placeholder="Chief Technology Officer"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-electric-teal focus:ring-2 focus:ring-electric-teal/20 outline-none transition-all bg-white text-text-primary"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                        How can we help? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-electric-teal focus:ring-2 focus:ring-electric-teal/20 outline-none transition-all bg-white text-text-primary resize-none"
                        placeholder="Tell us about your project, challenges, or requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-electric-teal hover:bg-electric-teal/90 text-white px-8 py-4 rounded font-medium transition-all hover:scale-105"
                    >
                      <Send size={18} />
                      Send Message
                      <ArrowRight size={18} />
                    </button>

                    <p className="text-text-muted text-sm">
                      By submitting this form, you agree to our <a href="/privacy-policy" className="text-electric-teal hover:underline">Privacy Policy</a>. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-heading text-text-primary mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            Join the enterprises that trust Vir Technologies to engineer their digital future. From AI to cloud, we deliver outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918522927443"
              className="inline-flex justify-center items-center gap-2 bg-electric-teal hover:bg-electric-teal/90 text-white px-10 py-5 rounded font-bold uppercase tracking-wider transition-all hover:scale-105"
            >
              <Phone size={20} />
              Call Us Now
            </a>
            <a
              href="mailto:contact@virtechnologies.in"
              className="inline-flex justify-center items-center bg-transparent border border-gray-300 hover:border-electric-teal hover:bg-electric-teal/5 text-text-primary px-10 py-5 rounded font-bold uppercase tracking-wider transition-all"
            >
              <Mail size={20} className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}