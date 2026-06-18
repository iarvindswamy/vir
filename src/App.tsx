

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Insights } from "./pages/Insights";
import { GenericPage } from "./pages/GenericPage";
import { Leadership } from "./pages/Leadership";
import { LeadershipProfile } from "./pages/LeadershipProfile";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* TIER 1: CORE / MANDATORY PAGES */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="leadership/:id" element={<LeadershipProfile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<GenericPage />} />
          <Route path="investors" element={<GenericPage />} />

          {/* TIER 2: CAPABILITIES & SERVICES */}
          <Route path="services" element={<Services />} />
          <Route path="services/consulting" element={<GenericPage />} />
          <Route path="services/ai-analytics" element={<GenericPage />} />
          <Route path="services/cloud" element={<GenericPage />} />
          <Route path="services/engineering" element={<GenericPage />} />
          <Route path="services/network" element={<GenericPage />} />
          <Route path="services/bpo" element={<GenericPage />} />
          <Route path="services/enterprise-apps" element={<GenericPage />} />
          <Route path="services/cybersecurity" element={<GenericPage />} />
          <Route path="services/cx-ux" element={<GenericPage />} />

          {/* TIER 3: INDUSTRIES */}
          <Route path="industries" element={<Industries />} />
          <Route path="industries/banking-financial" element={<GenericPage />} />
          <Route path="industries/insurance" element={<GenericPage />} />
          <Route path="industries/healthcare" element={<GenericPage />} />
          <Route path="industries/communications" element={<GenericPage />} />
          <Route path="industries/manufacturing" element={<GenericPage />} />
          <Route path="industries/retail" element={<GenericPage />} />
          <Route path="industries/energy-utilities" element={<GenericPage />} />
          <Route path="industries/travel-transport" element={<GenericPage />} />
          <Route path="industries/hi-tech" element={<GenericPage />} />
          <Route path="industries/aerospace-defense" element={<GenericPage />} />

          {/* TIER 4: INSIGHTS & THOUGHT LEADERSHIP */}
          <Route path="insights" element={<Insights />} />
          <Route path="press-releases" element={<GenericPage />} />
          <Route path="newsroom" element={<GenericPage />} />
          <Route path="blogs" element={<GenericPage />} />
          <Route path="research" element={<GenericPage />} />
          <Route path="case-studies" element={<GenericPage />} />
          <Route path="events" element={<GenericPage />} />

          {/* TIER 5: SUSTAINABILITY & CORPORATE CITIZENSHIP */}
          <Route path="sustainability" element={<GenericPage />} />
          <Route path="corporate-citizenship" element={<GenericPage />} />
          <Route path="diversity" element={<GenericPage />} />
          <Route path="ethics-governance" element={<GenericPage />} />

          {/* TIER 6: PARTNERSHIPS & ECOSYSTEM */}
          <Route path="partners" element={<GenericPage />} />
          <Route path="ecosystem" element={<GenericPage />} />
          <Route path="innovation-labs" element={<GenericPage />} />

          {/* TIER 7: LEGAL & UTILITIES */}
          <Route path="privacy-policy" element={<GenericPage />} />
          <Route path="cookie-policy" element={<GenericPage />} />
          <Route path="terms-of-use" element={<GenericPage />} />
          <Route path="accessibility" element={<GenericPage />} />
          <Route path="sitemap" element={<GenericPage />} />
          
          {/* 404 CATCH-ALL */}
          <Route path="*" element={<GenericPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}