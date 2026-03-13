import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, TrendingUp, ShoppingBag, Globe, Check, Zap, Play, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'
import Testimonials from '@/components/Testimonials'
import AnimateSection from '@/components/AnimateSection'
import ReviewsTicker from '@/components/ReviewsTicker'
import HeroWorkflow from '@/components/HeroWorkflow'
import { services, blogPosts } from '@/lib/data'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Konvertio | Static Ads, CRO & Shopify Ekspert',
  description: 'Jeg hjælper danske e-commerce virksomheder med at vækste online gennem static ads der konverterer, CRO-analyser og Shopify-webshops.',
  alternates: { canonical: SITE_URL },
}

const iconMap: Record<string, React.ElementType> = {
  Target, TrendingUp, ShoppingBag, Globe,
}

const badges = [
  { icon: Target, label: 'Static Ads Ekspert' },
  { icon: TrendingUp, label: 'CRO & Konvertering' },
  { icon: ShoppingBag, label: 'Shopify Specialist' },
]

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center pt-36 pb-24 px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-600/6 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-brand-700/4 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-56 sm:h-44 md:h-32 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: copy */}
            <div>
              <AnimateSection delay={0} animation="fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 backdrop-blur border border-brand-600/20 text-sm text-brand-400 mb-8">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Tilgængelig for nye projekter
                </div>
              </AnimateSection>

              <AnimateSection delay={100}>
                <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-8">
                  Løft dit brand med{' '}
                  <span className="gradient-text-brand">stærke</span>{' '}
                  kreative løsninger
                </h1>
              </AnimateSection>

              <AnimateSection delay={200}>
                <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed mb-10">
                  Jeg hjælper danske e-commerce virksomheder med at skabe static ads der konverterer,
                  Shopify-webshops der sælger, og CRO-analyser der giver resultater.
                </p>
              </AnimateSection>

              <AnimateSection delay={300}>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link href="/ydelser" className="btn-primary text-base px-8 py-4">
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
                  {badges.map((badge, i) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-neutral-900/50 border border-neutral-800/60 backdrop-blur-sm hover:border-brand-600/30 hover:bg-neutral-900/70 transition-all duration-300"
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      <badge.icon className="w-4 h-4 text-brand-500" />
                      <span className="text-sm text-neutral-300">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </AnimateSection>
            </div>

            {/* Right: animated workflow board (desktop only) */}
            <AnimateSection delay={300} animation="slide-right" className="hidden lg:flex items-center justify-center pt-8">
              <HeroWorkflow />
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* Reviews ticker */}
      <ReviewsTicker />

      {/* Problem / Agitation */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
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
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800/80 border border-neutral-700/50">
                <div className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-brand-600/15 border border-brand-600/25 flex items-center justify-center mx-auto mb-6 animate-float" style={{ animationDuration: '5s' }}>
                    <Sparkles className="w-8 h-8 text-brand-400" />
                  </div>
                  <p className="text-xl font-bold text-white mb-2">Strategisk indhold</p>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-xs mx-auto">
                    Jeg analyserer, tester og optimerer – så dit budget arbejder smartere, ikke bare hårdere.
                  </p>
                </div>
                {/* Feature card inside – no overlap */}
                <div className="border-t border-neutral-800/50 px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-600/15 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Konkret strategi</p>
                    <p className="text-xs text-neutral-500">Fra første dag</p>
                  </div>
                </div>
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-10 md:py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/20 to-transparent pointer-events-none" />
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

          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-12">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Target
              return (
                <AnimateSection key={service.slug} delay={i * 100} animation="scale">
                  <Link
                    href={`/ydelser/${service.slug}`}
                    className="group flex flex-col p-5 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/50 card-hover h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-brand-600/10 transition-all duration-700" />
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-600/20 transition-colors duration-300">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-500" />
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight">{service.shortTitle}</h3>
                      <p className="text-neutral-400 leading-relaxed mb-4 md:mb-6 flex-1 text-sm md:text-base hidden sm:block">{service.shortDescription}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-brand-500 group-hover:text-brand-400 transition-colors">
                        Se ydelse
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </Link>
                </AnimateSection>
              )
            })}
          </div>

          <AnimateSection className="text-center">
            <Link href="/ydelser" className="btn-secondary">
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
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-800/50 relative">
                  <Image
                    src="/images/frederik.png"
                    alt="Frederik Høgh Simonsen"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
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
                  Jeg er Frederik – ekspert i udvikling af shops til SMV&apos;er til ecommerce, med dyb erfaring i CRO-gennemgange og static ads der konverterer.
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
                    <span key={skill} className="px-3 py-1.5 rounded-full bg-neutral-800/60 border border-neutral-700/50 text-neutral-300 text-sm hover:border-brand-600/30 hover:text-white transition-all duration-200">
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
        <div className="absolute top-0 left-0 right-0 h-32 sm:h-24 md:hidden bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-10" />
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
              <Link href="/ydelser" className="btn-secondary text-base px-10 py-4">
                Se ydelser & priser
              </Link>
            </div>
          </AnimateSection>
        </div>
      </section>
    </div>
  )
}
