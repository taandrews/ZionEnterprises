'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Home, Key, Users, CreditCard,
  GraduationCap, BedDouble, Shield, Heart, Building, TrendingUp,
  CheckCircle2, Phone, MapPin,
} from 'lucide-react';
import { countyRegions } from '@/data/counties';

/* ——— Hero-only animation ——— */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ——— Services data (10 from Arthur) ——— */
const services = [
  { icon: Home, title: 'First Time Home Buyers', desc: 'MMP programs, down payment assistance & statewide grants', href: '/first-time-buyer' },
  { icon: GraduationCap, title: 'Home Ownership Workshop Classes', desc: 'Education & preparation for the buying process', href: '/workshops' },
  { icon: Users, title: 'Turning Renters into Home Owners', desc: 'Programs for good, bad & no credit — we build a path', href: '/renters-to-homeowners' },
  { icon: BedDouble, title: 'Rooms For Rent', desc: 'Affordable room rental options across Maryland', href: '/rooms-for-rent' },
  { icon: CreditCard, title: 'Credit Restoration', desc: 'Get mortgage-ready with targeted credit repair', href: '/credit-repair' },
  { icon: Shield, title: 'Helping Our Veterans Become Home Owners', desc: 'Serving those who served our country', href: '/veterans' },
  { icon: Key, title: 'Rent To Own', desc: 'Move in now, buy later — good, bad & no credit', href: '/rent-to-own' },
  { icon: Heart, title: 'Helping the Homeless Become Home Owners', desc: 'A fresh start and a real path to owning a home', href: '/homeless-to-homeowners' },
  { icon: Building, title: 'Want to Sell Your Home', desc: 'List with Arthur Jordan and get top dollar', href: '/sell-your-home' },
  { icon: TrendingUp, title: 'Looking to Buy Investment Properties', desc: 'Build your real estate portfolio in Maryland', href: '/investment-properties' },
];

/* ——— Credit tiers ——— */
const tiers = [
  {
    badge: '680+', title: 'Strong Position', color: 'emerald',
    desc: 'Conventional loans, full MMP access, best rates. Many close within 60 days.',
    features: ['Best interest rates', 'Full program access', 'Fast 60-day closing'],
  },
  {
    badge: '580–679', title: 'Building Momentum', color: 'gold', featured: true,
    desc: 'FHA loans, targeted DPA, credit optimization. A short prep period unlocks major savings.',
    features: ['FHA loan eligible', 'Down payment assistance', 'Credit coaching included'],
  },
  {
    badge: 'Below 580', title: 'Fresh Start', color: 'navy',
    desc: 'Credit repair pathway, rent-to-own bridge, 6–12 month plan to mortgage readiness.',
    features: ['Credit repair pathway', 'Rent-to-own option', 'Step-by-step plan'],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&q=80"
            alt="Beautiful Maryland home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,34,0.92) 0%, rgba(10,31,68,0.75) 50%, rgba(6,15,34,0.6) 100%)' }} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20" style={{ height: '3px', background: 'linear-gradient(to right, transparent, #D4A017, transparent)' }} />

        <div className="relative z-10 w-full" style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 96px)', paddingRight: 'clamp(24px, 5vw, 96px)', paddingTop: '140px', paddingBottom: '80px' }}>
          <div style={{ maxWidth: '720px' }}>
            <motion.div initial="hidden" animate="show">
              <motion.h1
                variants={fadeUp} custom={1}
                className="font-heading font-800 text-white leading-[1.08]"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', marginBottom: '24px' }}
              >
                Your Home Buying{' '}
                <span className="text-gold">Specialist</span>
              </motion.h1>

              <motion.p
                variants={fadeUp} custom={2}
                className="text-white/60 font-body leading-relaxed"
                style={{ fontSize: 'clamp(16px, 2vw, 20px)', marginBottom: '40px', maxWidth: '560px' }}
              >
                Arthur Jordan connects Maryland renters with homeownership programs, down payment assistance, and expert guidance — no matter your credit situation.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap" style={{ gap: '16px' }}>
                <Link
                  href="/quiz"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '12px',
                    padding: '16px 32px', background: '#D4A017', color: '#0A1F44',
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px',
                    borderRadius: '8px', textDecoration: 'none',
                  }}
                >
                  See What You Qualify For
                  <ArrowRight style={{ width: '16px', height: '16px' }} />
                </Link>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '12px',
                    padding: '16px 32px', background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 600,
                    fontSize: '15px', borderRadius: '8px', textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <Phone style={{ width: '16px', height: '16px' }} />
                  Contact Arthur
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES — All 10 ═══════ */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 96px)', paddingRight: 'clamp(24px, 5vw, 96px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2
              className="font-heading font-800 text-navy"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '16px' }}
            >
              What We Do
            </h2>
            <p
              className="text-gray-text font-body"
              style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}
            >
              Full-service homeownership solutions for every situation.
            </p>
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  textAlign: 'center', padding: '32px 16px 28px',
                  borderRadius: '16px', background: '#ffffff',
                  border: '1px solid #E2E4EA',
                  textDecoration: 'none', transition: 'all 0.35s ease',
                  position: 'relative', overflow: 'hidden',
                }}
                className="group hover:border-gold/50 hover:shadow-[0_12px_40px_-12px_rgba(212,160,23,0.2)]"
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(to right, #D4A017, #E8BF4A)',
                  opacity: 0, transition: 'opacity 0.35s ease',
                }} className="group-hover:!opacity-100" />
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(212,160,23,0.1), rgba(212,160,23,0.04))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px', transition: 'all 0.35s ease',
                }} className="group-hover:scale-110">
                  <s.icon style={{ width: '22px', height: '22px', color: '#D4A017' }} />
                </div>
                <h3 className="font-heading font-bold text-navy" style={{ fontSize: '14px', lineHeight: '1.3', marginBottom: '8px' }}>
                  {s.title}
                </h3>
                <p className="text-gray-text font-body" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>

          {/* Responsive override for smaller screens */}
          <style>{`
            @media (max-width: 1024px) {
              .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
            @media (max-width: 640px) {
              .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ═══════ CREDIT PATHWAYS ═══════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F5F6FA' }}>
        <div className="absolute inset-0" style={{ opacity: 0.03, backgroundImage: 'radial-gradient(circle, #0A1F44 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative" style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 96px)', paddingRight: 'clamp(24px, 5vw, 96px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="font-heading font-800 text-navy" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
              Which Path Is Right For You?
            </h2>
            <p className="text-gray-text font-body" style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Your credit score shapes your options — but it never closes the door.
            </p>
          </div>

          <div className="grid md:grid-cols-3" style={{ gap: '24px' }}>
            {tiers.map((tier) => {
              const isGold = tier.color === 'gold';
              const isEmerald = tier.color === 'emerald';
              const bandColor = isEmerald
                ? 'linear-gradient(to right, #34d399, #059669)'
                : isGold
                  ? 'linear-gradient(to right, #D4A017, #E8BF4A)'
                  : 'linear-gradient(to right, #94a3b8, #0A1F44)';
              const badgeBg = isEmerald ? '#ecfdf5' : isGold ? 'rgba(212,160,23,0.1)' : '#f1f5f9';
              const badgeText = isEmerald ? '#047857' : isGold ? '#D4A017' : '#475569';
              const dotColor = isEmerald ? '#10b981' : isGold ? '#D4A017' : '#0A1F44';
              const checkColor = isEmerald ? '#10b981' : isGold ? '#D4A017' : '#0A1F44';

              return (
                <div
                  key={tier.badge}
                  style={{
                    borderRadius: '16px', overflow: 'hidden',
                    background: isGold ? '#0A1F44' : '#ffffff',
                    border: isGold ? 'none' : '1px solid #E2E4EA',
                  }}
                >
                  <div style={{ height: '4px', background: bandColor }} />
                  <div style={{ padding: '36px' }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      background: badgeBg, color: badgeText,
                      fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      padding: '6px 14px', borderRadius: '999px', marginBottom: '20px',
                    }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: dotColor }} />
                      {tier.badge}
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)', fontWeight: 700,
                      fontSize: '22px', color: isGold ? '#ffffff' : '#0A1F44',
                      marginBottom: '10px',
                    }}>
                      {tier.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '14px',
                      color: isGold ? 'rgba(255,255,255,0.5)' : '#5A6376',
                      lineHeight: '1.6', marginBottom: '24px',
                    }}>
                      {tier.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {tier.features.map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <CheckCircle2 style={{ width: '16px', height: '16px', color: checkColor, flexShrink: 0 }} />
                          <span style={{
                            fontFamily: 'var(--font-body)', fontSize: '13px',
                            color: isGold ? 'rgba(255,255,255,0.7)' : 'rgba(10,31,68,0.7)',
                          }}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/quiz"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px',
                        color: isGold ? '#D4A017' : '#0A1F44', textDecoration: 'none',
                      }}
                    >
                      Take the quiz <ArrowRight style={{ width: '14px', height: '14px' }} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ COUNTY COVERAGE ═══════ */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 96px)', paddingRight: 'clamp(24px, 5vw, 96px)' }}>
          <div className="grid lg:grid-cols-[1fr_2.2fr]" style={{ gap: '64px' }}>
            <div>
              <h2
                className="font-heading font-800 text-navy leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '16px' }}
              >
                Serving All of Maryland
              </h2>
              <p className="text-gray-text font-body" style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                From Western Maryland to the Eastern Shore — all 24 jurisdictions. If you rent in Maryland, Arthur Jordan can help.
              </p>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: 'rgba(10,31,68,0.04)', borderRadius: '12px',
                padding: '12px 20px',
              }}>
                <MapPin style={{ width: '18px', height: '18px', color: '#D4A017' }} />
                <span className="font-heading font-bold text-navy" style={{ fontSize: '14px' }}>24 counties & Baltimore City</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '32px' }}>
              {Object.entries(countyRegions).map(([region, counties]) => (
                <div key={region}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#D4A017' }} />
                    <h3 className="font-heading font-bold text-navy" style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{region}</h3>
                  </div>
                  <div style={{ paddingLeft: '16px', borderLeft: '2px solid #E2E4EA', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {counties.map((county) => (
                      <p key={county} className="text-gray-text font-body" style={{ fontSize: '13px' }}>{county}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=70"
            alt="Maryland home interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,34,0.88), rgba(10,31,68,0.75), rgba(6,15,34,0.88))' }} />
        </div>

        <div className="absolute top-0 left-0 right-0" style={{ height: '3px', background: 'linear-gradient(to right, transparent, #D4A017, transparent)', zIndex: 10 }} />

        <div className="relative" style={{ zIndex: 10, maxWidth: '680px', margin: '0 auto', paddingLeft: 'clamp(24px, 5vw, 96px)', paddingRight: 'clamp(24px, 5vw, 96px)', textAlign: 'center' }}>
          <h2
            className="font-heading font-800 text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: '1.1', marginBottom: '20px' }}
          >
            Ready to Stop Renting?
          </h2>
          <p className="text-white/40 font-body" style={{ fontSize: '17px', lineHeight: '1.6', marginBottom: '40px' }}>
            Take the first step. Our free quiz matches you with Maryland programs in under 2 minutes.
          </p>
          <Link
            href="/quiz"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              padding: '18px 40px', background: '#D4A017', color: '#0A1F44',
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px',
              borderRadius: '10px', textDecoration: 'none',
            }}
          >
            See What You Qualify For
            <ArrowRight style={{ width: '18px', height: '18px' }} />
          </Link>
        </div>
      </section>
    </>
  );
}
