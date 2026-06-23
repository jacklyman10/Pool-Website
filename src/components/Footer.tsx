import { Phone, Mail, MapPin, ShieldCheck, Droplet, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0D1512] text-[#FAF8F5]/90 border-t border-[#FAF8F5]/10 pt-16 pb-12 select-text text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Top Segment: Logo & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo segment */}
          <div className="md:col-span-5 space-y-4">
            <a
              id="footer-logo-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTop();
              }}
              className="flex items-center gap-3 group w-fit"
            >
              <div className="size-10 bg-[#00828A] flex items-center justify-center text-[#FAF8F5] transition-transform duration-500 group-hover:scale-105 border border-white/20">
                <Droplet className="size-5 fill-current text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl tracking-[0.2em] font-bold text-white leading-none uppercase">
                  Scottsdale
                </span>
                <span className="font-sans text-[10px] tracking-[0.3em] font-medium text-white/70 uppercase mt-1">
                  Pool Club
                </span>
              </div>
            </a>
            <p className="font-sans text-xs text-[#FAF8F5]/60 max-w-sm leading-relaxed">
              Boutique, surgical-grade water engineering and maintenance for Scottsdale’s premier architectural estates. 
              We preserve quartz plaster, protect travertine tile borders, and guarantee 99.8% balanced water purity year-round.
            </p>
          </div>

          {/* Quick links & Service details */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-xs font-black tracking-widest text-[#00828A] uppercase">// Service Areas</h4>
            <ul className="font-sans text-xs space-y-2 text-[#FAF8F5]/70">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#00828A]"></span> Silverleaf & DC Ranch
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#00828A]"></span> Paradise Valley & PV Est.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#00828A]"></span> Troon & Troon North
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#00828A]"></span> Desert Mountain & Estancia
              </li>
            </ul>
          </div>

          {/* Contact Methods */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-xs font-black tracking-widest text-[#EBB042] uppercase">// Schedule Detailing</h4>
            <div className="space-y-3">
              <a
                id="footer-phone"
                href="tel:4805550190"
                className="flex items-center gap-2 font-mono text-sm font-semibold text-[#FAF8F5] hover:text-[#00828A] transition-colors"
              >
                <Phone className="size-4 text-[#00828A]" />
                (480) 555-0190
              </a>
              <a
                id="footer-email"
                href="mailto:detailing@scottsdalepool.club"
                className="flex items-center gap-2 font-mono text-xs text-[#FAF8F5]/80 hover:text-[#00828A] transition-colors"
              >
                <Mail className="size-4 text-[#00828A]" />
                detailing@scottsdalepool.club
              </a>
              <div className="flex items-start gap-2 font-sans text-xs text-[#FAF8F5]/60 pt-1 leading-relaxed">
                <MapPin className="size-4 text-[#EBB042] shrink-0 mt-0.5" />
                <span>10440 N 90th St, Scottsdale, AZ 85258</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Segment: Credentials Banner */}
        <div className="py-6 border-y border-[#FAF8F5]/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-[#FAF8F5]/70">
            <span className="font-sans text-[11px] font-bold tracking-wider flex items-center gap-1.5 uppercase text-white">
              <ShieldCheck className="size-4 text-[#00828A]" />
              AZ ROC License #394201
            </span>
            <span className="font-sans text-[11px] font-bold tracking-wider flex items-center gap-1.5 uppercase text-white">
              <ShieldCheck className="size-4 text-[#00828A]" />
              Certified Pool Operator® #684291
            </span>
            <span className="font-sans text-[11px] font-bold tracking-wider flex items-center gap-1.5 uppercase text-white">
              <ShieldCheck className="size-4 text-[#00828A]" />
              $2M General Liability Policy
            </span>
          </div>
          
          <button
            id="back-to-top-footer-btn"
            onClick={handleScrollTop}
            className="group flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase font-bold text-[#FAF8F5]/60 hover:text-[#FAF8F5] transition-colors cursor-pointer border border-[#FAF8F5]/10 px-4 py-2"
          >
            Back to Top
            <ArrowUp className="size-3 text-[#00828A] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Segment: Copyright & Terms */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[10px] text-[#FAF8F5]/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Scottsdale Pool Club LLC. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Care</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-white transition-colors">Water Stewardship Standards</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
