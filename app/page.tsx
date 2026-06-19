'use client';
import { useState, useEffect, Suspense } from 'react';

function QuizEngine() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    business_type: '',
    stack_focus: '',
    monthly_spend: '',
    email: ''
  });

  const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

  // Step 1: Business Role
  const handleStep1 = (value: string) => {
    setFormData({ ...formData, business_type: value });
    setStep(2);
  };

  // Step 2: Stack Focus
  const handleStep2 = (value: string) => {
    setFormData({ ...formData, stack_focus: value });
    setStep(3);
  };

  // Step 3: Spend Volume
  const handleStep3 = (value: string) => {
    setFormData({ ...formData, monthly_spend: value });
    setStep(4);
  };

  // Final Step: Submission
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const params = new URLSearchParams(window.location.search);
    const finalData = new FormData();

    finalData.append('type', 'lead_capture');
    finalData.append('email', formData.email);
    finalData.append('business_type', formData.business_type);
    finalData.append('niche', formData.stack_focus);
    finalData.append('spend', formData.monthly_spend);
    finalData.append('gclid', params.get('gclid') || '');

    try {
      await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: finalData });

      if (typeof window !== 'undefined') {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          'event': 'lead_form_submission',
          'niche': formData.stack_focus,
          'spend_range': formData.monthly_spend,
          'business_role': formData.business_type
        });
      }

      // 3. Small delay to ensure GTM finishes sending before redirect
      setTimeout(() => {
        params.set('niche', formData.stack_focus);
        params.set('status', 'qualified');
        window.location.href = `https://leadforge-agency.appsumore.com/`;
      }, 500); // 500ms delay for GTM durability

    } catch (error) {
      console.error("Submission error", error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto w-full">
      {/* Progress Bar */}
      <div className="mb-12 h-1 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-500" 
          style={{ width: `${(step / 4) * 100}%` }}
        ></div>
      </div>

      <div className="bg-gray-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-black tracking-tight">01. What is your primary business role?</h2>
            <div className="grid gap-3">
              {['Agency Founder', 'Growth Director', 'Operations Manager', 'E-com Founder'].map((role) => (
                <button 
                  key={role}
                  onClick={() => handleStep1(role)}
                  className="w-full text-left p-4 rounded-xl bg-black border border-white/10 hover:border-blue-500 hover:bg-blue-900/10 transition-all font-medium"
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-black tracking-tight">02. Which infrastructure stack needs optimization?</h2>
            <div className="grid gap-3">
              {['Marketing (CRM & Ads)', 'Sales (Outreach & Data)', 'Ops (Cloud & Logic)', 'Full Stack Audit'].map((stack) => (
                <button 
                  key={stack}
                  onClick={() => handleStep2(stack)}
                  className="w-full text-left p-4 rounded-xl bg-black border border-white/10 hover:border-blue-500 hover:bg-blue-900/10 transition-all font-medium"
                >
                  {stack}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-black tracking-tight">03. Estimated monthly software expenditure?</h2>
            <div className="grid gap-3">
              {['$1,000 - $5,000', '$5,000 - $20,000', '$20,000 - $50,000', '$50,000+'].map((range) => (
                <button 
                  key={range}
                  onClick={() => handleStep3(range)}
                  className="w-full text-left p-4 rounded-xl bg-black border border-white/10 hover:border-blue-500 hover:bg-blue-900/10 transition-all font-medium"
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <form onSubmit={handleFinalSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="text-center">
                <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-1 rounded uppercase mb-4 inline-block">Profile Qualified</span>
                <h2 className="text-2xl font-black tracking-tight">Enter your work email to access the inventory.</h2>
            </div>
            <input 
              type="email" 
              required
              placeholder="name@company.com"
              className="w-full p-5 rounded-2xl bg-black border border-white/10 text-white focus:border-blue-500 outline-none transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <button 
              disabled={loading}
              className="w-full bg-blue-600 py-5 rounded-2xl font-black text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20"
            >
              {loading ? 'Securing Inventory Access...' : 'Unlock Rebate List'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function SegmentationPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-blue-500/30">
      <nav className="max-w-6xl mx-auto px-6 py-8 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.webp" alt="AppSumore" width="32" height="32" />
          <span className="font-black text-lg tracking-tighter uppercase">APPSUMORE</span>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center p-6">
        <QuizEngine />
      </div>
    </div>
  );
}