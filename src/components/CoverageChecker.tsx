import React, { useState } from 'react';
import { MapPin, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

const COVERED_ZIPS: Record<string, { neighborhood: string; day: string }> = {
  '85255': { neighborhood: 'DC Ranch / Silverleaf / Grayhawk', day: 'Tuesday' },
  '85262': { neighborhood: 'Troon / Pinnacle Peak / Desert Mountain', day: 'Monday' },
  '85259': { neighborhood: 'Ancala / Stonegate / Hidden Hills', day: 'Wednesday' },
  '85253': { neighborhood: 'Paradise Valley / PV Estates', day: 'Thursday' },
  '85018': { neighborhood: 'Arcadia / Biltmore Estates', day: 'Friday' },
  '85266': { neighborhood: 'Whisper Rock / Terravita / Carefree Border', day: 'Monday' },
  '85260': { neighborhood: 'Cactus Corridor / McDowell Mountain', day: 'Wednesday' }
};

export default function CoverageChecker() {
  const [zip, setZip] = useState('');
  const [result, setResult] = useState<{
    status: 'idle' | 'success' | 'fail';
    neighborhood?: string;
    day?: string;
  }>({ status: 'idle' });

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zip.trim();
    if (COVERED_ZIPS[cleanZip]) {
      setResult({
        status: 'success',
        neighborhood: COVERED_ZIPS[cleanZip].neighborhood,
        day: COVERED_ZIPS[cleanZip].day
      });
    } else {
      setResult({ status: 'fail' });
    }
  };

  return (
    <section id="coverage" className="bg-[#FAF8F5] border-b border-[#1A2421]/10 py-20 md:py-28 select-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Text and served districts */}
        <div className="lg:col-span-7 text-left space-y-6">
          <span className="font-mono text-xs tracking-widest text-[#00828A] font-bold uppercase block">
            // Hyper-Local Operations
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2421] leading-none uppercase tracking-tight">
            Our Elite Service <br />
            Neighborhoods
          </h2>
          <p className="font-sans text-sm md:text-base text-[#1A2421]/70 leading-relaxed max-w-2xl">
            To maintain our standard of same-day response and absolute attention to detail, we restrict our coverage 
            exclusively to Scottsdale's premier residential enclaves. Our trucks are stationed locally in each district 
            on designated service days.
          </p>

          {/* List of neighborhoods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <MapPin className="size-4 text-[#00828A] shrink-0 mt-0.5" />
              <div>
                <span className="font-serif text-sm font-bold text-[#1A2421] uppercase">Silverleaf & DC Ranch</span>
                <p className="font-sans text-[11px] text-[#1A2421]/60">Tuesdays — Dedicated estate route</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-4 text-[#00828A] shrink-0 mt-0.5" />
              <div>
                <span className="font-serif text-sm font-bold text-[#1A2421] uppercase">Paradise Valley</span>
                <p className="font-sans text-[11px] text-[#1A2421]/60">Thursdays — Elite villa maintenance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-4 text-[#00828A] shrink-0 mt-0.5" />
              <div>
                <span className="font-serif text-sm font-bold text-[#1A2421] uppercase">Troon & Desert Mountain</span>
                <p className="font-sans text-[11px] text-[#1A2421]/60">Mondays — Mountain runoff detailing</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-4 text-[#00828A] shrink-0 mt-0.5" />
              <div>
                <span className="font-serif text-sm font-bold text-[#1A2421] uppercase">Arcadia & Biltmore</span>
                <p className="font-sans text-[11px] text-[#1A2421]/60">Fridays — Travertine preservation focus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive coverage checker box */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto">
          <div className="bg-white border border-[#1A2421]/15 p-6 md:p-8 rounded-none shadow-[16px_16px_0px_0px_rgba(0,130,138,0.06)] select-text relative">
            <h3 className="font-serif text-lg font-black text-[#1A2421] uppercase tracking-tight text-left">
              Verify Zip Code Coverage
            </h3>
            <p className="font-sans text-xs text-[#1A2421]/70 mt-1 text-left">
              Input your 5-digit ZIP code to confirm route availability and assigned maintenance days.
            </p>

            <form onSubmit={handleCheck} className="mt-6 flex gap-2">
              <input
                type="text"
                required
                maxLength={5}
                value={zip}
                onChange={(e) => {
                  setZip(e.target.value.replace(/\D/g, ''));
                  setResult({ status: 'idle' });
                }}
                placeholder="E.g., 85255"
                className="flex-1 bg-transparent border border-[#1A2421]/15 px-3 py-3 font-sans text-sm focus:outline-none focus:border-[#00828A] text-[#1A2421] rounded-none placeholder:text-[#1A2421]/30"
              />
              <button
                type="submit"
                className="bg-[#1A2421] hover:bg-[#00828A] text-[#FAF8F5] px-6 py-3 font-sans text-xs tracking-widest font-bold uppercase transition-colors rounded-none cursor-pointer flex items-center gap-1"
              >
                Verify
                <ArrowRight className="size-3" />
              </button>
            </form>

            {/* Results Display */}
            <div className="mt-6 min-h-[80px] flex items-center justify-center">
              {result.status === 'idle' && (
                <p className="font-sans text-[11px] text-[#1A2421]/40 italic">
                  Waiting for verification...
                </p>
              )}

              {result.status === 'success' && (
                <div className="w-full bg-[#00828A]/5 border border-[#00828A]/20 p-4 text-left flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="size-5 text-[#00828A] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-serif text-xs font-black text-[#00828A] uppercase tracking-wider block">
                      Coverage Confirmed
                    </span>
                    <p className="font-sans text-[11px] text-[#1A2421] leading-relaxed">
                      We serve <strong className="font-semibold">{result.neighborhood}</strong>.
                    </p>
                    <p className="font-sans text-[10px] text-[#1A2421]/60">
                      Assigned route day: <strong className="text-[#00828A] font-semibold">{result.day}</strong>.
                    </p>
                  </div>
                </div>
              )}

              {result.status === 'fail' && (
                <div className="w-full bg-red-50/50 border border-red-900/10 p-4 text-left flex items-start gap-3 animate-fade-in">
                  <AlertTriangle className="size-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-serif text-xs font-black text-amber-800 uppercase tracking-wider block">
                      Custom Evaluation Required
                    </span>
                    <p className="font-sans text-[11px] text-[#1A2421] leading-relaxed">
                      ZIP code <strong className="font-semibold">{zip}</strong> is outside our standard routes.
                    </p>
                    <p className="font-sans text-[10px] text-[#1A2421]/70">
                      Please call <a href="tel:4805550190" className="underline font-semibold font-mono text-[#00828A]">(480) 555-0190</a> to request route extensions.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
