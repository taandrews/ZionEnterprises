'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Home, Key, Users, CreditCard, ArrowRight, GraduationCap, BedDouble, Shield, Heart, Building, TrendingUp } from 'lucide-react';

const services = [
  { name: 'First Time Home Buyers', href: '/first-time-buyer', icon: Home, desc: 'MMP programs & grants' },
  { name: 'Home Ownership Workshop Classes', href: '/workshops', icon: GraduationCap, desc: 'Home ownership education' },
  { name: 'Turning Renters into Home Owners', href: '/renters-to-homeowners', icon: Users, desc: 'Good, bad & no credit' },
  { name: 'Rooms For Rent', href: '/rooms-for-rent', icon: BedDouble, desc: 'Affordable room rentals' },
  { name: 'Credit Restoration', href: '/credit-repair', icon: CreditCard, desc: 'Get mortgage-ready' },
  { name: 'Helping Our Veterans Become Home Owners', href: '/veterans', icon: Shield, desc: 'Serving those who served' },
  { name: 'Rent To Own', href: '/rent-to-own', icon: Key, desc: 'Good, bad & no credit' },
  { name: 'Helping the Homeless Become Home Owners', href: '/homeless-to-homeowners', icon: Heart, desc: 'A fresh start home' },
  { name: 'Want to Sell Your Home', href: '/sell-your-home', icon: Building, desc: 'List with Arthur Jordan' },
  { name: 'Looking to Buy Investment Properties', href: '/investment-properties', icon: TrendingUp, desc: 'Build your portfolio' },
];

const navLinks = [
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl"
      style={{
        background: '#ffffff',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.08)' : '0 1px 2px rgba(0,0,0,0.04)',
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(40px, 5vw, 96px)', paddingRight: 'clamp(40px, 5vw, 96px)' }}>
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ZionEnterprises/logo-transparent.png"
              alt="Arthur Jordan Realtor — Your Home Buying Specialist"
              style={{
                height: '72px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                filter: 'contrast(1.3) saturate(1.2)',
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-body font-medium rounded-lg transition-colors duration-300 text-navy/60 hover:text-navy hover:bg-navy/[0.04]"
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(10,31,68,0.15)] border border-gray-border/30 overflow-hidden p-2"
                    style={{ width: '540px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-bg transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gold/[0.08] flex items-center justify-center shrink-0 group-hover:bg-gold/[0.15] transition-colors">
                          <service.icon className="w-3.5 h-3.5 text-gold" />
                        </div>
                        <div>
                          <span className="text-[12px] font-heading font-semibold text-navy block leading-tight">{service.name}</span>
                          <span className="text-[10px] font-body text-gray-text">{service.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-body font-medium rounded-lg transition-colors duration-300 text-navy/60 hover:text-navy hover:bg-navy/[0.04]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/quiz"
              className="ml-3 group flex items-center gap-2 px-6 py-2.5 bg-gold hover:bg-gold-light text-navy font-heading font-bold text-[13px] rounded-lg transition-all duration-300 hover:shadow-[0_8px_24px_-6px_rgba(212,160,23,0.4)]"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-lg transition-colors text-navy hover:bg-navy/[0.04]"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-border/20 overflow-hidden"
          >
            <div className="space-y-1" style={{ padding: '32px 24px' }}>
              <p className="text-[10px] font-heading font-bold text-gray-text/50 uppercase tracking-[0.2em] mb-3 px-3">Services</p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 text-navy text-[14px] font-body font-medium rounded-lg hover:bg-gray-bg transition-colors"
                >
                  <service.icon className="w-4 h-4 text-gold" />
                  {service.name}
                </Link>
              ))}
              <div className="h-px bg-gray-border/20 my-4" />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-navy text-[14px] font-body font-medium rounded-lg hover:bg-gray-bg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/quiz"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gold text-navy font-heading font-bold text-[14px] rounded-lg"
                >
                  See What You Qualify For
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
