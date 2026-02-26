'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import {
  Home, Key, Users, CreditCard, ArrowRight,
  Star, MapPin, CheckCircle2, Phone,
} from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { countyRegions } from '@/data/counties';

/* ——— Animations ——— */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ——— Data ——— */
const services = [
  {
    icon: Home,
    title: 'First Time Home Buyer',
    desc: 'Access Maryland\'s MMP programs, up to $6,000 in down payment assistance, and statewide grants.',
    href: '/first-time-buyer',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  },
  {
    icon: Key,
    title: 'Rent To Own',
    desc: 'Move into your future home now. Build credit and savings while you live there.',
    href: '/rent-to-own',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80',
  },
  {
    icon: Users,
    title: 'Renters to Homeowners',
    desc: 'Programs for every credit level. Good, bad, or none — we build a path that works.',
    href: '/renters-to-homeowners',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  },
  {
    icon: CreditCard,
    title: 'Credit Repair',
    desc: 'Targeted credit restoration designed to get you mortgage-ready, not just score-boosted.',
    href: '/credit-repair',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
  },
];

const steps = [
  {
    num: '01',
    title: 'Take Our 2-Minute Quiz',
    desc: 'Answer a few questions about your goals, credit, and budget. No judgment — just honest matching.',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=80',
  },
  {
    num: '02',
    title: 'Get Your Free Plan',
    desc: 'We analyze your answers and build a personalized roadmap with the programs you qualify for.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80',
  },
  {
    num: '03',
    title: 'Move Into Your Home',
    desc: 'Whether it\'s 30 days or 12 months, we walk with you every step until you have the keys.',
    img: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&q=80',
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO — Full-screen cinematic with background image
      ══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 -top-[50px] -bottom-[50px]">
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&q=80"
            alt="Beautiful Maryland home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-navy-dark/30" />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent z-20" />

        <div className="relative z-10 w-full" style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(40px, 5vw, 96px)', paddingRight: 'clamp(40px, 5vw, 96px)', paddingTop: '128px', paddingBottom: '0' }}>
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="show">

              {/* Headline */}
              <motion.h1
                variants={fadeUp} custom={1}
                className="text-[clamp(2.8rem,6vw,4.8rem)] font-heading font-800 text-white leading-[1.08] mb-6"
              >
                Your Path From
                <br />
                Renting to{' '}
                <span className="relative inline-block text-gold">
                  Owning
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M0 6C50 2 150 2 200 6" stroke="#D4A017" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp} custom={2}
                className="text-white/60 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl"
              >
                We connect Maryland renters with homeownership programs, down payment assistance, and expert guidance — no matter your credit situation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 mb-20">
                <Link
                  href="/quiz"
                  className="group flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold-light text-navy font-heading font-bold text-[15px] rounded-lg transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(212,160,23,0.5)]"
                >
                  See What You Qualify For
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-heading font-semibold text-[15px] rounded-lg border border-white/20 transition-all duration-300"
                >
                  How It Works
                </Link>
              </motion.div>

              {/* Stats Bar */}
              <motion.div
                variants={fadeUp} custom={4}
                className="grid grid-cols-3 gap-8 max-w-lg"
              >
                {[
                  { value: '760K+', label: 'Eligible Renters' },
                  { value: '24', label: 'Counties Served' },
                  { value: '15+', label: 'Active Programs' },
                ].map((s) => (
                  <div key={s.label} className="border-l-2 border-gold/30 pl-5">
                    <p className="text-3xl font-heading font-800 text-white">{s.value}</p>
                    <p className="text-white/40 text-[13px] font-body mt-1">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TRUST BAR — Scrolling credentials
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-navy py-4 overflow-hidden border-b border-white/5">
        <div className="flex marquee-track whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center shrink-0">
              {[
                'Maryland Mortgage Program',
                'FHA & Conventional Loans',
                'Down Payment Assistance up to $6,000',
                'Rent-to-Own Programs',
                'Credit Restoration Services',
                'All 24 Jurisdictions',
                'Free Homeownership Quiz',
              ].map((item) => (
                <span key={`${setIdx}-${item}`} className="flex items-center gap-3 px-6">
                  <Star className="w-3 h-3 fill-gold text-gold shrink-0" />
                  <span className="text-white/50 text-[12px] font-heading font-semibold tracking-wider uppercase">{item}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SERVICES — Image-backed cards with overlays
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'white' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(40px, 5vw, 96px)', paddingRight: 'clamp(40px, 5vw, 96px)' }}>
          {/* Section Header */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-[clamp(2rem,4vw,3rem)] font-heading font-800 text-navy mb-5">
              Four Paths to Homeownership
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-gray-text text-base font-body max-w-lg mx-auto">
              Every renter has a different starting point. We meet you exactly where you are.
            </motion.p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={s.href}
                  className="group card-zoom relative block h-[420px] rounded-2xl overflow-hidden"
                >
                  {/* Card background image */}
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover card-img"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors duration-300">
                      <s.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl mb-2">{s.title}</h3>
                    <p className="text-white/50 text-[14px] font-body leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex items-center gap-2 text-gold text-[13px] font-heading font-semibold group-hover:gap-3 transition-all duration-300">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CREDIT PATHWAYS — Bold visual tiers
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '96px', paddingBottom: '96px', background: '#F5F6FA' }}>
        {/* Subtle dot grid background */}
        <div className="absolute inset-0" style={{ opacity: 0.03, backgroundImage: 'radial-gradient(circle, #0A1F44 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative" style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(40px, 5vw, 96px)', paddingRight: 'clamp(40px, 5vw, 96px)' }}>
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-[clamp(2rem,4vw,3rem)] font-heading font-800 text-navy mb-5">
              Which Path Is Right For You?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-gray-text text-base font-body max-w-md mx-auto">
              Your credit score shapes your options — but it never closes the door.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 680+ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.7 }}
              className="relative bg-white rounded-2xl overflow-hidden border border-gray-border/50 group hover:shadow-[0_30px_80px_-20px_rgba(22,163,74,0.15)] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Top color band */}
              <div className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-600" />
              <div className="p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-[12px] font-heading font-bold tracking-wider uppercase px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  680+
                </div>
                <h3 className="font-heading font-bold text-navy text-2xl mb-3">Strong Position</h3>
                <p className="text-gray-text text-[15px] font-body leading-relaxed mb-8">
                  Conventional loans, full MMP access, best rates. Many close within 60 days.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Best interest rates', 'Full program access', 'Fast 60-day closing'].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-navy/70 text-[14px] font-body">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/quiz" className="group/btn flex items-center gap-2 text-navy font-heading font-bold text-[14px] hover:text-emerald-600 transition-colors">
                  Get started <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* 580-679 — Featured/highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="relative bg-navy rounded-2xl overflow-hidden md:-mt-4 md:mb-[-16px] group hover:shadow-[0_30px_80px_-20px_rgba(212,160,23,0.25)] transition-all duration-500"
            >
              <div className="h-2 bg-gradient-to-r from-gold to-gold-light" />
              {/* Popular badge */}
              <div className="absolute top-6 right-6 bg-gold text-navy text-[10px] font-heading font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                Most Common
              </div>
              <div className="p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold text-[12px] font-heading font-bold tracking-wider uppercase px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  580–679
                </div>
                <h3 className="font-heading font-bold text-white text-2xl mb-3">Building Momentum</h3>
                <p className="text-white/50 text-[15px] font-body leading-relaxed mb-8">
                  FHA loans, targeted DPA, credit optimization. A short prep period unlocks major savings.
                </p>
                <ul className="space-y-3 mb-8">
                  {['FHA loan eligible', 'Down payment assistance', 'Credit coaching included'].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-white/70 text-[14px] font-body">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/quiz" className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gold hover:bg-gold-light text-navy font-heading font-bold text-[14px] rounded-lg transition-all duration-300">
                  Get started <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Below 580 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative bg-white rounded-2xl overflow-hidden border border-gray-border/50 group hover:shadow-[0_30px_80px_-20px_rgba(10,31,68,0.12)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-2 bg-gradient-to-r from-slate-400 to-navy" />
              <div className="p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 text-[12px] font-heading font-bold tracking-wider uppercase px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-navy" />
                  Below 580
                </div>
                <h3 className="font-heading font-bold text-navy text-2xl mb-3">Fresh Start</h3>
                <p className="text-gray-text text-[15px] font-body leading-relaxed mb-8">
                  Credit repair pathway, rent-to-own bridge, 6–12 month plan to mortgage readiness.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Credit repair pathway', 'Rent-to-own option', 'Step-by-step plan'].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-navy shrink-0" />
                      <span className="text-navy/70 text-[14px] font-body">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/quiz" className="group/btn flex items-center gap-2 text-navy font-heading font-bold text-[14px] hover:text-navy-light transition-colors">
                  Get started <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          HOW IT WORKS — 3 steps with images
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-[clamp(2rem,4vw,3rem)] font-heading font-800 text-navy mb-5">
              Three Simple Steps
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                {/* Image */}
                <div className="relative h-[240px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent" />
                  {/* Step number badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gold flex items-center justify-center">
                    <span className="text-navy font-heading font-800 text-[15px]">{step.num}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-navy text-xl mb-2">{step.title}</h3>
                <p className="text-gray-text text-[14px] font-body leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-14"
          >
            <Link
              href="/quiz"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-navy hover:bg-navy-light text-white font-heading font-bold text-[15px] rounded-lg transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(10,31,68,0.3)]"
            >
              Start Your Quiz
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TESTIMONIALS — Dark section with real depth
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=70"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(6, 15, 34, 0.95)' }} />
        </div>

        <div className="relative" style={{ zIndex: 10, maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(40px, 5vw, 96px)', paddingRight: 'clamp(40px, 5vw, 96px)' }}>
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-[clamp(2rem,4vw,3rem)] font-heading font-800 text-white mb-5">
              Real Results From{' '}
              <span className="text-gold">Real People</span>
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.08] transition-colors duration-500"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/55 text-[14px] font-body leading-[1.8] mb-7">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Person */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  {/* Avatar circle with initial */}
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-heading font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-heading font-semibold text-[14px]">{t.name}</p>
                    <p className="text-white/30 text-[12px] font-body">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          COUNTY COVERAGE — Clean grid with visual marker
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'white' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: 'clamp(40px, 5vw, 96px)', paddingRight: 'clamp(40px, 5vw, 96px)' }}>
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          >
            <div className="grid lg:grid-cols-[1fr_2.2fr] gap-16 lg:gap-24">
              <div>
                <motion.h2 variants={fadeUp} custom={0} className="text-[clamp(2rem,3.5vw,2.8rem)] font-heading font-800 text-navy mb-5 leading-tight">
                  Serving Every Corner of Maryland
                </motion.h2>
                <motion.p variants={fadeUp} custom={1} className="text-gray-text text-[15px] font-body leading-relaxed mb-8">
                  From Western Maryland to the Eastern Shore — all 24 jurisdictions. If you rent in Maryland, we can help.
                </motion.p>
                <motion.div variants={fadeUp} custom={2} className="inline-flex items-center gap-3 bg-navy/5 rounded-xl px-5 py-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span className="text-navy font-heading font-bold text-[14px]">24 counties & Baltimore City</span>
                </motion.div>
              </div>

              {/* Right — county grid */}
              <motion.div variants={fadeUp} custom={2} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                {Object.entries(countyRegions).map(([region, counties]) => (
                  <div key={region}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <h3 className="font-heading font-bold text-navy text-[13px] tracking-wide uppercase">{region}</h3>
                    </div>
                    <div className="space-y-1.5 pl-4 border-l-2 border-gray-border/50">
                      {counties.map((county) => (
                        <p key={county} className="text-gray-text text-[13px] font-body">{county}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA — Full bleed with background image
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '128px', paddingBottom: '128px' }}>
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=70"
            alt="Maryland home interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(6,15,34,0.95), rgba(10,31,68,0.9), rgba(6,15,34,0.95))' }} />
        </div>

        {/* Decorative gold line */}
        <div className="absolute top-0 left-0 right-0" style={{ height: '3px', background: 'linear-gradient(to right, transparent, #D4A017, transparent)', zIndex: 10 }} />

        <div className="relative text-center" style={{ zIndex: 10, maxWidth: '768px', margin: '0 auto', paddingLeft: 'clamp(40px, 5vw, 96px)', paddingRight: 'clamp(40px, 5vw, 96px)' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2
              variants={fadeUp} custom={1}
              className="text-[clamp(2.4rem,5vw,3.8rem)] font-heading font-800 text-white leading-[1.1] mb-8"
            >
              Ready to Stop Renting?
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-white/40 text-lg font-body mb-12 max-w-md mx-auto leading-relaxed">
              Take the first step. Our free quiz matches you with Maryland programs in under 2 minutes.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quiz"
                className="group flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-navy font-heading font-bold text-base rounded-lg transition-all duration-300 hover:shadow-[0_24px_60px_-12px_rgba(212,160,23,0.4)]"
              >
                See What You Qualify For
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-4 text-white/30 text-[14px] font-body">
                <Phone className="w-4 h-4" />
                (443) 555-1234
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
