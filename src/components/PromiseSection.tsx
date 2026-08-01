import { ShieldCheck, Flame, Lock } from 'lucide-react';

export default function PromiseSection() {
  const promises = [
    {
      id: 'no-green',
      icon: <ShieldCheck className="size-6 text-[#00828A]" />,
      title: 'The "No-Green" Guarantee',
      description: 'If your pool water turns green or develops algae while under our weekly care, we perform as many service calls and supply all additional chemicals on our own dime until it is restored to 100% turquoise-blue gloss. No exceptions.',
      tag: 'Water Assurance'
    },
    {
      id: 'precision',
      icon: <Flame className="size-6 text-[#EBB042]" />,
      title: 'Surgical Chemistry Precision',
      description: 'We do not guess with generic test strips. We balance your water against the Langelier Saturation Index (LSI) to preserve quartz plaster, prevent calcium scale, and maintain a constant 99.8% water purity log. Instantly sent to your phone.',
      tag: 'Chemical Engineering'
    },
    {
      id: 'security',
      icon: <Lock className="size-6 text-[#00828A]" />,
      title: 'Security & Discretion Protocol',
      description: 'Every pool operator is CPO® certified, background-checked, and insured. We follow strict estate protocols: gates double-locked on exit, gate code confidentiality, and a zero-photography policy inside or near home windows.',
      tag: 'Estate Protection'
    }
  ];

  return (
    <section id="guarantee-promise-section" className="bg-[#1A2421] text-[#FAF8F5] py-20 md:py-28 select-text relative overflow-hidden">
      {/* Decorative premium divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00828A]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="font-mono text-xs tracking-widest text-[#00828A] font-bold uppercase block">
            // Uncompromised Accountability
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-white leading-none uppercase tracking-tight">
            Our Triple-Protection <br />
            Named Promises
          </h2>
          <p className="font-sans text-sm md:text-base text-[#FAF8F5]/70 leading-relaxed max-w-2xl">
            Most pool services list "quality" as a bullet point. We define it as a set of binding promises. 
            Here is how we safeguard your family's water, your property’s architectural finishes, and your peace of mind.
          </p>
        </div>

        {/* Promises Grid with luxury dark styling, sharp borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#FAF8F5]/10 divide-y md:divide-y-0 md:divide-x divide-[#FAF8F5]/10 bg-[#0D1512]">
          {promises.map((p) => (
            <div 
              key={p.id} 
              className="p-8 flex flex-col justify-between space-y-6 text-left hover:bg-[#1A2421]/60 transition-colors duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-widest text-[#00828A] font-bold uppercase">
                    // Promise Category: {p.tag.toUpperCase()}
                  </span>
                  <div className="p-2 bg-[#1A2421] border border-[#FAF8F5]/10 group-hover:border-[#00828A]/40 transition-colors">
                    {p.icon}
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-white mt-4">
                  {p.title}
                </h3>
                
                <p className="font-sans text-xs md:text-sm text-[#FAF8F5]/85 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#FAF8F5]/5 text-[10px] font-mono text-[#FAF8F5]/50 uppercase tracking-widest">
                Active Client Coverage
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge summary line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 border border-[#FAF8F5]/10 bg-[#0D1512]/50 text-left">
          <div className="space-y-1">
            <span className="font-sans text-xs font-bold uppercase text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00828A]"></span>
              Bound by the Scottsdale Pool Club Care Charter
            </span>
            <p className="font-sans text-[11px] text-[#FAF8F5]/60">
              We stand behind our chemical diagnostics. If any parameter falls out of target ranges on your check log, your next week is free.
            </p>
          </div>
          <a
            href="tel:4805550190"
            className="shrink-0 bg-[#00828A] hover:bg-[#00828A]/80 text-[#FAF8F5] text-xs font-mono tracking-widest font-bold px-6 py-3.5 transition-colors uppercase"
          >
            Charter Details & FAQ
          </a>
        </div>

      </div>
    </section>
  );
}
