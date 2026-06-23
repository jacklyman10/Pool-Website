import { Shield, Settings, Zap, Award, CheckSquare, Sparkles } from 'lucide-react';
import { ServiceCategory } from '../types';

export default function ServicesBento() {
  const services: ServiceCategory[] = [
    {
      id: 'weekly',
      title: 'Boutique Weekly Maintenance',
      tagline: 'Zero Stress. Zero Cloudiness.',
      description: 'The foundation of elite pool health. Includes detailed on-site testing of 6 chemistry parameters, surface skimming, wall brushing, vacuuming, skimmer basket cleaning, and same-day digital reports showing your exact metrics.',
      highlightText: '99.8% Water Purity Logged Weekly',
      features: [
        'Detailed chemical adjustment (acid, stabilizer, sanitizer)',
        'Full physical surface skim and tile scrubbing',
        'Same-day emailed report with photo proof',
        'Debris vacuuming & basket clean-outs'
      ]
    },
    {
      id: 'acid_wash',
      title: 'Acid Wash & Tile Scale Removal',
      tagline: 'Restore Your Deep Turquoise Luster.',
      description: 'Hard water scale from Scottsdale wells ruins glass tile and quartz tile liners. Our precision acid wash dissolves mineral buildup, restoring the deep, shimmering cobalt-teal luster of your PebbleTec surface safely.',
      highlightText: 'Removes 100% of Calcium Scale',
      features: [
        'Tile scrubbing & scale blasting',
        'Controlled PebbleTec acid washing',
        'Copper/Iron stain treatment and removal',
        'Algae stain bleaching & power skimming'
      ]
    },
    {
      id: 'equipment',
      title: 'Thermodynamics & Smart Automation',
      tagline: 'High-Efficiency Mechanical Care.',
      description: 'Upgrade to high-performance Pentair variable speed pumps to cut power bills by up to 70%. We convert pools to modern Saltwater Chlorinators or Ozone sanitation cells, and program wireless automation timers for mobile controls.',
      highlightText: 'Saves Up To 70% Energy Consumption',
      features: [
        'Premium variable-speed pump installation',
        'Saltwater chlorinator conversions',
        'Ozone & UV sanitizer cell maintenance',
        'Wireless automation & phone setup (Pentair/Jandy)'
      ]
    },
    {
      id: 'commercial',
      title: 'Boutique Villa & High-Volume Care',
      tagline: 'Elite standards for luxury stays.',
      description: 'For short-term luxury rentals and boutique resort villas. Includes multi-visit weekly packages, specialized storm cleanups, and chemical stabilization tailored for high-occupancy environments, protecting guest satisfaction.',
      highlightText: 'Same-Day Storm Cleanup Responses',
      features: [
        'Twice-weekly visits to match guest turns',
        'Urgent callout response under 4 hours',
        'High-load chlorine stabilization',
        'Detailed equipment safeguards for liability'
      ]
    }
  ];

  return (
    <section id="services" className="bg-[#FAF8F5] border-b border-[#1A2421]/10 py-20 md:py-28 select-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="font-mono text-xs tracking-widest text-[#00828A] font-bold uppercase block">
            // Full-Service Pool Engineering
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2421] leading-none uppercase tracking-tight">
            Our Boutique Offerings
          </h2>
          <p className="font-sans text-sm md:text-base text-[#1A2421]/70 leading-relaxed">
            We do not rush. We do not skip tiles. We treat your pool as a highly sophisticated piece of architecture. 
            From chemistry balancing to mechanical upgrades, explore our certified services.
          </p>
        </div>

        {/* Bento Grid - Sharp borders, no rounded corners, no bubbles/balloons for highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-white border border-[#1A2421]/15 p-8 flex flex-col justify-between space-y-6 text-left group hover:shadow-[12px_12px_0px_0px_rgba(26,36,33,0.08)] hover:border-[#00828A]/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-widest text-[#00828A] font-bold uppercase">
                    // SERVICE TYPE: {svc.id.toUpperCase()}
                  </span>
                  <Sparkles className="size-4 text-[#EBB042] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="font-serif text-xl md:text-2xl font-black text-[#1A2421] uppercase tracking-tight">
                  {svc.title}
                </h3>
                
                <p className="font-serif text-xs italic text-[#B08B26] tracking-wide font-medium">
                  {svc.tagline}
                </p>

                <p className="font-sans text-xs md:text-sm text-[#1A2421]/75 leading-relaxed">
                  {svc.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 pt-2">
                  {svc.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-sans text-xs text-[#1A2421]/80">
                      <div className="size-3.5 border border-[#00828A] text-[#00828A] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="block w-1.5 h-1.5 bg-[#00828A]" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlight formatted elegantly inline instead of pill cards */}
              <div className="pt-6 border-t border-[#1A2421]/10 mt-6 flex justify-between items-center">
                <span className="font-sans text-xs text-[#1A2421]/60 font-semibold">
                  Performance: <strong className="text-[#00828A] border-b border-[#00828A]/40 pb-0.5 font-bold">{svc.highlightText}</strong>
                </span>
                <span className="font-sans text-[10px] tracking-widest text-[#1A2421] font-bold uppercase group-hover:text-[#00828A] transition-colors">
                  CPO® Certified →
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#1A2421] p-8 md:p-12 text-[#FAF8F5] grid grid-cols-1 md:grid-cols-3 gap-8 items-center border border-[#1A2421]/10 rounded-none">
          <div className="md:col-span-2 text-left space-y-2">
            <h3 className="font-serif text-xl md:text-2xl font-black uppercase tracking-tight">
              Have a special pool request?
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#FAF8F5]/80 leading-relaxed max-w-xl">
              From glass bead plaster refinishing and deck pressure washing to UV Ozone conversions, 
              our engineering team manages all advanced mechanical and structural tasks.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center md:items-end w-full">
            <a
              id="bento-phone-cta"
              href="tel:4805550190"
              className="bg-[#FAF8F5] hover:bg-[#FAF8F5]/90 text-[#1A2421] font-mono text-xs tracking-wider font-bold py-3.5 px-6 text-center transition-colors uppercase w-full sm:w-auto md:w-full"
            >
              (480) 555-0190
            </a>
            <span className="font-sans text-[10px] tracking-widest text-[#FAF8F5]/60 uppercase text-center sm:text-left md:text-right font-medium">
              Response under 15 min
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
