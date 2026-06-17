'use client';
import { useState, useEffect } from 'react';

export default function SegmentationPage() {
  const [loading, setLoading] = useState(false);
  const [gclid, setGclid] = useState('');
  
  // Environment Variable from Netlify
  const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

  useEffect(() => {
    // Standard Browser API - Works perfectly on Static Exports
    const params = new URLSearchParams(window.location.search);
    const id = params.get('gclid');
    if (id) setGclid(id);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!SCRIPT_URL) {
      alert("System Error: Configuration missing. Please try again later.");
      return;
    }

    setLoading(true);
    const formData = new FormData(e.currentTarget);
    if (gclid) formData.append('gclid', gclid);

    try {
      await fetch(SCRIPT_URL, { 
        method: 'POST', 
        mode: 'no-cors', 
        body: formData 
      });

      // Redirect preserving all original parameters
      const params = new URLSearchParams(window.location.search);
      params.set('niche', formData.get('niche') as string);
      window.location.href = `https://appsumore.com/tools?${params.toString()}`;
    } catch (error) {
      alert("Connection error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <nav className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.webp" alt="AppSumore" width="32" height="32" className="object-contain" />
          <span className="font-black text-lg uppercase tracking-tighter">APPSUMORE</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          <span className="text-blue-500 font-bold text-sm uppercase tracking-widest">Inventory Access Request</span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
            Unlock Institutional <br />
            <span className="text-blue-600">SaaS Rebates.</span>
          </h1>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] shadow-2xl">
            <h3 className="text-xs font-bold uppercase text-gray-500 tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Active Rebate Windows (Q3)
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between p-4 bg-black/40 rounded-2xl border border-white/5 text-sm">
                <span>HubSpot Enterprise Tier</span>
                <span className="text-green-400 font-bold">25% Rebate</span>
              </div>
              <div className="flex justify-between p-4 bg-black/40 rounded-2xl border border-white/5 text-sm">
                <span>AWS Infrastructure Pool</span>
                <span className="text-green-400 font-bold">15% Credit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (The Form) */}
        <div className="relative">
          <form onSubmit={handleSubmit} className="bg-gray-900 border border-white/10 p-10 rounded-[2.5rem] space-y-6 shadow-2xl">
            <input type="hidden" name="type" value="lead_capture" />
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Work Email Address</label>
              <input type="email" name="email" required placeholder="name@company.com" className="w-full p-4 rounded-xl bg-black border border-white/10 text-white outline-none focus:border-blue-500 transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Infrastructure Focus</label>
              <select name="niche" required className="w-full p-4 rounded-xl bg-black border border-white/10 text-white outline-none appearance-none">
                <option value="marketing">Marketing Stack</option>
                <option value="sales">Sales Stack</option>
                <option value="ops">Dev/Ops Stack</option>
              </select>
            </div>

            <button disabled={loading} className="w-full bg-blue-600 py-5 rounded-xl font-black text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-[0.98] disabled:opacity-50">
              {loading ? 'Verifying Profile...' : 'Request Inventory Access'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}