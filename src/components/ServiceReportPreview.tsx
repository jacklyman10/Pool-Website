import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Check, AlertCircle, RefreshCw, BarChart2, Eye, ShieldCheck, Flame, Gauge } from 'lucide-react';
import { ServiceReport, PoolMetrics } from '../types';

export default function ServiceReportPreview() {
  const reports: ServiceReport[] = [
    {
      id: 'rep_1',
      date: 'Tuesday, Jun 23, 2026 (Today)',
      poolName: 'The Sterling Residence',
      neighborhood: 'Silverleaf, Scottsdale',
      technician: {
        name: 'Lucas Miller',
        certId: 'CPO-684291',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
      },
      metrics: {
        ph: 7.4,
        chlorine: 2.5,
        alkalinity: 95,
        saltLevel: 3100,
        waterTemp: 84,
        filterPressure: 14
      },
      checklist: {
        skimmed: true,
        brushed: true,
        vacuumed: true,
        basketCleaned: true,
        filterBackwashed: true,
        equipmentChecked: true
      },
      notes: 'Water is absolutely pristine today. Saltwater cell was backwashed to clear scale buildup and chemical levels are balanced to ideal specifications. Vacuumed leaves from desert breeze last night. Pressure is at an optimal 14 psi. Ready for the weekend!',
      status: 'Perfect'
    },
    {
      id: 'rep_2',
      date: 'Tuesday, Jun 16, 2026',
      poolName: 'The Sterling Residence',
      neighborhood: 'Silverleaf, Scottsdale',
      technician: {
        name: 'Lucas Miller',
        certId: 'CPO-684291',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
      },
      metrics: {
        ph: 7.8, // Slightly high before adjustment
        chlorine: 0.8, // Low before adjustment
        alkalinity: 115,
        saltLevel: 3050,
        waterTemp: 82,
        filterPressure: 19 // Pressure was high
      },
      checklist: {
        skimmed: true,
        brushed: true,
        vacuumed: false, // Not needed
        basketCleaned: true,
        filterBackwashed: true, // Cleaned filter to lower pressure
        equipmentChecked: true
      },
      notes: 'Noticed slight cloudiness on arrival. Tested water: pH was high (7.8) and Chlorine had dropped. Added 1.5 lbs of dry acid to lower pH and adjusted saltwater output cell. Backwashed filter to reduce pressure from 19 psi to 13 psi. Surface skimmed and skimmer baskets emptied.',
      status: 'Adjusted'
    },
    {
      id: 'rep_3',
      date: 'Tuesday, Jun 9, 2026',
      poolName: 'The Sterling Residence',
      neighborhood: 'Silverleaf, Scottsdale',
      technician: {
        name: 'Lucas Miller',
        certId: 'CPO-684291',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
      },
      metrics: {
        ph: 7.5,
        chlorine: 2.0,
        alkalinity: 100,
        saltLevel: 3100,
        waterTemp: 80,
        filterPressure: 13
      },
      checklist: {
        skimmed: true,
        brushed: true,
        vacuumed: true,
        basketCleaned: true,
        filterBackwashed: false,
        equipmentChecked: true
      },
      notes: 'Routine service completed. Water tested fully balanced. Brush tiles to prevent hard water scale. Added 2 tabs of chlorine stabilizer due to high Scottsdale UV index forecasts. All systems running perfectly.',
      status: 'Balanced'
    }
  ];

  const [activeReportIdx, setActiveReportIdx] = useState(0);
  const activeReport = reports[activeReportIdx];



  // Safe chemical ranges
  const isPhSafe = activeReport.metrics.ph >= 7.2 && activeReport.metrics.ph <= 7.6;
  const isChlorineSafe = activeReport.metrics.chlorine >= 1.0 && activeReport.metrics.chlorine <= 3.0;
  const isAlkalinitySafe = activeReport.metrics.alkalinity >= 80 && activeReport.metrics.alkalinity <= 120;

  return (
    <section id="reports" className="bg-[#FAF8F5] border-b border-[#1A2421]/10 py-20 md:py-28 select-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="font-mono text-xs tracking-widest text-[#00828A] font-bold uppercase block">// Real-Time Service Audits</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2421] leading-none uppercase tracking-tight">
            Same-Day Digital <br />
            After-Service Reports
          </h2>
          <p className="font-sans text-sm md:text-base text-[#1A2421]/70 leading-relaxed max-w-2xl">
            You shouldn’t have to wonder if your pool is balanced. Our technicians log chemical metrics, 
            filter stats, and service logs on-site. Every service ends with a dynamic report emailed instantly 
            with real-time before/after transparency. Toggle our interactive logs below to experience the system.
          </p>
        </div>

        {/* Dynamic Viewer Container */}
        <div className="max-w-4xl mx-auto">
          {/* Right Column: The Digital Report Card (Full Width) */}
          <div className="bg-white border border-[#1A2421]/15 p-6 md:p-8 flex flex-col justify-between text-left space-y-8">
            
            {/* History Date Toggles */}
            <div className="space-y-3">
              <span className="font-sans text-[10px] tracking-widest text-[#1A2421]/55 uppercase font-bold block">
                Select Service Audit History:
              </span>
              <div className="grid grid-cols-3 border border-[#1A2421]/15 divide-x divide-[#1A2421]/15">
                {reports.map((rep, idx) => (
                  <button
                    key={rep.id}
                    id={`report-tab-btn-${idx}`}
                    onClick={() => setActiveReportIdx(idx)}
                    className={`py-4 px-2 font-mono text-[10px] md:text-xs tracking-wider uppercase font-semibold text-center transition-colors cursor-pointer rounded-none ${
                      activeReportIdx === idx
                        ? 'bg-[#1A2421] text-[#FAF8F5]'
                        : 'bg-[#FAF8F5] text-[#1A2421]/60 hover:bg-[#ECE7E1]'
                    }`}
                  >
                    {rep.date.replace('Tuesday, ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Report Card Content */}
            <div className="space-y-6">
              
              {/* Metadata: Location & Technician details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1A2421]/10">
                <div className="space-y-1">
                  <span className="font-serif text-lg font-black text-[#1A2421] uppercase tracking-tight">
                    {activeReport.poolName}
                  </span>
                  <p className="font-sans text-xs text-[#00828A] flex items-center gap-1 font-medium">
                    <span className="inline-block w-1.5 h-1.5 bg-[#00828A]"></span>
                    {activeReport.neighborhood}
                  </p>
                </div>
                
                {/* Operator Profile */}
                <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 border border-[#1A2421]/10">
                  <img
                    src={activeReport.technician.avatar}
                    alt={activeReport.technician.name}
                    className="size-10 object-cover border border-[#1A2421]/20 rounded-none"
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-xs font-bold text-[#1A2421] leading-none">
                      {activeReport.technician.name}
                    </span>
                    <span className="font-mono text-[9px] text-[#1A2421]/60 mt-1">
                      CPO ID: {activeReport.technician.certId}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chemical Diagnostics Panel */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-sm font-black text-[#1A2421] tracking-wider uppercase flex items-center gap-2">
                    <BarChart2 className="size-4 text-[#00828A]" />
                    Chemical Saturation Index
                  </h4>
                  <span className={`font-mono text-[10px] tracking-widest font-bold uppercase px-2.5 py-1 ${
                    activeReport.status === 'Perfect'
                      ? 'text-[#FAF8F5] bg-[#00828A]'
                      : activeReport.status === 'Balanced'
                      ? 'text-[#FAF8F5] bg-amber-600'
                      : 'text-[#FAF8F5] bg-amber-800'
                  }`}>
                    {activeReport.status} Chemistry
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {/* pH Parameter */}
                  <div className="space-y-2 p-4 bg-[#FAF8F5] border border-[#1A2421]/10">
                    <div className="flex justify-between items-baseline">
                      <span className="font-mono text-[11px] font-bold text-[#1A2421]">pH Level</span>
                      <span className={`font-mono text-sm font-black ${isPhSafe ? 'text-[#00828A]' : 'text-amber-700'}`}>
                        {activeReport.metrics.ph}
                      </span>
                    </div>
                    {/* Visual bar slider indicator */}
                    <div className="h-1.5 w-full bg-[#1A2421]/10 relative">
                      <div
                        className="absolute top-0 bottom-0 bg-[#00828A]"
                        style={{ left: '30%', right: '30%' }} // Safe ideal zone (7.2-7.6) highlighted
                      />
                      <div
                        className="absolute top-1/2 -translate-y-1/2 size-2.5 bg-[#1A2421] border border-white"
                        style={{ left: `${((activeReport.metrics.ph - 6.5) / (8.5 - 6.5)) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-[#1A2421]/50 uppercase">
                      <span>Acidic</span>
                      <span>7.2 - 7.6 Ideal</span>
                      <span>Alkaline</span>
                    </div>
                  </div>

                  {/* Free Chlorine Parameter */}
                  <div className="space-y-2 p-4 bg-[#FAF8F5] border border-[#1A2421]/10">
                    <div className="flex justify-between items-baseline">
                      <span className="font-mono text-[11px] font-bold text-[#1A2421]">Free Chlorine</span>
                      <span className={`font-mono text-sm font-black ${isChlorineSafe ? 'text-[#00828A]' : 'text-amber-700'}`}>
                        {activeReport.metrics.chlorine} ppm
                      </span>
                    </div>
                    {/* Chlorine bar indicator */}
                    <div className="h-1.5 w-full bg-[#1A2421]/10 relative">
                      <div
                        className="absolute top-0 bottom-0 bg-[#00828A]"
                        style={{ left: '20%', right: '40%' }} // Safe ideal zone (1.0-3.0)
                      />
                      <div
                        className="absolute top-1/2 -translate-y-1/2 size-2.5 bg-[#1A2421] border border-white"
                        style={{ left: `${(activeReport.metrics.chlorine / 5.0) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-[#1A2421]/50 uppercase">
                      <span>Low</span>
                      <span>1.0 - 3.0 Ideal</span>
                      <span>High</span>
                    </div>
                  </div>

                  {/* Total Alkalinity Parameter */}
                  <div className="space-y-2 p-4 bg-[#FAF8F5] border border-[#1A2421]/10">
                    <div className="flex justify-between items-baseline">
                      <span className="font-mono text-[11px] font-bold text-[#1A2421]">Alkalinity</span>
                      <span className={`font-mono text-sm font-black ${isAlkalinitySafe ? 'text-[#00828A]' : 'text-amber-700'}`}>
                        {activeReport.metrics.alkalinity} ppm
                      </span>
                    </div>
                    {/* Alkalinity bar indicator */}
                    <div className="h-1.5 w-full bg-[#1A2421]/10 relative">
                      <div
                        className="absolute top-0 bottom-0 bg-[#00828A]"
                        style={{ left: '30%', right: '30%' }} // Safe zone (80-120)
                      />
                      <div
                        className="absolute top-1/2 -translate-y-1/2 size-2.5 bg-[#1A2421] border border-white"
                        style={{ left: `${((activeReport.metrics.alkalinity - 40) / (160 - 40)) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-[#1A2421]/50 uppercase">
                      <span>Low</span>
                      <span>80-120 Ideal</span>
                      <span>High</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Checklist Grid */}
              <div className="space-y-3">
                <h4 className="font-serif text-sm font-black text-[#1A2421] tracking-wider uppercase">
                  Detailing Checklist Completed:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 text-xs text-[#1A2421]">
                    <div className={`size-4 border border-[#00828A] flex items-center justify-center ${activeReport.checklist.skimmed ? 'bg-[#00828A] text-white' : ''}`}>
                      {activeReport.checklist.skimmed && <Check className="size-3" />}
                    </div>
                    Surface Skimmed
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A2421]">
                    <div className={`size-4 border border-[#00828A] flex items-center justify-center ${activeReport.checklist.brushed ? 'bg-[#00828A] text-white' : ''}`}>
                      {activeReport.checklist.brushed && <Check className="size-3" />}
                    </div>
                    PebbleTec/Tile Brushed
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A2421]">
                    <div className={`size-4 border border-[#00828A] flex items-center justify-center ${activeReport.checklist.vacuumed ? 'bg-[#00828A] text-white' : ''}`}>
                      {activeReport.checklist.vacuumed && <Check className="size-3" />}
                    </div>
                    Floor Vacuumed
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A2421]">
                    <div className={`size-4 border border-[#00828A] flex items-center justify-center ${activeReport.checklist.basketCleaned ? 'bg-[#00828A] text-white' : ''}`}>
                      {activeReport.checklist.basketCleaned && <Check className="size-3" />}
                    </div>
                    Baskets Emptied
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A2421]">
                    <div className={`size-4 border border-[#00828A] flex items-center justify-center ${activeReport.checklist.filterBackwashed ? 'bg-[#00828A] text-white' : ''}`}>
                      {activeReport.checklist.filterBackwashed && <Check className="size-3" />}
                    </div>
                    Filter Backwashed
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1A2421]">
                    <div className={`size-4 border border-[#00828A] flex items-center justify-center ${activeReport.checklist.equipmentChecked ? 'bg-[#00828A] text-white' : ''}`}>
                      {activeReport.checklist.equipmentChecked && <Check className="size-3" />}
                    </div>
                    Pump/Heater Inspected
                  </div>
                </div>
              </div>

              {/* Technician Handwritten Note */}
              <div className="p-4 bg-amber-50/40 border border-amber-900/10 space-y-1.5">
                <span className="font-mono text-[9px] tracking-widest text-[#B08B26] font-bold uppercase block">
                  // Technician's Walkthrough Note
                </span>
                <p className="font-sans text-xs text-[#1A2421]/90 italic leading-relaxed">
                  "{activeReport.notes}"
                </p>
              </div>

            </div>

            {/* Additional parameters indicators footer */}
            <div className="pt-6 border-t border-[#1A2421]/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-[#1A2421]/60 uppercase">
              <span>Water Temp: <strong>{activeReport.metrics.waterTemp}°F</strong></span>
              <span>Filter Pressure: <strong>{activeReport.metrics.filterPressure} PSI</strong></span>
              <span>Salt Concentration: <strong>{activeReport.metrics.saltLevel} ppm</strong></span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
