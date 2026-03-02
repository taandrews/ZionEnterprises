import Link from 'next/link';
import { ArrowUpRight, Phone, Mail } from 'lucide-react';

const serviceLinks = [
  { name: 'First Time Home Buyers', href: '/first-time-buyer' },
  { name: 'Home Ownership Workshop Classes', href: '/workshops' },
  { name: 'Turning Renters into Home Owners', href: '/renters-to-homeowners' },
  { name: 'Rooms For Rent', href: '/rooms-for-rent' },
  { name: 'Credit Restoration', href: '/credit-repair' },
  { name: 'Helping Our Veterans Become Home Owners', href: '/veterans' },
  { name: 'Rent To Own', href: '/rent-to-own' },
  { name: 'Helping the Homeless Become Home Owners', href: '/homeless-to-homeowners' },
  { name: 'Want to Sell Your Home', href: '/sell-your-home' },
  { name: 'Looking to Buy Investment Properties', href: '/investment-properties' },
];

const companyLinks = [
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Homeownership Quiz', href: '/quiz' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'SMS Terms', href: '/sms-terms' },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main content */}
      <div style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(40px, 5vw, 96px)', paddingRight: 'clamp(40px, 5vw, 96px)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]" style={{ paddingTop: '80px', paddingBottom: '80px', gap: '32px' }}>
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-7">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ZionEnterprises/logo-white.png"
                alt="Arthur Jordan Realtor"
                style={{
                  height: '64px',
                  width: 'auto',
                  objectFit: 'contain',
                  opacity: 0.85,
                }}
              />
            </Link>
            <p className="text-white/60 text-[14px] font-body leading-[1.8] mb-8 max-w-[280px]">
              Your path from renting to owning starts here. Serving all 24 Maryland jurisdictions.
            </p>
            <div className="space-y-3">
              <a href="tel:4435551234" className="flex items-center gap-3 text-white/70 text-[13px] font-body hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-gold/60" />
                (443) 555-1234
              </a>
              <a href="mailto:info@zionenterprises.com" className="flex items-center gap-3 text-white/70 text-[13px] font-body hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-gold/60" />
                info@zionenterprises.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-gold/70 mb-7">Services</h3>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center gap-1.5 text-white/60 text-[13px] font-body hover:text-white transition-colors">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-gold/70 mb-7">Company</h3>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center gap-1.5 text-white/60 text-[13px] font-body hover:text-white transition-colors">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-gold/70 mb-7">Legal</h3>
            <ul className="space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-[13px] font-body hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/[0.08]">
        <div style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(40px, 5vw, 96px)', paddingRight: 'clamp(40px, 5vw, 96px)', paddingTop: '32px', paddingBottom: '32px' }}>
          <p className="text-white/30 text-[11px] font-body leading-relaxed max-w-4xl">
            Arthur Jordan Realtor is a homeownership consulting and lead generation company. We are not a licensed mortgage lender, real estate broker, or credit repair organization. Credit repair services are provided by independent licensed partners. Individual results may vary. No specific outcomes are guaranteed. Arthur Jordan Realtor is not affiliated with the Maryland Mortgage Program or any government agency.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/[0.06]">
        <div className="flex flex-col sm:flex-row items-center justify-between" style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(40px, 5vw, 96px)', paddingRight: 'clamp(40px, 5vw, 96px)', paddingTop: '20px', paddingBottom: '20px', gap: '8px' }}>
          <p className="text-white/30 text-[11px] font-body">&copy; {new Date().getFullYear()} Arthur Jordan Realtor</p>
          <p className="text-white/30 text-[11px] font-body">
            Built by <span className="text-gold/40">Init One Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
