import React from 'react';

export default function AdvertorialPage() {
  return (
    <div className="bg-black text-gray-100 min-h-screen">
      {/* Institutional Navigation */}
      <nav className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src="/logo.webp" alt="AppSumore" className="w-10 h-10 object-contain" />
          <span className="font-black text-xl tracking-tighter uppercase">APPSUMORE</span>
        </div>
        <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
          <span>Q3 Market Analysis</span>
          <span>Procurement Intelligence</span>
          <span>Capital Efficiency</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-invert prose-lg max-w-none">
          
          {/* Executive Author Block */}
          <div className="flex items-center gap-6 mb-12 bg-white/5 p-6 rounded-2xl border border-white/10">
            <img src="/avatar.webp" alt="Jonah V." className="w-20 h-20 rounded-full border-2 border-blue-600 object-cover shadow-2xl" />
            <div>
              <p className="font-bold text-white text-lg m-0">Institutional Report by Jonah V.</p>
              <p className="text-blue-400 m-0 text-sm">Managing Director of Infrastructure | Former ScaleLogix Procurement</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tighter">
            The "Hidden Margin" Strategy: <br/> 
            <span className="text-blue-500">Why Elite Agencies Are Auditing Their SaaS Stacks in 2026</span>
          </h1>

          <p className="text-xl text-gray-300 italic border-l-4 border-blue-600 pl-6 my-10">
            "We recently audited a portfolio of 15 high-growth agencies. The combined annual leakage due to inefficient software procurement exceeded $2.4M. In a high-interest environment, this isn't just waste—it's institutional negligence."
          </p>

          <p>
            In the current fiscal landscape, capital efficiency has replaced raw growth as the primary metric for valuation. While most founders are obsessing over ad creative or sales scripts, a silent "Retail Tax" is hollowing out their net profit from the inside.
          </p>

          <h2>The Three Invisible Leaks in Your Stack</h2>
          <p>
            Through our 2026 Procurement Audit, we have identified three specific areas where growth-stage companies are losing between 18% and 34% of their software budget every single month:
          </p>
          
          <ul className="space-y-6">
            <li>
              <strong>1. The "Ghost License" Phenomenon:</strong> 
              Our data shows that 1 out of every 5 paid SaaS seats in companies with more than 20 employees is "Inactive" (not logged into for 30+ days). These are "Zombie Seats" that continue to bill month after month, invisible to the accounting team but heavy on the balance sheet.
            </li>
            <li>
              <strong>2. Negotiation Asymmetry:</strong> 
              SaaS vendors are trained to lock you into "Public Retail Tiers." However, every major enterprise tool has a "Private Floor"—a pricing level reserved for procurement partners who manage high-volume pools. If you are paying the price listed on a website, you are overpaying by default.
            </li>
            <li>
              <strong>3. Feature Overlap & Redundancy:</strong> 
              It is common to see an agency paying for HubSpot (CRM), Apollo (Data), and Outreach (Sequencing) simultaneously, despite 60% feature overlap. Without a unified procurement strategy, you are paying three different vendors for the same outcome.
            </li>
          </ul>

          {/* Proof Section */}
          <div className="my-16">
            <h3 className="text-blue-500 uppercase tracking-widest text-sm font-bold mb-4">Verification of Scale</h3>
            <img src="/dashboard.webp" alt="Performance Dashboard" className="rounded-2xl border border-white/10 shadow-2xl" />
            <p className="text-center text-xs text-gray-500 mt-4">Internal benchmark: Standardizing procurement across $318k+ in monthly software-driven infrastructure spend.</p>
          </div>

          <h2>The 2026 SaaS Procurement Protocol</h2>
          <p>
            At AppSumore, we don't believe in "coupons." We believe in <strong>Structural Optimization.</strong> Our framework for recovering lost margins follows a strict four-stage institutional protocol:
          </p>

          <div className="grid md:grid-cols-2 gap-8 not-prose my-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-blue-500 font-black text-2xl">01</span>
              <h4 className="text-white font-bold mb-2">Inventory Mapping</h4>
              <p className="text-gray-400 text-sm">We document every active subscription, identifying redundancies and "Zombie Seats" that provide zero operational ROI.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-blue-500 font-black text-2xl">02</span>
              <h4 className="text-white font-bold mb-2">Rebate Matching</h4>
              <p className="text-gray-400 text-sm">Your stack is compared against our private rebate inventory. We identify which tools qualify for institutional-grade cashback or enterprise floors.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-blue-500 font-black text-2xl">03</span>
              <h4 className="text-white font-bold mb-2">Structural Recovery</h4>
              <p className="text-gray-400 text-sm">We facilitate the transition to rebate-compliant accounts without interrupting your team's workflow or data integrity.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-blue-500 font-black text-2xl">04</span>
              <h4 className="text-white font-bold mb-2">Capital Reinvestment</h4>
              <p className="text-gray-400 text-sm">The recovered capital (often $2k–$10k/mo) is redirected into high-yield growth channels like ad-spend or key personnel.</p>
            </div>
          </div>

          {/* X.COM SOCIAL PROOF */}
          <div className="not-prose my-16 p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl max-w-xl mx-auto shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" 
                  alt="Alex Sterling" 
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-white">Alex Sterling</span>
                    <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.65.25-.83.25-1.73 0-2.56-.25-.84-.73-1.58-1.37-2.12-.64-.54-1.42-.88-2.26-1s-1.71-.05-2.52.2c-.7-.3-1.47-.47-2.27-.47s-1.57.17-2.27.47c-.81-.25-1.68-.28-2.52-.2s-1.62.46-2.26 1c-.64.54-1.12 1.28-1.37 2.12-.25.83-.25 1.73 0 2.56-1.3 0-2.18 1.37-2.18 2.95 0 1.58.88 2.95 2.18 3.65-.25.83-.25 1.73 0 2.56.25.84.73 1.58 1.37 2.12.64.54 1.42.88 2.26 1s1.71.05 2.52-.2c.7.3 1.47.47 2.27.47s1.57-.17 2.27-.47c.81.25 1.68.28 2.52.2s1.62-.46 2.26-1c.64-.54 1.12-1.28 1.37-2.12.25-.83.25-1.73 0-2.56 1.3-.7 2.18-2.07 2.18-3.65zM10 16.5l-3.5-3.5 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z"/></svg>
                  </div>
                  <span className="text-gray-500 text-sm">@sterling_growth</span>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </div>
            <p className="text-white text-lg leading-relaxed mb-4">
              Just ran our 40-seat stack through the <span className="text-blue-400 font-bold">@AppSumore</span> procurement audit. 
              <br/><br/>
              Result: Identified $3,200/mo in redundant "Pro" seats we weren't even using + locked in a 25% enterprise rebate on HubSpot. 
              <br/><br/>
              If you aren't auditing, you're donating profit to vendors. 💎
            </p>
            <div className="flex gap-6 text-gray-500 text-sm border-t border-white/5 pt-4">
              <span>9:41 AM · June 15, 2026</span>
              <span className="text-white font-bold">142.1K <span className="text-gray-500 font-normal text-xs uppercase tracking-tighter">Engagement</span></span>
            </div>
          </div>

          <h2>The Vetting Standard</h2>
          <p>
            Access to our rebate inventory is not public. We reject approximately 80% of SaaS vendors who apply for our procurement pool. Our allegiance is to the <strong>net-profit margin of our members</strong>, not the growth targets of software companies. 
          </p>
          <p>
            We only authorize tools that demonstrate clear operational ROI and provide structural room for enterprise-level rebates.
          </p>
        </article>

        {/* Institutional CTA */}
        <section className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-blue-900/40 via-black to-black border border-blue-500/20 text-center shadow-3xl">
          <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Request Private Access to the 2026 Inventory</h3>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">
            Audit your current stack against our private pricing floors. Limited to qualified growth-stage organizations.
          </p>
          <a id="cta-link" href="/?type=saas" className="inline-block bg-white text-black px-12 py-5 rounded-xl font-black text-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 duration-300">
            Review Procurement Inventory
          </a>
        </section>

        {/* Discussion Section */}
        <section className="mt-24 border-t border-white/10 pt-16">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-bold uppercase tracking-tighter text-blue-500">Editorial Discussion (14)</h3>
            <span className="text-xs text-gray-500">Moderated by AppSumore Research</span>
          </div>
          
          <div className="space-y-12">
            {/* Comment 1 */}
            <div className="flex gap-5">
              <img src="https://i.pravatar.cc/150?u=david" className="w-12 h-12 rounded-full border border-white/10 filter grayscale" alt="David" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-white">David S.</span>
                    <span className="bg-blue-600/20 text-blue-400 text-[10px] px-2 py-0.5 rounded uppercase font-bold">Verified Member</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Does the 2026 inventory include the enterprise HubSpot rebate? We are looking to migrate 40 seats next month and the retail quote is staggering.</p>
                
                {/* Staff Reply */}
                <div className="mt-6 pl-6 border-l-2 border-blue-600/30">
                    <div className="flex gap-4">
                        <img src="/logo.webp" className="w-10 h-10 rounded-lg bg-gray-900 p-1 border border-white/10" alt="Staff" />
                        <div>
                            <div className="flex items-center gap-2 mb-1 text-sm">
                                <span className="font-bold text-blue-400 uppercase">AppSumore Research Team</span>
                                <span className="bg-gray-800 text-gray-500 text-[9px] px-1.5 py-0.5 rounded">OFFICIAL</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">David, yes. The Q3 window for HubSpot Enterprise rebates is open until Friday. Based on 40 seats, you likely qualify for Tier-2 pricing floors. We recommend filling out the inventory request now to lock in the quote.</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="flex gap-5">
              <img src="https://i.pravatar.cc/150?u=elena" className="w-12 h-12 rounded-full border border-white/10 filter grayscale" alt="Elena" />
              <div>
                <div className="flex items-center gap-2 mb-1 text-sm">
                    <span className="font-bold text-white">Elena Rodriguez</span>
                    <span className="text-gray-600 text-xs font-mono ml-2">14:02 UTC</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">The "Ghost License" audit was a wake-up call for our Ops team. We found $2,400/mo in unused seats across three platforms. It's basically found money.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <script dangerouslySetInnerHTML={{ __html: `
        const params = window.location.search;
        const cta = document.getElementById('cta-link');
        if (cta && params) {
            cta.href = "/?type=saas&" + params.substring(1);
        }
      `}} />
    </div>
  );
}