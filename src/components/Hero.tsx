import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, CheckCircle, ArrowRight, Star, Shield, HelpCircle } from 'lucide-react';
import { Lead } from '../types';

interface HeroProps {
  formRef: React.RefObject<HTMLDivElement | null>;
}

export default function Hero({ formRef }: HeroProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    poolType: 'saltwater' as Lead['poolType'],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<Partial<Lead> | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API call
    setTimeout(() => {
      const newLead: Lead = {
        id: `lead_${Math.random().toString(36).substr(2, 9)}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        zipCode: formData.zipCode,
        poolType: formData.poolType,
        message: formData.message,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      // Store in local storage for real-time persistence
      const existingLeads = JSON.parse(localStorage.getItem('pool_leads') || '[]');
      existingLeads.push(newLead);
      localStorage.setItem('pool_leads', JSON.stringify(existingLeads));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSubmittedLead(newLead);
    }, 1500);
  };

  return (
    <section
      id="hero-cinematic-section"
      className="relative min-h-screen flex items-center justify-center bg-[#0D1512] overflow-hidden pt-20 md:pt-0"
    >
      {/* Background Image with Cinematic Golden Hour Filter */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2400&q=90"
          alt="Luxury Swimming Pool in Scottsdale at Golden Hour"
          className="w-full h-full object-cover select-none object-center opacity-70 scale-105 transition-transform duration-[10000ms] ease-out"
          style={{ transform: 'scale(1.03)' }}
        />
        {/* Dark cinematic gradient wash: left-to-right on desktop, bottom-up on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1512]/95 via-[#0D1512]/60 to-transparent max-md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1512] via-[#0D1512]/80 to-[#0D1512]/40 md:hidden" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-80px)] py-12">
        {/* Left Side: Confident Headline & Slogans */}
        <div className="lg:col-span-7 text-[#FAF8F5] flex flex-col justify-center space-y-6 md:space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 border border-[#FAF8F5]/20 bg-[#FAF8F5]/10 px-4 py-2 text-xs font-mono tracking-widest uppercase w-fit rounded-none backdrop-blur-sm">
            <span className="inline-block w-2 h-2 bg-[#00828A]"></span>
            Scottsdale's Architectural Pool Service
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-left">
            The Gold Standard <br className="hidden sm:inline" />
            of <span className="text-[#00828A]">Pure Water</span>.
          </h1>

          <p className="font-sans text-base md:text-lg text-[#FAF8F5]/90 max-w-2xl leading-relaxed text-left">
            Weekly boutique maintenance curated for Scottsdale’s premier residences. 
            We regulate water chemistry to surgical levels (<strong className="font-semibold text-[#00828A]">99.8% Water Purity</strong>) 
            and transmit detailed digital reports directly to your phone. No bubbles. No shortcuts. Just pristine travertine, glowing tiles, and crystal-clear turquoise.
          </p>

          {/* Luxury Highlights without Capsules/Balloons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left border-t border-[#FAF8F5]/10">
            <div className="flex flex-col">
              <span className="font-sans text-[10px] tracking-widest text-[#FAF8F5]/65 uppercase font-medium">Water Purity</span>
              <span className="font-serif text-lg md:text-xl font-bold text-[#00828A] mt-1">99.8% Perfect Balance</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] tracking-widest text-[#FAF8F5]/65 uppercase font-medium">Technicians</span>
              <span className="font-serif text-lg md:text-xl font-bold text-[#FAF8F5] mt-1">100% Certified CPO®</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[10px] tracking-widest text-[#FAF8F5]/65 uppercase font-medium">Reporting</span>
              <span className="font-serif text-lg md:text-xl font-bold text-[#EBB042] mt-1">Same-Day Digital Log</span>
            </div>
          </div>

          {/* Quick CTA Actions under text */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              id="hero-phone-cta-btn"
              href="tel:4805550190"
              className="flex items-center justify-center gap-3 bg-transparent hover:bg-[#FAF8F5]/10 border-2 border-[#FAF8F5] text-[#FAF8F5] font-mono text-sm tracking-wider font-semibold py-4 px-6 transition-all duration-300 rounded-none uppercase"
            >
              <Phone className="size-4 text-[#00828A]" />
              (480) 555-0190
            </a>
            <a
              id="hero-scroll-trigger"
              href="#services"
              className="group flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-sans text-[#FAF8F5]/80 hover:text-[#FAF8F5] transition-colors py-4 font-bold"
            >
              Explore Services
              <ArrowRight className="size-4 text-[#00828A] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Side: Embedded Premium Quote Form */}
        <div ref={formRef} className="lg:col-span-5 w-full max-w-md mx-auto z-10">
          <div className="bg-[#FAF8F5] border border-[#1A2421]/15 p-6 md:p-8 rounded-none shadow-[24px_24px_0px_0px_rgba(13,21,18,0.3)] select-text relative">
            <div className="absolute top-0 right-0 h-1 bg-gradient-to-r from-[#00828A] to-[#EBB042] left-0"></div>
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.div
                  key="form-fields"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="text-left">
                    <h2 className="font-serif text-2xl font-black text-[#1A2421] tracking-tight uppercase">
                      Request Perfection
                    </h2>
                    <p className="font-sans text-xs text-[#1A2421]/70 mt-1">
                      Schedule a complimentary water analysis & service evaluation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="flex flex-col text-left">
                      <label htmlFor="name" className="font-sans text-[10px] tracking-widest text-[#1A2421]/60 uppercase font-semibold mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="E.g., Sterling Troon"
                        className="bg-transparent border border-[#1A2421]/15 px-3 py-3 font-sans text-sm focus:outline-none focus:border-[#00828A] text-[#1A2421] rounded-none placeholder:text-[#1A2421]/30 w-full"
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col text-left">
                        <label htmlFor="phone" className="font-sans text-[10px] tracking-widest text-[#1A2421]/60 uppercase font-semibold mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(480) 555-0100"
                          className="bg-transparent border border-[#1A2421]/15 px-3 py-3 font-sans text-sm focus:outline-none focus:border-[#00828A] text-[#1A2421] rounded-none placeholder:text-[#1A2421]/30 w-full"
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <label htmlFor="email" className="font-sans text-[10px] tracking-widest text-[#1A2421]/60 uppercase font-semibold mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="sterling@example.com"
                          className="bg-transparent border border-[#1A2421]/15 px-3 py-3 font-sans text-sm focus:outline-none focus:border-[#00828A] text-[#1A2421] rounded-none placeholder:text-[#1A2421]/30 w-full"
                        />
                      </div>
                    </div>

                    {/* ZIP and Pool Type Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col text-left">
                        <label htmlFor="zipCode" className="font-sans text-[10px] tracking-widest text-[#1A2421]/60 uppercase font-semibold mb-1">
                          Scottsdale Zip Code
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          required
                          maxLength={5}
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="E.g., 85255"
                          className="bg-transparent border border-[#1A2421]/15 px-3 py-3 font-sans text-sm focus:outline-none focus:border-[#00828A] text-[#1A2421] rounded-none placeholder:text-[#1A2421]/30 w-full"
                        />
                      </div>
                      <div className="flex flex-col text-left">
                        <label htmlFor="poolType" className="font-sans text-[10px] tracking-widest text-[#1A2421]/60 uppercase font-semibold mb-1">
                          Water Sanitizer
                        </label>
                        <select
                          id="poolType"
                          name="poolType"
                          value={formData.poolType}
                          onChange={handleInputChange}
                          className="bg-[#FAF8F5] border border-[#1A2421]/15 px-3 py-3 font-sans text-sm focus:outline-none focus:border-[#00828A] text-[#1A2421] rounded-none w-full cursor-pointer appearance-none"
                        >
                          <option value="saltwater">Saltwater Cell</option>
                          <option value="chlorine">Chlorine / Ozone</option>
                          <option value="ozone">UV / Ozone Pure</option>
                          <option value="commercial">Commercial/Resort</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      id="hero-submit-quote-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1A2421] hover:bg-[#00828A] text-[#FAF8F5] py-4 font-sans text-xs tracking-widest font-bold uppercase transition-colors select-none cursor-pointer flex items-center justify-center gap-2 mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin inline-block w-4 h-4 border-2 border-[#FAF8F5]/30 border-t-[#FAF8F5] rounded-none"></span>
                          Securing Schedule...
                        </>
                      ) : (
                        'Request Free Valuation'
                      )}
                    </button>
                  </form>

                  <div className="flex items-center justify-center gap-6 pt-4 border-t border-[#1A2421]/10 text-[#1A2421]/60">
                    <span className="flex items-center gap-1.5 font-sans text-[10px] tracking-wider uppercase font-medium">
                      <Shield className="size-3 text-[#00828A]" />
                      Licensed & Insured
                    </span>
                    <span className="flex items-center gap-1.5 font-sans text-[10px] tracking-wider uppercase font-medium">
                      <Star className="size-3 text-[#EBB042] fill-current" />
                      Scottsdale Rated 5.0
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="mx-auto size-16 bg-[#00828A]/10 border border-[#00828A]/30 flex items-center justify-center text-[#00828A]">
                    <CheckCircle className="size-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-black text-[#1A2421] tracking-tight uppercase">
                      Reservation Secured
                    </h3>
                    <p className="font-sans text-sm text-[#1A2421]/80 max-w-sm mx-auto">
                      Thank you, <strong className="font-semibold">{submittedLead?.name}</strong>. Your luxury water analysis has been locked into our system.
                    </p>
                  </div>

                  {/* Summary Receipt details */}
                  <div className="bg-[#ECE7E1]/50 border border-[#1A2421]/10 p-4 text-left font-sans text-xs space-y-2 max-w-xs mx-auto">
                    <p className="text-[#1A2421]/70">
                      <strong>Status:</strong> <span className="text-[#00828A] font-semibold">Priority Booking</span>
                    </p>
                    <p className="text-[#1A2421]/70">
                      <strong>Assigned Area:</strong> Scottsdale / Zip {submittedLead?.zipCode}
                    </p>
                    <p className="text-[#1A2421]/70">
                      <strong>Est. Callback:</strong> Under 15 Minutes
                    </p>
                    <p className="text-[#1A2421]/70">
                      <strong>Lead ID:</strong> <span className="font-mono text-[10px]">{submittedLead?.id}</span>
                    </p>
                  </div>

                  <p className="font-sans text-xs text-[#1A2421]/60">
                    A representative is reviewing your request. For immediate assistance, call <a href="tel:4805550190" className="text-[#00828A] font-semibold underline font-mono">(480) 555-0190</a>.
                  </p>

                  <button
                    id="success-reset-btn"
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        zipCode: '',
                        poolType: 'saltwater',
                        message: ''
                      });
                    }}
                    className="text-[#1A2421]/60 hover:text-[#00828A] font-sans text-[10px] tracking-widest uppercase font-bold underline"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
