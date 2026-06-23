import { ShieldAlert, Award, Star, Compass, MapPin } from 'lucide-react';

export default function TrustBadges() {
  const achievements = [
    {
      id: 'nspf',
      label: 'Certified Pool Operators',
      value: 'National Pool & Spa Foundation®',
      desc: 'All technicians are CPO® certified by the NSPF, trained in chemical balance, water diagnostics, and premium sanitation protocols.',
      highlight: 'NSPF® CPO® Certified'
    },
    {
      id: 'scottsdale',
      label: 'Local Chamber Authorized',
      value: 'Authorized Local Provider',
      desc: 'Serving the Scottsdale, Paradise Valley, and DC Ranch communities for over a decade. Built on strict discretion, timeliness, and elite service.',
      highlight: 'Scottsdale & PV Exclusivity'
    },
    {
      id: 'water-stewardship',
      label: 'Eco-Minded Engineering',
      value: 'Eco-Smart Water Filtration',
      desc: 'Utilizing intelligent variable speed pumps and advanced Ozone systems that reduce chlorine requirements by up to 80% while saving water.',
      highlight: '80% Less Chlorine Demand'
    }
  ];

  return (
    <section id="trust-badges-section" className="bg-[#FAF8F5] border-b border-[#1A2421]/10 py-12 select-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* A minimalist elegant title line */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-l-2 border-[#00828A] pl-6 text-left">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-[#1A2421] uppercase tracking-tight">
              Surgical Detailing. Authorized Standards.
            </h2>
            <p className="font-sans text-xs text-[#1A2421]/60 tracking-wider">
              No generalists. No quick skims. Just certified pool engineering.
            </p>
          </div>
          <div className="font-mono text-xs text-[#00828A] font-bold tracking-widest uppercase">
            Rating: <span className="text-[#EBB042] font-semibold">5.0 ★ Star Rating</span> in Troon, Silverleaf, & DC Ranch
          </div>
        </div>

        {/* Minimalist Grid - No balloons, no bubbles, sharp 90-degree corners, inline highlighted terms */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#1A2421]/15 divide-y md:divide-y-0 md:divide-x divide-[#1A2421]/15 bg-white">
          {achievements.map((item) => (
            <div key={item.id} className="p-8 flex flex-col justify-between space-y-4 text-left group hover:bg-[#FAF8F5] transition-colors duration-300">
              <div className="space-y-3">
                <span className="font-mono text-[10px] tracking-widest text-[#00828A] font-bold uppercase block">
                  // {item.label}
                </span>
                <h3 className="font-serif text-lg font-black text-[#1A2421] uppercase tracking-tight">
                  {item.value}
                </h3>
                <p className="font-sans text-xs text-[#1A2421]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Inline bolded highlights as text underlines, no bubble background */}
              <div className="pt-4 border-t border-[#1A2421]/5 mt-auto">
                <span className="font-sans text-[11px] tracking-wider text-[#1A2421]/80 font-bold block">
                  Verification: <span className="text-[#00828A] border-b-2 border-[#00828A]/30 pb-0.5">{item.highlight}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
