import { X, Droplet, Check, Shield, User, FileText, Calendar, Lock } from 'lucide-react';
import React, { useState } from 'react';

interface PortalModalProps {
  onClose: () => void;
}

export default function PortalModal({ onClose }: PortalModalProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().toLowerCase() === 'sterling@example.com' || email.trim().toLowerCase() === 'charles@sterling.com') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Account not found in premium database. Try "sterling@example.com" for demo purposes.');
    }
  };

  return (
    <div
      id="portal-modal-overlay"
      className="fixed inset-0 z-[100] bg-[#0D1512]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto select-text"
    >
      <div className="bg-[#FAF8F5] border border-[#1A2421]/15 w-full max-w-4xl relative shadow-2xl flex flex-col md:flex-row min-h-[500px]">
        {/* Banner strip */}
        <div className="absolute top-0 right-0 h-1 bg-gradient-to-r from-[#00828A] to-[#EBB042] left-0"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close client portal"
          className="absolute top-4 right-4 z-50 p-2 text-[#1A2421]/60 hover:text-[#1A2421] transition-colors border border-[#1A2421]/10 bg-white"
        >
          <X className="size-5" />
        </button>

        {/* Left Side: Brand & Quick instructions */}
        <div className="w-full md:w-5/12 bg-[#1A2421] text-[#FAF8F5] p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#FAF8F5]/10">
          <div className="space-y-6 text-left mt-6 md:mt-0">
            <div className="flex items-center gap-3 w-fit">
              <div className="size-10 bg-[#00828A] flex items-center justify-center text-[#FAF8F5] border border-white/20">
                <Droplet className="size-5 fill-current text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.2em] font-bold text-white uppercase leading-none">
                  Scottsdale
                </span>
                <span className="font-sans text-[9px] tracking-[0.3em] font-medium text-white/70 uppercase mt-1">
                  Pool Club
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-6">
              <h3 className="font-serif text-xl font-black uppercase tracking-tight text-white">
                Weekly Client Portal
              </h3>
              <p className="font-sans text-xs text-[#FAF8F5]/70 leading-relaxed">
                Welcome to the digital care dashboard. Access water diagnostics logs, verify upcoming service days, 
                inspect invoice history, and review technician credentials.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-[#FAF8F5]/10 space-y-3 text-left">
            <span className="font-mono text-[9px] tracking-widest text-[#EBB042] font-semibold uppercase block">
              // Security Policy
            </span>
            <p className="font-sans text-[10px] text-[#FAF8F5]/50 leading-relaxed">
              We employ surgical-grade security protocols. Gate keys and access codes are stored in secure local systems, 
              never transmitted over unencrypted cloud networks.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Flow */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center text-left">
          {!isLoggedIn ? (
            /* Login Panel */
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl font-black text-[#1A2421] uppercase tracking-tight">
                  Secure Access Log-In
                </h2>
                <p className="font-sans text-xs text-[#1A2421]/60">
                  Please authenticate using your registered billing email address.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="portal-email" className="font-sans text-[10px] tracking-widest text-[#1A2421]/60 uppercase font-semibold mb-1">
                    Client Email Address
                  </label>
                  <input
                    type="email"
                    id="portal-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sterling@example.com"
                    className="bg-transparent border border-[#1A2421]/15 px-3 py-3 font-sans text-sm focus:outline-none focus:border-[#00828A] text-[#1A2421] rounded-none placeholder:text-[#1A2421]/30 w-full"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="portal-password" className="font-sans text-[10px] tracking-widest text-[#1A2421]/60 uppercase font-semibold mb-1">
                    Security Passcode
                  </label>
                  <input
                    type="password"
                    id="portal-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-transparent border border-[#1A2421]/15 px-3 py-3 font-sans text-sm focus:outline-none focus:border-[#00828A] text-[#1A2421] rounded-none placeholder:text-[#1A2421]/30 w-full"
                  />
                </div>

                {loginError && (
                  <p className="font-sans text-[11px] text-red-800 bg-red-50 p-3 border border-red-900/10">
                    {loginError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#1A2421] hover:bg-[#00828A] text-[#FAF8F5] py-4 font-sans text-xs tracking-widest font-bold uppercase transition-colors rounded-none cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <Lock className="size-3" />
                  Authenticate Account
                </button>
              </form>

              <div className="text-center">
                <span className="font-sans text-[10px] text-[#1A2421]/50 italic">
                  Note: Log in as <strong className="text-[#00828A] font-semibold">sterling@example.com</strong> to test the dashboard.
                </span>
              </div>
            </div>
          ) : (
            /* Logged-In Panel */
            <div className="space-y-8 animate-fade-in">
              {/* Header profile info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#1A2421]/10">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#00828A] font-bold uppercase block">// Active Client Account</span>
                  <h2 className="font-serif text-xl font-black text-[#1A2421] uppercase tracking-tight">
                    Charles Sterling
                  </h2>
                  <p className="font-sans text-xs text-[#1A2421]/70">
                    Location: <strong className="font-semibold text-[#1A2421]">Silverleaf Estate (85255)</strong>
                  </p>
                </div>
                
                <div className="bg-[#00828A]/10 border border-[#00828A]/30 text-[#00828A] text-[9px] tracking-widest font-mono uppercase px-3 py-1 font-bold">
                  Care Active
                </div>
              </div>

              {/* Account Status Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Left Card: Next service & assigned tech */}
                <div className="space-y-4">
                  <h4 className="font-serif text-xs font-black tracking-widest text-[#00828A] uppercase flex items-center gap-1.5 border-b border-[#1A2421]/10 pb-2">
                    <Calendar className="size-3.5" />
                    Care Schedule
                  </h4>
                  <div className="space-y-2">
                    <p className="font-sans text-xs text-[#1A2421]/80">
                      <strong>Assigned Route:</strong> Tuesdays (Morning)
                    </p>
                    <p className="font-sans text-xs text-[#1A2421]/80">
                      <strong>Next Service:</strong> June 30, 2026
                    </p>
                    <div className="flex items-center gap-2 pt-2 border-t border-[#1A2421]/5">
                      <div className="size-8 bg-[#1A2421] flex items-center justify-center text-white shrink-0">
                        <User className="size-4" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-sans text-[11px] font-bold text-[#1A2421] leading-none">Lucas Miller</span>
                        <span className="font-mono text-[8px] text-[#1A2421]/60 mt-1">CPO ID: CPO-684291</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Card: Chemistry Diagnostics overview */}
                <div className="space-y-4">
                  <h4 className="font-serif text-xs font-black tracking-widest text-[#EBB042] uppercase flex items-center gap-1.5 border-b border-[#1A2421]/10 pb-2">
                    <Droplet className="size-3.5 text-[#00828A]" />
                    Latest Diagnostics
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs text-[#1A2421]/80">
                      <span>Water Purity:</span>
                      <strong className="text-[#00828A] font-semibold">99.8% Balanced</strong>
                    </div>
                    <div className="flex justify-between items-center text-xs text-[#1A2421]/80">
                      <span>pH Saturation Index:</span>
                      <strong>7.4 pH (Ideal)</strong>
                    </div>
                    <div className="flex justify-between items-center text-xs text-[#1A2421]/80">
                      <span>Free Chlorine:</span>
                      <strong>2.5 ppm (Ideal)</strong>
                    </div>
                    <div className="flex justify-between items-center text-xs text-[#1A2421]/80">
                      <span>Filter Pressure:</span>
                      <strong>14 PSI (Ideal)</strong>
                    </div>
                  </div>
                </div>

              </div>

              {/* Billing / Invoice downloads */}
              <div className="space-y-3">
                <h4 className="font-serif text-xs font-black tracking-widest text-[#1A2421] uppercase flex items-center gap-1.5 border-b border-[#1A2421]/10 pb-2">
                  <FileText className="size-3.5 text-[#00828A]" />
                  Billing & Invoicing
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border border-[#1A2421]/10 bg-white">
                    <div className="text-left font-sans text-xs">
                      <strong className="font-bold text-[#1A2421]">Invoice SPC-09412</strong>
                      <p className="text-[10px] text-[#1A2421]/60">Date: Jun 01, 2026 • Care Period: June Maintenance</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#1A2421]">$380.00</span>
                      <span className="bg-[#00828A] text-white text-[8px] tracking-wider uppercase font-bold px-2 py-0.5">Paid</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-[#1A2421]/10 bg-white">
                    <div className="text-left font-sans text-xs">
                      <strong className="font-bold text-[#1A2421]">Invoice SPC-09355</strong>
                      <p className="text-[10px] text-[#1A2421]/60">Date: May 01, 2026 • Care Period: May Maintenance</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#1A2421]">$380.00</span>
                      <span className="bg-[#00828A] text-white text-[8px] tracking-wider uppercase font-bold px-2 py-0.5">Paid</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1A2421]/10 flex justify-between items-center">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-[#1A2421]/60 hover:text-[#00828A] font-sans text-[10px] tracking-widest uppercase font-bold underline cursor-pointer"
                >
                  Log Out
                </button>
                <button
                  onClick={onClose}
                  className="bg-[#1A2421] hover:bg-[#00828A] text-[#FAF8F5] px-6 py-3 font-sans text-xs tracking-widest font-bold uppercase transition-colors rounded-none cursor-pointer"
                >
                  Close Dashboard
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
