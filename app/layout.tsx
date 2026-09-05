import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ConsultationProvider } from '@/components/ConsultationContext';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UR RCM CONSULTANCY LLC | Medical Billing & Revenue Cycle Management',
  description: 'UR RCM CONSULTANCY LLC provides professional medical billing and revenue cycle management solutions designed to help healthcare providers streamline operations and improve financial performance.',
  keywords: [
    'UR RCM CONSULTANCY LLC',
    'Medical Billing',
    'Revenue Cycle Management',
    'Medical Coding',
    'Claims Management',
    'Denial Management',
    'Austin Texas Medical Billing',
    'Healthcare RCM',
  ],
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'UR RCM CONSULTANCY LLC | Medical Billing & Revenue Cycle Management',
    description: 'UR RCM CONSULTANCY LLC provides professional medical billing and revenue cycle management solutions designed to help healthcare providers streamline operations and improve financial performance.',
    type: 'website',
    locale: 'en_US',
    siteName: 'UR RCM CONSULTANCY LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UR RCM CONSULTANCY LLC | Medical Billing & Revenue Cycle Management',
    description: 'UR RCM CONSULTANCY LLC provides professional medical billing and revenue cycle management solutions designed to help healthcare providers streamline operations and improve financial performance.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body suppressHydrationWarning className="bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900 font-sans">
        <ConsultationProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ConsultationProvider>
      </body>
    </html>
  );
}


