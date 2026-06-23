import { Phone, Droplet, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  onQuoteClick: () => void;
}

export default function Header({ onQuoteClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-4 border-[#1A2421]/10'
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo-link"
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="size-10 bg-[#00828A] flex items-center justify-center text-[#FAF8F5] transition-transform duration-500 group-hover:scale-105 border border-[#1A2421]/20">
            <Droplet className="size-5 fill-current text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl tracking-[0.2em] font-bold text-[#1A2421] leading-none uppercase">
              Scottsdale
            </span>
            <span className="font-sans text-[10px] tracking-[0.3em] font-medium text-[#1A2421]/70 uppercase mt-1">
              Pool Club
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-navbar" className="hidden md:flex items-center gap-8">
          <a
            id="nav-link-services"
            href="#services"
            className="font-sans text-xs tracking-widest text-[#1A2421]/80 hover:text-[#00828A] transition-colors uppercase font-medium"
          >
            Boutique Services
          </a>
          <a
            id="nav-link-reports"
            href="#reports"
            className="font-sans text-xs tracking-widest text-[#1A2421]/80 hover:text-[#00828A] transition-colors uppercase font-medium"
          >
            Digital Reports
          </a>
          <a
            id="nav-link-reviews"
            href="#reviews"
            className="font-sans text-xs tracking-widest text-[#1A2421]/80 hover:text-[#00828A] transition-colors uppercase font-medium"
          >
            Review Wall
          </a>
        </nav>

        {/* Phone & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            id="header-phone-link"
            href="tel:4805550190"
            className="flex items-center gap-2 font-mono text-xs tracking-wider text-[#1A2421] hover:text-[#00828A] transition-colors font-medium border border-[#1A2421]/10 px-4 py-2"
          >
            <Phone className="size-3 text-[#00828A]" />
            (480) 555-0190
          </a>
          <button
            id="header-quote-cta-btn"
            onClick={onQuoteClick}
            className="bg-[#1A2421] hover:bg-[#00828A] text-[#FAF8F5] font-sans text-xs tracking-widest font-semibold px-5 py-3 transition-colors uppercase cursor-pointer"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <a
            id="mobile-phone-shortcut"
            href="tel:4805550190"
            className="flex items-center justify-center size-9 border border-[#1A2421]/15 text-[#1A2421] hover:text-[#00828A]"
          >
            <Phone className="size-4" />
          </a>
          <button
            id="mobile-menu-trigger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#1A2421] hover:text-[#00828A] transition-colors"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden fixed top-[81px] inset-x-0 bottom-0 bg-[#FAF8F5] border-t border-[#1A2421]/10 flex flex-col p-8 z-40 animate-fade-in"
        >
          <div className="flex flex-col gap-6 text-center mt-6">
            <a
              id="mobile-nav-link-services"
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl tracking-wider text-[#1A2421] hover:text-[#00828A] transition-colors py-2 uppercase"
            >
              Boutique Services
            </a>
            <a
              id="mobile-nav-link-reports"
              href="#reports"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl tracking-wider text-[#1A2421] hover:text-[#00828A] transition-colors py-2 uppercase"
            >
              Digital Reports
            </a>
            <a
              id="mobile-nav-link-reviews"
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl tracking-wider text-[#1A2421] hover:text-[#00828A] transition-colors py-2 uppercase"
            >
              Review Wall
            </a>
          </div>

          <div className="mt-auto flex flex-col gap-4 border-t border-[#1A2421]/10 pt-8">
            <a
              id="mobile-nav-phone-btn"
              href="tel:4805550190"
              className="flex items-center justify-center gap-3 font-mono text-sm tracking-wider text-[#1A2421] border border-[#1A2421]/20 py-4 font-semibold uppercase"
            >
              <Phone className="size-4 text-[#00828A]" />
              (480) 555-0190
            </a>
            <button
              id="mobile-nav-quote-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="bg-[#1A2421] hover:bg-[#00828A] text-[#FAF8F5] py-4 text-center font-sans text-xs tracking-widest font-bold uppercase transition-colors"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
