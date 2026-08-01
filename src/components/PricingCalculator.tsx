import { useState } from 'react';
import { HelpCircle, Check, DollarSign, RefreshCw, Layers } from 'lucide-react';

export default function PricingCalculator() {
  const [poolSize, setPoolSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [hasSpa, setHasSpa] = useState<boolean>(false);
  const [frequency, setFrequency] = useState<'1x' | '2x'>('1x');

  // Calculate pricing based on Scottsdale market averages
  const calculatePrice = () => {
    let base = 149;
    if (poolSize === 'medium') base = 179;
    if (poolSize === 'large') base = 219;

    if (hasSpa) base += 30;

    let multiplier = 1.0;
    if (frequency === '2x') multiplier = 1.8;

    return Math.round(base * multiplier);
  };

  const estimatedPrice = calculatePrice();
  const weeklyRate = Math.round(estimatedPrice / 4.3);

  const sizeLabels = {
    small: { title: 'Play Pool (<15k Gal)', desc: 'Standard play-depth pools common in suburban estates.' },
    medium: { title: 'Estate Pool (15k-25k Gal)', desc: 'Standard diving pools, negative-edge, or custom rock slides.' },
    large: { title: 'Resort Estate (>25k Gal)', desc: 'High-volume deep water, double-negative edge, or lap channels.' }
  };

  return (
    <section id="pricing-calculator" className="bg-[#FAF8F5] border-b border-[#1A2421]/10 py-20 md:py-28 select-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="font-mono text-xs tracking-widest text-[#00828A] font-bold uppercase block">
            // High-Performance Pricing Transparency
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2421] leading-none uppercase tracking-tight">
            Transparent Pricing Estimator
          </h2>
          <p className="font-sans text-sm md:text-base text-[#1A2421]/70 leading-relaxed">
            Unlike traditional services that hide chemistry surcharges, we offer flat-rate pricing based on your pool's physical specifications. Adjust the parameters below to compute your estimated rate.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-[#1A2421]/15 bg-white shadow-[12px_12px_0px_0px_rgba(26,36,33,0.05)]">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 p-8 space-y-8 text-left">
            <h3 className="font-serif text-lg font-black uppercase text-[#1A2421] tracking-tight pb-4 border-b border-[#1A2421]/10 flex items-center gap-2">
              <Layers className="size-5 text-[#00828A]" />
              Step 1: Define Pool Specifications
            </h3>

            {/* 1. Pool Size Selectors */}
            <div className="space-y-3">
              <span className="font-sans text-[10px] tracking-widest text-[#1A2421]/60 uppercase font-semibold block">
                Pool Volume / Dimension
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setPoolSize(size)}
                    className={`p-4 border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                      poolSize === size
                        ? 'border-[#00828A] bg-[#00828A]/5 shadow-[0_0_0_1px_#00828A]'
                        : 'border-[#1A2421]/15 hover:border-[#1A2421]/30 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span className={`font-serif text-sm font-bold uppercase ${poolSize === size ? 'text-[#00828A]' : 'text-[#1A2421]'}`}>
                      {size === 'small' ? 'Small' : size === 'medium' ? 'Medium' : 'Large'}
                    </span>
                    <span className="font-sans text-[9px] text-[#1A2421]/60 mt-1 uppercase font-medium">
                      {size === 'small' ? '<15,000 Gal' : size === 'medium' ? '15,000 - 25,000 Gal' : '>25,000 Gal'}
                    </span>
                  </button>
                ))}
              </div>
              <p className="font-sans text-[11px] text-[#1A2421]/60 italic">
                {sizeLabels[poolSize].desc}
              </p>
            </div>

            {/* 2. Spa Inclusion Toggle */}
            <div className="space-y-3">
              <span className="font-sans text-[10px] tracking-widest text-[#1A2421]/60 uppercase font-semibold block">
                Spa / Hot Tub Attachment
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setHasSpa(false)}
                  className={`p-4 border text-center font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                    !hasSpa
                      ? 'border-[#00828A] bg-[#00828A]/5 shadow-[0_0_0_1px_#00828A] text-[#00828A]'
                      : 'border-[#1A2421]/15 hover:border-[#1A2421]/30 hover:bg-[#FAF8F5] text-[#1A2421]'
                  }`}
                >
                  No Attached Spa
                </button>
                <button
                  onClick={() => setHasSpa(true)}
                  className={`p-4 border text-center font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                    hasSpa
                      ? 'border-[#00828A] bg-[#00828A]/5 shadow-[0_0_0_1px_#00828A] text-[#00828A]'
                      : 'border-[#1A2421]/15 hover:border-[#1A2421]/30 hover:bg-[#FAF8F5] text-[#1A2421]'
                  }`}
                >
                  With Integrated Spa (+$30/mo)
                </button>
              </div>
            </div>

            {/* 3. Visit Frequency Selectors */}
            <div className="space-y-3">
              <span className="font-sans text-[10px] tracking-widest text-[#1A2421]/60 uppercase font-semibold block">
                Service Schedule Frequency
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setFrequency('1x')}
                  className={`p-4 border text-center font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                    frequency === '1x'
                      ? 'border-[#00828A] bg-[#00828A]/5 shadow-[0_0_0_1px_#00828A] text-[#00828A]'
                      : 'border-[#1A2421]/15 hover:border-[#1A2421]/30 hover:bg-[#FAF8F5] text-[#1A2421]'
                  }`}
                >
                  1x Weekly Visit (Standard)
                </button>
                <button
                  onClick={() => setFrequency('2x')}
                  className={`p-4 border text-center font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                    frequency === '2x'
                      ? 'border-[#00828A] bg-[#00828A]/5 shadow-[0_0_0_1px_#00828A] text-[#00828A]'
                      : 'border-[#1A2421]/15 hover:border-[#1A2421]/30 hover:bg-[#FAF8F5] text-[#1A2421]'
                  }`}
                >
                  2x Weekly Visits (Villas & High Use)
                </button>
              </div>
            </div>

          </div>

          {/* Pricing Quote Column */}
          <div className="lg:col-span-5 bg-[#1A2421] text-[#FAF8F5] p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1A2421]/10 text-left relative">
            <div className="absolute top-0 right-0 h-1 bg-gradient-to-r from-[#00828A] to-[#EBB042] left-0 lg:hidden"></div>
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#00828A] to-[#EBB042] max-lg:hidden"></div>

            <div className="space-y-6">
              <span className="font-mono text-[9px] tracking-widest text-[#EBB042] font-bold uppercase block">
                // Computed Pricing Quotation
              </span>

              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-5xl font-black text-white">${estimatedPrice}</span>
                  <span className="font-sans text-xs text-[#FAF8F5]/60 uppercase tracking-widest">/ Month</span>
                </div>
                <p className="font-mono text-[10px] text-[#FAF8F5]/60 tracking-wider">
                  Equates to approx. ${weeklyRate} per weekly service visit.
                </p>
              </div>

              {/* Inclusions Check list */}
              <div className="space-y-3 pt-6 border-t border-[#FAF8F5]/10">
                <span className="font-mono text-[9px] tracking-widest text-[#00828A] font-bold uppercase block">
                  Included In Weekly Rate
                </span>
                <ul className="space-y-2">
                  {[
                    'All Standard Chemicals Included (Chlorine, Shock, Tabs, Acid)',
                    'Full LSI Index Water Chemistry Diagnostics',
                    'Brush, Skim, Vacuum & Mechanical Visual Inspections',
                    'Same-Day Premium Digital Report with Photos',
                    'No Long-Term Contracts (Cancel Anytime)',
                    'Zero Hidden Fees or Summer Surcharges'
                  ].map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-sans text-xs text-[#FAF8F5]/90">
                      <div className="size-3.5 border border-[#00828A] text-[#00828A] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-2 text-[#00828A] stroke-[3]" />
                      </div>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 space-y-3">
              <a
                href="#hero-cinematic-section"
                onClick={() => {
                  const formElement = document.getElementById('hero-cinematic-section');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                      const nameInput = document.getElementById('name');
                      if (nameInput) nameInput.focus();
                    }, 800);
                  }
                }}
                className="w-full bg-[#00828A] hover:bg-[#00828A]/80 text-[#FAF8F5] py-4 text-center font-sans text-xs tracking-widest font-bold uppercase transition-colors block select-none cursor-pointer"
              >
                Secure This Rate & Schedule
              </a>
              <span className="font-sans text-[10px] tracking-widest text-[#FAF8F5]/50 uppercase block text-center font-medium">
                Flat rates locked for initial 12 months.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
