import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, TrendingUp, ShoppingBag, Globe, Check, Zap, Play, Star, BarChart3, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'
import Testimonials from '@/components/Testimonials'
import AnimateSection from '@/components/AnimateSection'
import { services, blogPosts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Konvertio | Static Ads, CRO & Shopify Ekspert',
  description: 'Jeg hjælper danske e-commerce virksomheder med at vækste online gennem static ads der konverterer, CRO-analyser og Shopify-webshops.',
  alternates: { canonical: 'https://konvertio.dk' },
}

const iconMap: Record<string, React.ElementType> = {
  Target, TrendingUp, ShoppingBag, Globe,
}

const badges = [
  { icon: Target, label: 'Static Ads Ekspert' },
  { icon: TrendingUp, label: 'CRO & Konvertering' },
  { icon: ShoppingBag, label: 'Shopify Specialist' },
]

const statsData = [
  { value: '50+', label: 'Projekter leveret', icon: BarChart3 },
  { value: '4.9/5', label: 'Gennemsnitlig bedømmelse', icon: Star },
  { value: '30%+', label: 'Gns. konverteringsstigning', icon: TrendingUp },
]

const trustLogos = [
  'E-commerce brands', 'Shopify butikker', 'SoMe-bureauer', 'Startups', 'Etablerede virksomheder',
]

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-32 px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-600/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full">
          <AnimateSection delay={0} animation="fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/60 backdrop-blur border border-neutral-800/50 text-sm text-neutral-400 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Tilgængelig for nye projekter
            </div>
          </AnimateSection>

          <AnimateSection delay={100}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-5xl mb-8">
              Løft dit brand med{' '}
              <span className="gradient-text-brand">stærke</span>{' '}
              kreative løsninger
            </h1>
          </AnimateSection>

          <AnimateSection delay={200}>
            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-12">
              Jeg hjælper danske e-commerce virksomheder med at skabe static ads der konverterer,
              Shopify-webshops der sælger, og CRO-analyser der giver resultater.
            </p>
          </AnimateSection>

          <AnimateSection delay={300}>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/services" className="btn-primary text-base px-8 py-4">
                Se mine ydelser
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/kontakt" className="btn-secondary text-base px-8 py-4">
                <Play className="w-4 h-4" />
                Kontakt mig
              </Link>
            </div>
          </AnimateSection>

          <AnimateSection delay={400}>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-900/40 border border-neutral-800/50 backdrop-blur-sm"
                >
                  <badge.icon className="w-4 h-4 text-brand-500" />
                  <span className="text-sm text-neutral-300">{badge.label}</span>
                </div>
              ))}
            </div>
          </AnimateSection>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 px-6 border-y border-neutral-800/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            {trustLogos.map((name) => (
              <span key={name} className="text-sm text-neutral-600 font-medium uppercase tracking-wider whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 md:py-16 px-6 relative">
        <div className="absolute inset-0 glow-brand pointer-events-none opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {statsData.map((stat, i) => (
              <AnimateSection key={stat.label} delay={i * 100} animation="scale">
                <div className="text-center p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 card-hover">
                  <stat.icon className="w-6 h-6 text-brand-500 mx-auto mb-4" />
                  <p className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              </AnimateSection>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Agitation */}
      <section className="py-10 md:py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateSection animation="slide-left">
              <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-wider mb-4">
                Problemet
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Træt af at poste indhold der{' '}
                <span className="gradient-text-brand">ikke konverterer?</span>
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                De fleste e-commerce brands bruger tusindvis af kroner på ads der ikke performer.
                Problemet er sjældent budgettet – det er kreativet og strategien bag.
              </p>
              <div className="space-y-4">
                {[
                  'Dine ads får klik men ingen konverteringer',
                  'Du tester creatives uden en klar strategi',
                  'Din webshop mister kunder i checkout',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-brand-500" />
                    </div>
                    <span className="text-neutral-300">{point}</span>
                  </div>
                ))}
              </div>
            </AnimateSection>

            <AnimateSection animation="slide-right" delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Sparkles className="w-16 h-16 text-brand-500/30 mx-auto mb-4" />
                    <p className="text-2xl font-bold text-white mb-2">+200%</p>
                    <p className="text-neutral-500 text-sm">Gennemsnitlig ROAS-stigning</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800/50 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Konvertering ↑</p>
                      <p className="text-xs text-neutral-500">Gennemsnit 30%+</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-10 md:py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/30 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <AnimateSection className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-wider mb-4">
              Ydelser
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Alt hvad du skal bruge for at{' '}
              <span className="gradient-text-brand">accelerere</span> dit brand
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto text-left md:text-center">
              Fra static ads der stopper scroll til webshops der konverterer – her er mine ydelser.
            </p>
          </AnimateSection>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Target
              return (
                <AnimateSection key={service.slug} delay={i * 100} animation="scale">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-col p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 card-hover h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-brand-600/10 transition-all duration-700" />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center mb-6 group-hover:bg-brand-600/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-brand-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.shortTitle}</h3>
                      <p className="text-neutral-400 leading-relaxed mb-6 flex-1">{service.shortDescription}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 group-hover:text-brand-400 transition-colors">
                        Se ydelse
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </Link>
                </AnimateSection>
              )
            })}
          </div>

          <AnimateSection className="text-center">
            <Link href="/services" className="btn-secondary">
              Se alle ydelser og priser
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateSection>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* About Preview */}
      <section className="py-10 md:py-20 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateSection animation="slide-left">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800/50 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-brand-600/20">
                      <span className="text-white text-4xl font-bold">F</span>
                    </div>
                    <p className="text-white font-semibold text-lg">Frederik Høgh Simonsen</p>
                    <p className="text-neutral-500 text-sm mt-1">Konvertio · Viborg</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800/50 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">K</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Konvertio</p>
                      <p className="text-xs text-neutral-500">Viborg, Danmark</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateSection>

            <div>
              <AnimateSection delay={100}>
                <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-wider mb-4">
                  Om mig
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                  Indhold der føles ægte – fordi det er det
                </h2>
              </AnimateSection>

              <AnimateSection delay={200}>
                <p className="text-lg text-neutral-400 leading-relaxed mb-4">
                  Jeg er Frederik Høgh Simonsen – Shopify-ekspert med dyb erfaring i CRO-gennemgange,
                  Shopify-webshops og static ads der konverterer.
                </p>
              </AnimateSection>

              <AnimateSection delay={300}>
                <p className="text-neutral-500 leading-relaxed mb-8">
                  Baseret i Viborg og arbejder med kunder over hele Danmark.
                  Mit mål er simpelt: konkrete, brugbare løsninger – ikke lange rapporter der samler støv.
                </p>
              </AnimateSection>

              <AnimateSection delay={400}>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Shopify', 'CRO', 'Static Ads', 'Facebook Ads', 'WordPress', 'UX Design'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-full bg-neutral-800/50 border border-neutral-700/50 text-neutral-300 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </AnimateSection>

              <AnimateSection delay={500}>
                <div className="space-y-3 mb-8">
                  {['Gratis indledende samtale', 'Konkrete anbefalinger fra dag 1', 'Stopper ikke før du er tilfreds', 'Fast pris – ingen skjulte gebyrer'].map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-neutral-300">{b}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="text-sm text-neutral-300">Klar til nye projekter</span>
                  </div>
                </div>
              </AnimateSection>

              <AnimateSection delay={600}>
                <Link href="/om-mig" className="btn-ghost">
                  Læs mere om mig
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimateSection>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-10 md:py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/20 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <AnimateSection className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-wider mb-4">
              Blog & Viden
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Seneste indsigter
            </h2>
            <p className="text-lg text-neutral-400 max-w-xl mx-auto text-left md:text-center">
              Praktiske guides til dig der vil have mere ud af din webshop og markedsføring.
            </p>
          </AnimateSection>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {recentPosts.map((post, i) => (
              <AnimateSection key={post.slug} delay={i * 100}>
                <article className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video rounded-xl overflow-hidden bg-neutral-800 mb-4 border border-neutral-800/50">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-brand-600/10 border border-brand-600/20 text-xs font-medium text-brand-400 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-neutral-600">{post.readTime} læsning</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-500 line-clamp-2">{post.excerpt}</p>
                  </Link>
                </article>
              </AnimateSection>
            ))}
          </div>

          <AnimateSection className="text-center">
            <Link href="/blog" className="btn-secondary">
              Se alle blogindlæg
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-neutral-950 to-neutral-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-600/10 blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimateSection>
            <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-wider mb-6">
              Klar til at starte?
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Klar til at skabe indhold du er{' '}
              <span className="gradient-text-brand">stolt</span> af at dele?
            </h2>
            <p className="text-lg text-neutral-400 mb-12 max-w-xl mx-auto text-left md:text-center">
              Tag en uforpligtende snak om hvordan jeg kan hjælpe din virksomhed med at vækste online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary text-base px-10 py-4">
                Kontakt mig i dag
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-secondary text-base px-10 py-4">
                Se ydelser & priser
              </Link>
            </div>
          </AnimateSection>
        </div>
      </section>
    </div>
  )
}
