import { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import ServiceReportPreview from './components/ServiceReportPreview';
import ServicesBento from './components/ServicesBento';
import ReviewWall from './components/ReviewWall';
import Footer from './components/Footer';
import PromiseSection from './components/PromiseSection';
import CoverageChecker from './components/CoverageChecker';
import PortalModal from './components/PortalModal';
import PricingCalculator from './components/PricingCalculator';
import { Sparkles, X, ChevronRight, Droplet } from 'lucide-react';

export default function App() {
  const formRef = useRef<HTMLDivElement>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');
  const [showPortal, setShowPortal] = useState(false);

  // Handle header CTA click by smoothly scrolling down to the embedded lead form
  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Flash input borders to draw attention
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        if (nameInput) {
          nameInput.focus();
          nameInput.classList.add('border-[#00828A]');
          setTimeout(() => nameInput.classList.remove('border-[#00828A]'), 1500);
        }
      }, 800);
    }
  };

  // Monitor localStorage to notify user when a simulated lead is recorded
  useEffect(() => {
    const handleStorageChange = () => {
      const leads = JSON.parse(localStorage.getItem('pool_leads') || '[]');
      if (leads.length > 0) {
        const latest = leads[leads.length - 1];
        setNotificationMsg(`Priority callback scheduled for ${latest.name} in ZIP ${latest.zipCode}!`);
        setShowNotification(true);
        
        // Auto hide notification
        const timer = setTimeout(() => setShowNotification(false), 5000);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    // Polling backup because window doesn't capture storage on the same tab automatically
    const interval = setInterval(() => {
      const leads = JSON.parse(localStorage.getItem('pool_leads') || '[]');
      const lastNotifiedId = localStorage.getItem('last_notified_lead_id');
      if (leads.length > 0) {
        const latest = leads[leads.length - 1];
        if (latest.id !== lastNotifiedId) {
          localStorage.setItem('last_notified_lead_id', latest.id);
          setNotificationMsg(`Priority callback scheduled for ${latest.name} in ZIP ${latest.zipCode}!`);
          setShowNotification(true);
        }
      }
    }, 3000);


    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="scottsdale-pool-club-app" className="min-h-screen bg-[#FAF8F5] text-[#1A2421] selection:bg-[#00828A] selection:text-[#FAF8F5] flex flex-col font-sans antialiased overflow-x-hidden">
      
      {/* Floating Lead Submission Toast (Sharp corners, elegant matching look) */}
      {showNotification && (
        <div
          id="toast-notification"
          className="fixed bottom-6 right-6 z-50 bg-[#1A2421] text-[#FAF8F5] border border-white/20 p-5 shadow-2xl max-w-sm flex items-start gap-4 animate-fade-in-up rounded-none"
        >
          <div className="size-8 bg-[#00828A] flex items-center justify-center shrink-0">
            <Droplet className="size-4 fill-current text-[#FAF8F5]" />
          </div>
          <div className="space-y-1 text-left flex-1">
            <span className="font-mono text-[9px] tracking-widest text-[#EBB042] font-semibold uppercase block">
              // Live System Alert
            </span>
            <p className="font-sans text-xs leading-relaxed text-[#FAF8F5]/90 font-medium">
              {notificationMsg}
            </p>
            <p className="font-sans text-[10px] text-[#FAF8F5]/60">
              An expert will call under 15 minutes.
            </p>
          </div>
          <button
            onClick={() => setShowNotification(false)}
            className="text-[#FAF8F5]/50 hover:text-white transition-colors shrink-0"
          >
            <X className="size-4" />
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Header onQuoteClick={handleScrollToForm} onPortalClick={() => setShowPortal(true)} />

      {/* Main Content Sections */}
      <main id="main-content-flow" className="flex-1 flex flex-col">
        {/* Cinematic Golden Hour Hero & Form */}
        <Hero formRef={formRef} />

        {/* NSPF/Chamber Trust badges */}
        <TrustBadges />

        {/* Triple Protection Named Guarantees */}
        <PromiseSection />

        {/* Custom Service Report Card & Slide-to-Clarity Visualizer */}
        <ServiceReportPreview />

        {/* Hyper-Local Neighborhood Coverage Checker */}
        <CoverageChecker />

        {/* Transparent Pricing Estimator */}
        <PricingCalculator />

        {/* Boutique Services Catalog */}
        <ServicesBento />

        {/* Review Wall from luxury districts */}
        <ReviewWall />
      </main>

      {/* Fully Compliant Footer with ROC & Credentials */}
      <Footer />

      {/* Client Portal Overlay Modal */}
      {showPortal && <PortalModal onClose={() => setShowPortal(false)} />}
    </div>
  );
}
