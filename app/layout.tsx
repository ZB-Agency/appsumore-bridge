import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title: 'AppSumore | SaaS Procurement & Rebate Intelligence',
  description: 'Helping growth teams recover lost margins through institutional SaaS procurement.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KLDF3BLQ" /> 
      <body className="selection:bg-blue-500/30">
        {children}
        <footer className="border-t border-white/10 py-16 text-center text-xs text-gray-500 bg-black">
          <div className="flex justify-center gap-8 mb-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p>© 2026 AppSumore LLC. Performance Infrastructure for Growth Teams.</p>
        </footer>
      </body>
    </html>
  );
}