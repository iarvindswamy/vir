import { useLocation, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";

const pathToTitle = (path: string) => {
  const segment = path.split("/").pop() || "";
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") || "Page Not Found";
};

// Content map for all generic pages
const pageContent: Record<string, {
  headline: string;
  subheadline: string;
  intro: string;
  sections: { title: string; body: string }[];
  highlights: string[];
  cta: string;
}> = {
  // ── SERVICES ──
  "consulting": {
    headline: "Technology Consulting",
    subheadline: "Strategic advisory that turns complexity into clarity.",
    intro: "Our consulting practice helps enterprises define their digital north star — from technology roadmaps and architecture reviews to operating model redesign. We bring clarity to complex decisions and align technology investment with business outcomes.",
    sections: [
      { title: "Digital Strategy & Roadmapping", body: "We help leadership teams articulate a clear technology vision, prioritize initiatives, and build actionable roadmaps aligned to business goals." },
      { title: "Architecture Advisory", body: "From monolith-to-microservices transitions to zero-trust security posture reviews, our architects bring deep technical rigour to every engagement." },
      { title: "Operating Model Transformation", body: "We assess and redesign how technology teams are organized, governed, and measured to enable sustained delivery velocity." }
    ],
    highlights: ["Technology roadmaps & strategy", "Enterprise architecture reviews", "Operating model design", "CTO advisory services", "Vendor selection & RFP support"],
    cta: "Engage our consulting team"
  },
  "ai-analytics": {
    headline: "AI & Analytics",
    subheadline: "Agentic AI, machine learning, and data engineering at enterprise scale.",
    intro: "We design and deploy AI systems that go beyond automation — they reason, adapt, and act. From predictive analytics to fully autonomous agentic workflows, our AI practice helps enterprises unlock the full value of their data.",
    sections: [
      { title: "Agentic AI Systems", body: "We build AI agents capable of autonomous decision-making and multi-step task execution — reducing manual intervention and accelerating throughput in complex workflows." },
      { title: "Generative AI Integration", body: "From RAG-based knowledge systems to fine-tuned enterprise LLMs, we integrate GenAI solutions that are grounded, secure, and production-ready." },
      { title: "Data Engineering & Governance", body: "Robust data pipelines, lakehouse architectures, and governance frameworks that ensure your AI is fed with clean, reliable, and compliant data." }
    ],
    highlights: ["Agentic workflow automation", "GenAI solution development", "ML model design & deployment", "Data lakehouse architecture", "NLP, Computer Vision & beyond"],
    cta: "Explore AI capabilities"
  },
  "cloud": {
    headline: "Cloud & Infrastructure",
    subheadline: "Multi-cloud strategy, migration, and managed infrastructure.",
    intro: "We help enterprises design, migrate, and operate cloud environments that are secure, scalable, and cost-efficient. Whether you are beginning your cloud journey or optimizing a mature multi-cloud estate, Vir Technologies engineers outcomes — not just infrastructure.",
    sections: [
      { title: "Cloud Strategy & Architecture", body: "We assess your current state and design a target cloud architecture — whether AWS, Azure, GCP, or hybrid — that fits your workloads, compliance requirements, and budget." },
      { title: "Migration & Modernization", body: "From lift-and-shift to full re-architecture, we execute migrations that minimize downtime, reduce risk, and maximize the return on cloud investment." },
      { title: "FinOps & Cost Optimization", body: "We implement cloud financial management practices to give engineering teams visibility into spend and ensure every rupee of cloud budget drives value." }
    ],
    highlights: ["Multi-cloud strategy", "Cloud migration & lift-and-shift", "Kubernetes & containerization", "Serverless architecture", "Cloud cost optimization & FinOps"],
    cta: "Start your cloud journey"
  },
  "engineering": {
    headline: "Engineering Services",
    subheadline: "Product engineering, embedded systems, and precision software delivery.",
    intro: "From custom software products to complex embedded systems and IoT deployments, our engineering teams bring technical depth and delivery discipline to every engagement. We build things that work — reliably, securely, and at scale.",
    sections: [
      { title: "Product Engineering", body: "End-to-end product development from ideation through architecture, development, testing, and launch — with a focus on scalability and long-term maintainability." },
      { title: "Embedded & IoT Systems", body: "We design firmware, embedded software, and IoT connectivity layers for industrial, consumer, and enterprise hardware products." },
      { title: "Quality Engineering", body: "Automated testing frameworks, performance validation, and continuous quality practices that ensure software ships with confidence." }
    ],
    highlights: ["Custom software development", "Embedded systems & firmware", "IoT solution engineering", "QA & test automation", "DevSecOps pipelines"],
    cta: "Build with our engineers"
  },
  "network": {
    headline: "Network Services",
    subheadline: "SD-WAN, network transformation, and next-generation connectivity.",
    intro: "Enterprise networks are the backbone of digital operations. We design and manage network environments that are resilient, high-performance, and ready for the demands of cloud-native and AI-driven workloads.",
    sections: [
      { title: "Network Architecture & Design", body: "We architect enterprise networks that balance performance, security, and cost — from campus networks to global WAN designs optimized for cloud access." },
      { title: "SD-WAN & SASE", body: "Software-defined networking and Secure Access Service Edge implementations that modernize connectivity while enhancing security posture." },
      { title: "Network Monitoring & Management", body: "24/7 network operations and proactive monitoring to ensure uptime, performance, and rapid incident resolution." }
    ],
    highlights: ["SD-WAN implementation", "SASE architecture", "Network security & segmentation", "5G enterprise readiness", "NOC-as-a-Service"],
    cta: "Modernize your network"
  },
  "bpo": {
    headline: "Business Process Services",
    subheadline: "Intelligent outsourcing that frees you to focus on what matters.",
    intro: "We manage and modernize business processes — finance and accounting, HR operations, customer support, and procurement — using a blend of skilled talent and intelligent automation to deliver efficiency, accuracy, and cost reduction.",
    sections: [
      { title: "Finance & Accounting Outsourcing", body: "End-to-end F&A services including accounts payable, receivable, general ledger management, and financial reporting — with AI-driven automation reducing manual effort." },
      { title: "Customer Support Operations", body: "Omnichannel customer support operations combining trained agents with AI-assisted tooling to deliver consistent, high-quality customer experiences." },
      { title: "HR & Talent Operations", body: "Payroll processing, benefits administration, recruitment support, and HR helpdesk — enabling HR teams to focus on strategy rather than transactions." }
    ],
    highlights: ["Finance & accounting outsourcing", "Customer support operations", "HR & payroll processing", "Procurement support", "AI-augmented workflow automation"],
    cta: "Explore BPS capabilities"
  },
  "enterprise-apps": {
    headline: "Enterprise Applications",
    subheadline: "Implementation, integration, and optimization of enterprise platforms.",
    intro: "We implement, customize, and integrate the enterprise platforms that power modern businesses — from ERP and CRM to industry-specific solutions. Our teams hold deep certifications across the leading platforms and bring both functional expertise and technical rigour.",
    sections: [
      { title: "ERP & Core Systems", body: "SAP and Oracle implementation, migration, and managed services — delivered by certified consultants who understand both the technology and the business processes it enables." },
      { title: "CRM & Customer Platforms", body: "Salesforce, Microsoft Dynamics, and Pega implementations that connect sales, service, and marketing in a unified customer engagement platform." },
      { title: "Workflow & Service Management", body: "ServiceNow implementations for ITSM, HRSD, and custom workflow automation — transforming how enterprises manage work and services internally." }
    ],
    highlights: ["SAP S/4HANA implementation", "Salesforce CRM", "Microsoft Dynamics 365", "ServiceNow ITSM", "Oracle Cloud applications", "Pega BPM"],
    cta: "Talk to our platform experts"
  },
  "cybersecurity": {
    headline: "Cybersecurity",
    subheadline: "Zero-trust architecture and active threat intelligence for mission-critical operations.",
    intro: "In an era of sophisticated and persistent threats, security cannot be bolted on — it must be engineered in. Our cybersecurity practice designs and operates security programs that protect enterprise assets, ensure compliance, and build resilience against an evolving threat landscape.",
    sections: [
      { title: "Zero Trust Architecture", body: "We design and implement zero-trust security models that verify every user, every device, and every request — eliminating implicit trust from your enterprise network." },
      { title: "Threat Detection & Response", body: "SOC-as-a-Service with 24/7 monitoring, AI-powered threat detection, and rapid incident response capabilities to minimize breach impact." },
      { title: "Cloud Security Posture Management", body: "Continuous assessment and remediation of cloud misconfigurations, privilege escalations, and compliance gaps across multi-cloud environments." }
    ],
    highlights: ["Zero trust implementation", "SOC as a Service", "Identity & access management", "Cloud security posture", "Penetration testing", "Compliance & risk management"],
    cta: "Secure your enterprise"
  },
  "cx-ux": {
    headline: "Experience Services",
    subheadline: "Human-centric design for products, services, and digital journeys.",
    intro: "Great technology is invisible — users just achieve their goals. Our experience design practice combines user research, interaction design, and service design thinking to create digital experiences that delight customers and drive measurable business outcomes.",
    sections: [
      { title: "User Research & Discovery", body: "We uncover user needs, pain points, and mental models through interviews, usability studies, and behavioral analytics — ensuring design decisions are evidence-driven." },
      { title: "UX & Product Design", body: "From wireframes and prototypes to full design systems, we design digital interfaces that are intuitive, accessible, and visually compelling." },
      { title: "Service Design", body: "We design end-to-end service experiences — mapping customer journeys, identifying friction points, and redesigning touchpoints across digital and physical channels." }
    ],
    highlights: ["User research & usability testing", "UI/UX design & prototyping", "Design systems", "Service journey mapping", "Accessibility compliance"],
    cta: "Design better experiences"
  },
  // ── INDUSTRIES ──
  "banking-financial": {
    headline: "Banking & Financial Services",
    subheadline: "Modernizing financial institutions for the AI-native era.",
    intro: "Financial institutions face simultaneous pressure to modernize legacy infrastructure, meet evolving regulatory demands, and deliver hyper-personalized digital experiences. Vir Technologies partners with banks, NBFCs, and fintech firms to navigate this complexity with precision engineering.",
    sections: [
      { title: "Core Banking Modernization", body: "We help banks transition from legacy monolithic core systems to modern, API-first, cloud-native architectures — without the risk of a big-bang replacement." },
      { title: "AI-Driven Risk & Fraud Management", body: "Machine learning models for credit risk scoring, real-time fraud detection, and AML transaction monitoring that reduce losses while improving customer experience." },
      { title: "Digital Channels & Open Banking", body: "Mobile banking platforms, open banking API layers, and digital onboarding experiences that meet customers where they are and comply with regulatory frameworks." }
    ],
    highlights: ["Core banking modernization", "Fraud & AML systems", "Open banking APIs", "Regulatory compliance technology", "Digital lending platforms"],
    cta: "Transform your financial services"
  },
  "insurance": {
    headline: "Insurance",
    subheadline: "Technology that accelerates underwriting, claims, and customer engagement.",
    intro: "The insurance industry is being reshaped by data, AI, and changing customer expectations. We help insurers modernize their technology stack, automate high-volume processes, and build digital capabilities that improve loss ratios and customer retention.",
    sections: [
      { title: "Underwriting Automation", body: "AI-assisted underwriting tools that enrich submissions with third-party data, automate straight-through processing, and provide risk scoring to underwriters in real time." },
      { title: "Claims Transformation", body: "End-to-end claims automation from FNOL to settlement — using AI for damage assessment, fraud scoring, and automated payments to reduce cycle times and improve claimant satisfaction." },
      { title: "Policy Administration Modernization", body: "Migration from legacy PAS systems to modern, configurable platforms that support product agility and reduce time-to-market for new offerings." }
    ],
    highlights: ["Underwriting automation", "Claims AI & automation", "Policy administration systems", "Telematics & usage-based insurance", "Distribution platform modernization"],
    cta: "Modernize your insurance operations"
  },
  "healthcare": {
    headline: "Healthcare & Life Sciences",
    subheadline: "Technology that improves outcomes, accelerates research, and reduces cost.",
    intro: "Healthcare organizations are under pressure to improve clinical outcomes, reduce operational costs, and navigate complex regulatory requirements — all while protecting sensitive patient data. We bring deep healthcare IT expertise to every engagement.",
    sections: [
      { title: "Clinical Data & AI", body: "We build AI-powered clinical decision support systems, predictive readmission models, and population health analytics platforms that help clinicians make better decisions faster." },
      { title: "Health IT Modernization", body: "EHR implementations, HL7 FHIR integrations, and legacy system migrations that improve data interoperability and reduce administrative burden." },
      { title: "Life Sciences & R&D", body: "Data platforms for clinical trial management, regulatory submission support, and real-world evidence generation that accelerate time to market for new therapies." }
    ],
    highlights: ["EHR implementation & integration", "Clinical AI & decision support", "FHIR interoperability", "Clinical trial data management", "Patient engagement platforms"],
    cta: "Explore healthcare IT solutions"
  },
  "communications": {
    headline: "Communications",
    subheadline: "Network intelligence and digital transformation for telcos and CSPs.",
    intro: "Communications service providers face mounting pressure to modernize network infrastructure, reduce churn, and monetize new 5G capabilities. We help telcos and CSPs build the technology capabilities needed to compete in a rapidly evolving market.",
    sections: [
      { title: "Network Operations & Automation", body: "AI-driven network operations platforms that automate fault detection, root cause analysis, and remediation — reducing OPEX and improving network reliability." },
      { title: "BSS/OSS Modernization", body: "Modernizing billing, mediation, and operations support systems to support new business models, reduce TTM for new services, and improve customer experience." },
      { title: "5G & Edge Enablement", body: "Technology consulting and implementation for 5G network slicing, edge computing platforms, and the B2B service monetization opportunities they enable." }
    ],
    highlights: ["Network automation & AI-Ops", "BSS/OSS modernization", "5G network enablement", "Customer experience platforms", "Revenue assurance & fraud management"],
    cta: "Advance your network capabilities"
  },
  "manufacturing": {
    headline: "Manufacturing",
    subheadline: "Smart factory, supply chain intelligence, and engineering excellence.",
    intro: "Modern manufacturers must balance operational efficiency, supply chain resilience, and sustainability while managing increasingly complex product portfolios. We bring AI, IoT, and cloud technologies to the factory floor and the boardroom.",
    sections: [
      { title: "Smart Manufacturing & Industry 4.0", body: "IoT sensor integration, edge computing, and AI-powered quality control systems that improve OEE, reduce scrap, and enable predictive maintenance at scale." },
      { title: "Supply Chain Intelligence", body: "AI-driven demand forecasting, supplier risk monitoring, and logistics optimization platforms that build resilience and reduce working capital requirements." },
      { title: "Product Lifecycle Management", body: "PLM system implementations and digital twin platforms that connect engineering, manufacturing, and service operations — reducing time to market and improving first-time quality." }
    ],
    highlights: ["IoT & edge computing", "Predictive maintenance", "Supply chain AI", "PLM implementation", "Quality management systems"],
    cta: "Transform your manufacturing operations"
  },
  "retail": {
    headline: "Retail & Consumer Goods",
    subheadline: "AI-driven commerce, personalization, and supply chain optimization.",
    intro: "Retailers and consumer goods companies must deliver seamless omnichannel experiences while optimizing margins in an increasingly competitive landscape. We help consumer-facing businesses use data and AI to know their customers better and serve them faster.",
    sections: [
      { title: "Personalization & AI Commerce", body: "Recommendation engines, dynamic pricing models, and AI-powered search experiences that drive conversion, basket size, and customer lifetime value." },
      { title: "Omnichannel Commerce Platforms", body: "Commerce platform implementations, POS modernization, and order management systems that unify the customer experience across online and physical channels." },
      { title: "Supply Chain & Inventory Optimization", body: "AI-driven demand forecasting, warehouse management, and last-mile logistics optimization that reduce stockouts and improve inventory turns." }
    ],
    highlights: ["AI personalization & recommendations", "Commerce platform implementation", "Inventory & demand forecasting", "Loyalty & CRM platforms", "Store operations technology"],
    cta: "Build smarter retail experiences"
  },
  "energy-utilities": {
    headline: "Energy & Utilities",
    subheadline: "Digital transformation for a sustainable, resilient energy future.",
    intro: "Energy and utility companies are navigating the twin imperatives of decarbonization and grid modernization. We help utilities, renewables firms, and energy companies build the digital capabilities needed to manage distributed energy resources, optimize operations, and deliver on net-zero commitments.",
    sections: [
      { title: "Smart Grid & Asset Management", body: "IoT-enabled asset monitoring, predictive maintenance platforms, and advanced distribution management systems that improve grid reliability and reduce operational costs." },
      { title: "Energy Data & Analytics", body: "Data platforms for meter data management, energy trading analytics, and ESG reporting that give operators and regulators the visibility they need." },
      { title: "Renewable Energy Systems", body: "Technology platforms for wind and solar farm operations, battery energy storage management, and EV charging network management." }
    ],
    highlights: ["Smart grid implementation", "Meter data management", "Predictive asset maintenance", "Energy trading analytics", "ESG data & reporting"],
    cta: "Power the energy transition"
  },
  "travel-transport": {
    headline: "Travel, Transport & Logistics",
    subheadline: "Intelligent operations for a connected, on-demand world.",
    intro: "Travel, transport, and logistics companies operate at the intersection of extreme operational complexity and sky-high customer expectations. We help airlines, freight operators, hospitality groups, and logistics providers use technology to improve efficiency, resilience, and customer experience.",
    sections: [
      { title: "Operations Intelligence", body: "AI-powered operations platforms for route optimization, capacity planning, and real-time disruption management that reduce costs and improve on-time performance." },
      { title: "Customer Experience Platforms", body: "Booking, loyalty, and customer service platforms that deliver personalized, seamless experiences across web, mobile, and contact center channels." },
      { title: "Supply Chain Visibility", body: "End-to-end supply chain visibility platforms with IoT tracking, predictive ETAs, and exception management that give shippers and receivers confidence in every shipment." }
    ],
    highlights: ["Route & capacity optimization", "Loyalty & booking platforms", "Supply chain visibility", "Revenue management systems", "Digital freight platforms"],
    cta: "Optimize your operations"
  },
  "hi-tech": {
    headline: "Hi-Tech",
    subheadline: "Engineering support for technology companies building the next generation.",
    intro: "Technology companies — from enterprise software firms to hardware OEMs and semiconductor companies — need engineering partners who speak their language. We provide product engineering, testing, and platform services that help hi-tech companies accelerate development and scale operations.",
    sections: [
      { title: "Product Engineering Support", body: "Embedded engineering teams that augment in-house R&D — bringing expertise in cloud platforms, AI integration, and software quality to accelerate product development." },
      { title: "Platform & Infrastructure Services", body: "SRE, DevOps, and cloud infrastructure services that help software companies scale their platforms reliably and cost-efficiently." },
      { title: "Testing & Quality Engineering", body: "Automated testing, performance engineering, and security testing services that raise the quality bar and give product teams confidence in every release." }
    ],
    highlights: ["Product engineering augmentation", "SRE & platform operations", "AI/ML integration services", "Test automation", "Developer productivity tooling"],
    cta: "Accelerate your product development"
  },
  "aerospace-defense": {
    headline: "Aerospace & Defense",
    subheadline: "Mission-critical engineering for the most demanding environments.",
    intro: "Aerospace and defense organizations require technology partners who understand the unique demands of safety-critical systems, stringent compliance requirements, and long asset lifecycles. We bring precision engineering and deep security expertise to programs where the stakes are highest.",
    sections: [
      { title: "Embedded & Safety-Critical Systems", body: "Software development for avionics, flight control, and mission systems — following DO-178C, MIL-STD, and relevant safety standards for certification-critical applications." },
      { title: "Simulation & Digital Engineering", body: "Digital twin platforms, model-based systems engineering support, and simulation environments that reduce development cost and improve system validation." },
      { title: "Secure IT & Cyber Defense", body: "Zero-trust network architecture, classified systems security, and cyber resilience programs designed for the unique threat environment of defense organizations." }
    ],
    highlights: ["Safety-critical software (DO-178C)", "Avionics & embedded systems", "Digital twin & simulation", "Secure classified environments", "Sustainment & lifecycle support"],
    cta: "Partner with us on critical programs"
  },
  // ── COMPANY ──
  "contact": {
    headline: "Contact Us",
    subheadline: "Let's start a conversation.",
    intro: "Whether you have a specific project in mind, want to explore how Vir Technologies can support your digital transformation, or simply want to learn more about us — we'd love to hear from you. Our team typically responds within one business day.",
    sections: [
      { title: "General Enquiries", body: "For general questions about our services, capabilities, or company, reach us at contact@virtechnologies.in — we'll connect you with the right person." },
      { title: "Business Development", body: "If you're an enterprise looking to explore a partnership or engagement, please email us with a brief description of your challenge and we'll schedule a discovery call." },
      { title: "Careers", body: "Interested in joining the Vir Technologies team? Visit our careers page or email careers@virtechnologies.in with your resume and areas of interest." }
    ],
    highlights: ["contact@virtechnologies.in", "Guntur, Andhra Pradesh, India", "Response within 1 business day", "Global delivery capability", "Serving clients worldwide"],
    cta: "Send us a message"
  },
  "careers": {
    headline: "Careers at Vir Technologies",
    subheadline: "Build the future of enterprise technology from Guntur.",
    intro: "We are a startup with global ambitions — and we're looking for engineers, architects, consultants, and strategists who want to do the best work of their careers. At Vir Technologies, you'll work on cutting-edge AI and cloud problems for real enterprise clients, alongside a founder-led team that cares deeply about quality.",
    sections: [
      { title: "Why Join Us", body: "As an early-stage company, every person we hire has significant impact. You'll have the opportunity to shape how we work, what we build, and how we grow — not just execute a predefined role." },
      { title: "What We're Looking For", body: "We hire for curiosity, engineering depth, and ownership mentality. Domain experience matters, but the desire to learn and solve hard problems matters more." },
      { title: "Current Opportunities", body: "We are actively building our team across AI engineering, cloud architecture, enterprise consulting, and business development. Send your profile to careers@virtechnologies.in." }
    ],
    highlights: ["AI & Machine Learning Engineers", "Cloud Architects & SREs", "Enterprise Consultants", "Cybersecurity Specialists", "Business Development"],
    cta: "Send your profile"
  },
  "investors": {
    headline: "Investor Relations",
    subheadline: "Building a generational enterprise technology company from India.",
    intro: "Vir Technologies is at the beginning of an ambitious journey. We are a founder-funded, founder-led startup with a clear thesis: that world-class enterprise technology services can be built from emerging Indian cities, serving global clients. We are open to conversations with aligned investors who share this vision.",
    sections: [
      { title: "Our Investment Thesis", body: "The global technology services market is large and growing. Vir Technologies is differentiated by its AI-first service delivery model, its founder-led quality commitment, and its base in a talent-rich region outside the overheated Bengaluru and Hyderabad markets." },
      { title: "What We're Building", body: "We are building a full-service technology firm that can compete globally — starting with AI, cloud, and engineering services and expanding into adjacent capabilities as we scale." },
      { title: "Get in Touch", body: "If you are an angel investor, seed-stage fund, or strategic investor interested in the enterprise technology services space, we welcome the conversation. Please reach out to our CEO directly at ceo@virtechnologies.in." }
    ],
    highlights: ["Founder-led & founder-funded", "AI-first service model", "Global delivery from India", "Talent base in Guntur & AP", "Open to aligned investor conversations"],
    cta: "Connect with our founding team"
  },
  // ── INSIGHTS ──
  "case-studies": {
    headline: "Case Studies",
    subheadline: "Real problems. Real engineering. Real outcomes.",
    intro: "Our case studies document the tangible results we deliver for clients — from AI deployments that transformed business processes to cloud migrations that unlocked new levels of operational efficiency. We are early in our journey, and our first case studies are being authored now.",
    sections: [
      { title: "AI-Assisted Process Automation", body: "We partnered with our first enterprise client to design and deploy an agentic AI workflow that automated a high-volume, judgment-intensive business process — reducing processing time significantly while improving accuracy." },
      { title: "Cloud Architecture Advisory", body: "Our team conducted a comprehensive cloud architecture review for a growing technology company, identifying cost reduction opportunities and a clear modernization path." },
      { title: "Coming Soon", body: "As we grow our client portfolio, we will continue publishing detailed case studies. Check back regularly or subscribe to our newsletter for updates." }
    ],
    highlights: ["Agentic AI deployments", "Cloud modernization", "Enterprise platform implementations", "Cybersecurity programs", "Data & analytics platforms"],
    cta: "Discuss your challenge with us"
  },
  "blogs": {
    headline: "Views",
    subheadline: "Perspectives from the Vir Technologies team.",
    intro: "Our engineering leaders and consultants share their thinking on the technology trends, architectural patterns, and business challenges that matter most to enterprise clients. These are our honest, practitioner-level perspectives — not marketing copy.",
    sections: [
      { title: "AI & The Agentic Enterprise", body: "Our leadership team is actively writing about the shift from reactive AI tools to proactive agentic systems — and what it means for enterprise operations, IT architecture, and the future of work." },
      { title: "Building for Scale from Day One", body: "Lessons from designing systems that need to grow: on cloud-native architecture, data modeling decisions, and the engineering disciplines that separate systems that scale from systems that struggle." },
      { title: "The Guntur Advantage", body: "Why we chose to build Vir Technologies from Guntur, and what we believe the rise of tier-2 Indian tech cities means for the global technology services industry." }
    ],
    highlights: ["Agentic AI perspectives", "Cloud architecture insights", "Enterprise transformation thinking", "Startup engineering lessons", "India's emerging tech cities"],
    cta: "Subscribe for new perspectives"
  },
  "research": {
    headline: "Analyst Insights",
    subheadline: "Research and analysis on enterprise technology trends.",
    intro: "We analyze the market research, analyst reports, and industry data that matter most for enterprise technology decision-makers — and add our own practitioner perspective to help you separate signal from noise.",
    sections: [
      { title: "AI in the Enterprise: 2026 State of Play", body: "Agentic AI is moving from experimental to operational. Enterprises that have invested in data quality, API-first architecture, and AI governance frameworks are pulling ahead. The laggards are finding the gap harder to close." },
      { title: "Cloud Economics in a Cost-Conscious Era", body: "After years of cloud-first mandates, CFOs are scrutinizing cloud spend. FinOps discipline, workload right-sizing, and reserved capacity optimization are emerging as board-level topics." },
      { title: "The Cybersecurity Imperative", body: "With AI lowering the cost of sophisticated attacks, enterprise security programs need to evolve from compliance-driven to genuinely resilience-focused." }
    ],
    highlights: ["Agentic AI adoption trends", "Cloud economics & FinOps", "Cybersecurity landscape", "Enterprise digital transformation", "India IT services market"],
    cta: "Engage our research team"
  },
  "newsroom": {
    headline: "Newsroom",
    subheadline: "Latest announcements from Vir Technologies.",
    intro: "Stay up to date with the latest news from Vir Technologies — from company milestones and new client engagements to product launches and industry recognition.",
    sections: [
      { title: "June 2026 — Vir Technologies Founded", body: "Vir Technologies is officially incorporated in Guntur, Andhra Pradesh with a founding leadership team of six domain experts spanning AI, cloud, operations, finance, marketing, and technology research." },
      { title: "June 2026 — Services Portfolio Launched", body: "Vir Technologies announces its full suite of technology services: AI & Analytics, Cloud & Infrastructure, Cybersecurity, Engineering Services, Enterprise Applications, and Business Process Services." },
      { title: "Coming Up", body: "We are in active conversations with our first international clients and building partnerships with leading technology platforms. Watch this space for announcements." }
    ],
    highlights: ["Company founded — June 2026", "Full services portfolio launched", "First client engagements underway", "Leadership team assembled", "International partnerships in progress"],
    cta: "Contact our communications team"
  },
  "events": {
    headline: "Events",
    subheadline: "Meet the Vir Technologies team.",
    intro: "We believe in the power of in-person connection — with clients, partners, and the broader technology community. We are actively participating in industry events, tech meetups, and enterprise forums across India and virtually.",
    sections: [
      { title: "Industry Conferences", body: "Our leadership team participates in enterprise technology conferences focused on AI, cloud, and digital transformation. If you'll be attending an upcoming event and would like to connect, reach out in advance." },
      { title: "Community & Meetups", body: "We are active in the Andhra Pradesh and Telangana tech community — participating in engineering meetups, AI forums, and startup ecosystem events in Guntur, Vijayawada, and Hyderabad." },
      { title: "Virtual Events", body: "We host and participate in virtual roundtables, webinars, and online panels on enterprise technology topics. Subscribe to our newsletter to receive invitations." }
    ],
    highlights: ["Enterprise AI conferences", "Cloud & infrastructure summits", "AP/Telangana tech community", "Startup ecosystem events", "Virtual roundtables & webinars"],
    cta: "Connect with us at an event"
  },
  // ── LEGAL & CORPORATE ──
  "sustainability": {
    headline: "Sustainability",
    subheadline: "Engineering with responsibility — for business, for society, for the planet.",
    intro: "Sustainability is not a checkbox for Vir Technologies — it is a design principle. From the architecture decisions we make for clients to how we operate internally, we are committed to building a technology company that creates value responsibly.",
    sections: [
      { title: "Green Cloud Engineering", body: "We advise clients on cloud architecture choices that minimize energy consumption — right-sizing workloads, selecting low-carbon cloud regions, and retiring energy-intensive on-premises infrastructure." },
      { title: "AI for Sustainability", body: "We are actively developing AI use cases that help enterprises measure, manage, and reduce their environmental impact — from energy consumption monitoring to supply chain emissions tracking." },
      { title: "Our Own Commitment", body: "As a young company, we are building sustainability considerations into our operations from the start — remote-first work to minimize commuting, responsible technology procurement, and a commitment to publishing our own ESG metrics as we grow." }
    ],
    highlights: ["Green cloud architecture guidance", "ESG data & reporting solutions", "AI for emissions monitoring", "Responsible AI development", "Remote-first operations"],
    cta: "Explore sustainability services"
  },
  "corporate-citizenship": {
    headline: "Corporate Citizenship",
    subheadline: "Technology for good — in Guntur, across India, and beyond.",
    intro: "We believe technology companies have a responsibility to give back to the communities that nurture them. As a Guntur-based startup, we are committed to contributing to the development of the local tech ecosystem and creating opportunities for the next generation of engineers.",
    sections: [
      { title: "Tech Education Initiatives", body: "We are building programs to support computer science and AI education in Andhra Pradesh — through mentorship, internships, and partnerships with local engineering colleges." },
      { title: "Ecosystem Building", body: "We actively participate in the Guntur and Vijayawada startup ecosystem — sharing knowledge, mentoring early-stage founders, and helping position the region as an emerging technology hub." },
      { title: "Inclusive Hiring", body: "We are committed to building a diverse team that reflects the talent available across India — not just in metros. We actively recruit from engineering colleges in tier-2 and tier-3 cities." }
    ],
    highlights: ["Engineering college partnerships", "Internship programs", "Startup mentorship", "STEM outreach", "Inclusive & diverse hiring"],
    cta: "Partner with us on social initiatives"
  },
  "diversity": {
    headline: "Diversity & Inclusion",
    subheadline: "Building a team as diverse as the problems we solve.",
    intro: "Innovation thrives when diverse perspectives come together. We are committed to building a team that reflects the full spectrum of talent available in India and beyond — across gender, geography, background, and experience.",
    sections: [
      { title: "Our Commitment", body: "From day one, we have made conscious decisions to ensure our hiring process is inclusive, our compensation is equitable, and our culture is one where everyone has the opportunity to do their best work." },
      { title: "Geographic Inclusion", body: "We deliberately hire from tier-2 and tier-3 cities — rejecting the assumption that great engineers only come from metros. We believe Guntur, Vijayawada, and similar cities are full of untapped engineering talent." },
      { title: "Gender Diversity", body: "We are actively working to build a leadership team and workforce that includes more women in technology — through targeted recruiting, mentorship, and a culture of genuine inclusion." }
    ],
    highlights: ["Inclusive hiring practices", "Geographic diversity focus", "Women in tech initiatives", "Equal pay commitment", "Accessible remote work culture"],
    cta: "Join our diverse team"
  },
  "ethics-governance": {
    headline: "Ethics & Governance",
    subheadline: "Responsible AI development and transparent business conduct.",
    intro: "As a technology company building AI systems that affect real people and real enterprises, we take our ethical responsibilities seriously. Our approach to AI ethics, data governance, and corporate conduct is built on principles of transparency, fairness, accountability, and human oversight.",
    sections: [
      { title: "Responsible AI Principles", body: "We follow a set of responsible AI principles in every engagement: transparency in how AI decisions are made, fairness in training data and model design, human oversight for high-stakes decisions, and privacy by design." },
      { title: "Data Governance", body: "We help clients build data governance frameworks that ensure data quality, protect privacy, comply with regulations, and maintain the integrity of AI systems built on top." },
      { title: "Corporate Conduct", body: "We are committed to the highest standards of business ethics — transparent client relationships, fair employment practices, accurate and honest communication, and compliance with all applicable laws and regulations." }
    ],
    highlights: ["Responsible AI framework", "Data governance consulting", "Privacy by design", "Transparent client practices", "Regulatory compliance"],
    cta: "Read our governance principles"
  },
  // ── PARTNERSHIPS ──
  "partners": {
    headline: "Partners & Ecosystem",
    subheadline: "Building alliances that amplify outcomes for our clients.",
    intro: "We are actively building a partner ecosystem with leading technology platforms, cloud providers, and specialist firms whose capabilities complement our own. Our partnerships are chosen carefully — based on genuine technical alignment and shared client value, not just commercial arrangements.",
    sections: [
      { title: "Technology Platform Partners", body: "We work with the leading enterprise technology platforms — AWS, Azure, GCP, Salesforce, SAP, ServiceNow, and others — bringing certified expertise and co-delivery capability to client engagements." },
      { title: "Research & Innovation Partners", body: "We seek partnerships with universities, research institutions, and innovation labs to stay at the frontier of AI, quantum, and next-generation computing — and to bring those capabilities to our clients." },
      { title: "Become a Partner", body: "If you are a technology company, consultancy, or specialist firm that shares our commitment to engineering excellence and client outcomes, we'd welcome a conversation about how we might work together." }
    ],
    highlights: ["Cloud platform partnerships", "Enterprise software alliances", "Research & university collaborations", "SI and boutique firm alliances", "Open to new partner conversations"],
    cta: "Explore partnership opportunities"
  },
  "ecosystem": {
    headline: "Ecosystem",
    subheadline: "A network built for enterprise transformation at scale.",
    intro: "No single company can deliver every capability a modern enterprise needs. That's why we are building an ecosystem of technology partners, delivery alliances, and specialist collaborators who can extend our reach and depth when engagements demand it.",
    sections: [
      { title: "Delivery Alliances", body: "We partner with specialist boutiques and regional delivery firms to extend our geographic reach and deepen functional expertise in specific industries and platforms." },
      { title: "Technology Alliance Program", body: "We maintain technical certifications and co-sell arrangements with leading cloud and enterprise platform vendors — giving clients access to combined commercial value and deeper technical support." },
      { title: "Open Innovation", body: "We participate in open-source communities, developer ecosystems, and startup networks to stay connected with emerging technologies and identify innovative solutions for client challenges." }
    ],
    highlights: ["Delivery partner network", "Cloud vendor alliances", "ISV & platform partnerships", "Open source contributions", "Startup ecosystem engagement"],
    cta: "Join our ecosystem"
  },
  "innovation-labs": {
    headline: "Innovation Labs — Makers Lab",
    subheadline: "Where we build the future, before clients need it.",
    intro: "Our Makers Lab is the internal R&D engine of Vir Technologies — a dedicated space where our engineers explore emerging technologies, build proprietary frameworks, and develop the accelerators and platforms that give our client engagements a head start.",
    sections: [
      { title: "Agentic AI Research", body: "We are actively researching multi-agent AI architectures, tool-using LLMs, and autonomous workflow systems — building proprietary frameworks that reduce time-to-value for client AI deployments." },
      { title: "Cloud Accelerators", body: "Our engineers build internal accelerators for common cloud architecture patterns — infrastructure-as-code templates, deployment pipelines, and security baselines that compress delivery timelines for cloud engagements." },
      { title: "Open Exploration", body: "We dedicate a portion of engineering time to open-ended exploration of technologies that are not yet mainstream — quantum-safe cryptography, neuromorphic computing, and spatial AI among them." }
    ],
    highlights: ["Agentic AI framework development", "Cloud deployment accelerators", "Security architecture baselines", "Quantum & next-gen computing exploration", "Internal IP development"],
    cta: "Talk to our innovation team"
  },
  // ── LEGAL ──
  "privacy-policy": {
    headline: "Privacy Policy",
    subheadline: "How Vir Technologies collects, uses, and protects your data.",
    intro: "Your privacy matters to us. This policy explains what information we collect when you interact with Vir Technologies — through our website, our services, or direct communication — and how we use, store, and protect that information.",
    sections: [
      { title: "Information We Collect", body: "We collect information you provide directly (name, email, company, and the contents of enquiries you send us), information collected automatically when you visit our website (page views, browser type, and referral source via standard analytics tools), and information necessary to deliver our services to enterprise clients." },
      { title: "How We Use Your Information", body: "We use the information we collect to respond to enquiries, improve our website, deliver our services, and communicate relevant updates. We do not sell personal data to third parties. We do not use your data for advertising purposes." },
      { title: "Data Protection & Contact", body: "We take reasonable technical and organizational measures to protect the data we hold. If you have questions about our privacy practices or wish to request deletion of your data, please contact us at privacy@virtechnologies.in." }
    ],
    highlights: ["No data selling to third parties", "No advertising use of personal data", "Standard website analytics only", "Enterprise client data handled under separate DPA", "Contact: privacy@virtechnologies.in"],
    cta: "Contact us with privacy questions"
  },
  "cookie-policy": {
    headline: "Cookie Policy",
    subheadline: "How and why we use cookies on this website.",
    intro: "This website uses a small number of cookies to ensure the site functions correctly and to understand how visitors use it. We do not use advertising cookies or tracking cookies that follow you across the web.",
    sections: [
      { title: "Essential Cookies", body: "These cookies are required for the website to function — they enable navigation and access to secure areas. They cannot be disabled without affecting core site functionality." },
      { title: "Analytics Cookies", body: "We use privacy-respecting analytics tools to understand how visitors use our website — which pages are most visited, how users navigate, and where they come from. This data is aggregated and anonymous." },
      { title: "No Third-Party Advertising Cookies", body: "We do not place advertising cookies or allow third-party advertising networks to track visitors to our site. Your browsing behavior on virtechnologies.in stays here." }
    ],
    highlights: ["Essential functional cookies only", "Privacy-respecting analytics", "No advertising cookies", "No cross-site tracking", "Cookie settings available in your browser"],
    cta: "Contact us with cookie questions"
  },
  "terms-of-use": {
    headline: "Terms of Use",
    subheadline: "The terms governing your use of this website.",
    intro: "By using the Vir Technologies website, you agree to these terms. Please read them carefully. These terms apply to your use of virtechnologies.in and do not govern separate contractual arrangements for our technology services, which are subject to their own agreements.",
    sections: [
      { title: "Acceptable Use", body: "You may use this website for lawful purposes only. You may not use it to transmit harmful content, attempt to gain unauthorized access to any system, or engage in any activity that could damage the website or its users." },
      { title: "Intellectual Property", body: "All content on this website — text, design, graphics, and code — is the property of Vir Technologies or its licensors and is protected by applicable intellectual property laws. You may not reproduce or redistribute it without written permission." },
      { title: "Limitation of Liability", body: "The information on this website is provided in good faith and for general informational purposes only. Vir Technologies makes no warranties about the accuracy or completeness of this information and is not liable for any loss arising from reliance on it." }
    ],
    highlights: ["Lawful use only", "All IP owned by Vir Technologies", "No warranties on website content", "Governed by Indian law", "Disputes subject to Guntur jurisdiction"],
    cta: "Contact us with legal questions"
  },
  "accessibility": {
    headline: "Accessibility",
    subheadline: "A website designed to be usable by everyone.",
    intro: "Vir Technologies is committed to making this website accessible to all users, including those with disabilities. We are working toward conformance with the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.",
    sections: [
      { title: "Our Commitment", body: "We believe accessibility is not a compliance obligation — it is a design value. We aim to build a website that is perceivable, operable, understandable, and robust for all users." },
      { title: "Current Status", body: "This website is a newly launched product. We are aware that accessibility improvements can always be made and are actively reviewing and improving our implementation against WCAG 2.1 AA criteria." },
      { title: "Feedback & Contact", body: "If you encounter any accessibility barrier on this website, please contact us at accessibility@virtechnologies.in. We take all accessibility feedback seriously and aim to respond within five business days." }
    ],
    highlights: ["WCAG 2.1 AA target conformance", "Semantic HTML structure", "Keyboard navigation support", "Color contrast compliance", "Contact: accessibility@virtechnologies.in"],
    cta: "Send accessibility feedback"
  },
  "sitemap": {
    headline: "Sitemap",
    subheadline: "A complete overview of virtechnologies.in.",
    intro: "Use this page to find any section of the Vir Technologies website quickly. All major pages are listed below by category.",
    sections: [
      { title: "Company", body: "Home · About Us · Leadership · Careers · Investors · Contact Us · Newsroom · Privacy Policy · Cookie Policy · Terms of Use · Accessibility" },
      { title: "Capabilities", body: "Services Overview · Tech Consulting · AI & Analytics · Cloud & Infrastructure · Cybersecurity · Engineering Services · Network Services · Business Process Services · Experience Services · Enterprise Applications" },
      { title: "Industries", body: "Industries Overview · Banking & Financial Services · Insurance · Healthcare & Life Sciences · Communications · Manufacturing · Retail & Consumer Goods · Energy & Utilities · Travel & Transport · Hi-Tech · Aerospace & Defense" }
    ],
    highlights: ["All pages accessible from this sitemap", "Navigation also available in header", "Search coming soon", "Contact us if you can't find what you need"],
    cta: "Contact us if you can't find something"
  }
};

export function GenericPage() {
  const location = useLocation();
  const title = pathToTitle(location.pathname);
  const pathKey = location.pathname.split("/").pop() || "";
  const content = pageContent[pathKey];

  if (!content) {
    return (
      <div className="flex-1 flex flex-col">
        <section className="relative pt-24 pb-32 overflow-hidden border-b border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-teal/5 to-transparent pointer-events-none" />
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <div className="flex items-center gap-2 text-electric-teal font-medium mb-6">
                <span className="w-8 h-[2px] bg-electric-teal"></span>
                {location.pathname.split("/")[1]?.toUpperCase()}
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-text-primary">{title}</h1>
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                This page is coming soon. In the meantime, please{" "}
                <Link to="/contact" className="text-electric-teal hover:underline">contact us</Link> for any enquiries.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-teal/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMzIsIDEyOCwgMTQxLCAwLjA4KSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="flex items-center gap-2 text-electric-teal font-medium mb-6">
              <span className="w-8 h-[2px] bg-electric-teal"></span>
              {location.pathname.split("/")[1]?.toUpperCase()}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-text-primary">
              {content.headline}
            </h1>
            <p className="text-2xl text-electric-teal font-medium mb-6">{content.subheadline}</p>
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">{content.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              {content.sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-text-primary font-heading mb-4">{section.title}</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">{section.body}</p>
                  {idx < content.sections.length - 1 && <div className="mt-12 border-b border-gray-100"></div>}
                </motion.div>
              ))}
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-gray-50 border border-gray-200 rounded"
              >
                <h4 className="text-text-primary font-heading font-bold text-lg mb-6">Key Highlights</h4>
                <ul className="space-y-3">
                  {content.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-electric-teal mt-0.5 shrink-0" />
                      <span className="text-text-secondary text-sm leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 bg-electric-teal rounded"
              >
                <h4 className="text-white font-heading font-bold text-lg mb-3">Ready to get started?</h4>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">Engage our experts to explore how Vir Technologies can deliver outcomes for your enterprise.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-electric-teal hover:bg-white/90 px-5 py-3 rounded font-medium text-sm transition-colors"
                >
                  {content.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 border border-gray-200 rounded"
              >
                <h4 className="text-text-secondary text-sm font-medium uppercase tracking-wider mb-4">Explore More</h4>
                <div className="space-y-3">
                  <Link to="/services" className="group flex items-center gap-2 text-text-primary hover:text-electric-teal transition-colors text-sm font-medium">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> All Capabilities
                  </Link>
                  <Link to="/industries" className="group flex items-center gap-2 text-text-primary hover:text-electric-teal transition-colors text-sm font-medium">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> Industries We Serve
                  </Link>
                  <Link to="/about" className="group flex items-center gap-2 text-text-primary hover:text-electric-teal transition-colors text-sm font-medium">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> About Vir Technologies
                  </Link>
                  <Link to="/leadership" className="group flex items-center gap-2 text-text-primary hover:text-electric-teal transition-colors text-sm font-medium">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> Our Leadership Team
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-heading text-text-primary mb-6">
            Let's engineer something great together.
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you have a specific project in mind or just want to explore possibilities, our team is ready to listen and think alongside you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 bg-electric-teal hover:bg-electric-teal/90 text-white px-10 py-5 rounded font-bold uppercase tracking-wider transition-all hover:scale-105"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex justify-center items-center bg-transparent border border-gray-300 hover:border-electric-teal hover:bg-electric-teal/5 text-text-primary px-10 py-5 rounded font-bold uppercase tracking-wider transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}