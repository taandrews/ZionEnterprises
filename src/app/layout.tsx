import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Arthur Jordan Realtor | Maryland Homeownership Programs for Renters',
  description: 'Arthur Jordan Realtor connects Maryland renters with homeownership programs, down payment assistance, rent-to-own opportunities, and credit repair services. Start your path from renting to owning today.',
  openGraph: {
    title: 'Arthur Jordan Realtor | Maryland Homeownership Programs for Renters',
    description: 'Your path from renting to owning starts here. Programs for all credit types across all 24 Maryland jurisdictions.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
