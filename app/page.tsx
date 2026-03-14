import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, TrendingUp, ShoppingBag, Globe, Check, Zap, Play, X } from 'lucide-react'
import type { Metadata } from 'next'
import Testimonials from '@/components/Testimonials'
import AnimateSection from '@/components/AnimateSection'
import ReviewsTicker from '@/components/ReviewsTicker'
import HeroWorkflow from '@/components/HeroWorkflow'
import { getAllBlogPosts } from '@/lib/sanity/fetchBlog'
import { getAllServices } from '@/lib/sanity/fetchServices'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Konvertio | Static Ads, CRO & Shopify Specialist',
  description: 'Jeg hjælper danske e-commerce virksomheder med at vækste online gennem static ads der konverterer, CRO-analyser og Shopify-webshops.',
  alternates: { canonical: SITE_URL },
}

const iconMap: Record<string, React.ElementType> = {
  Target, TrendingUp, ShoppingBag, Globe,
}

const badges = [
  { icon: Target, label: 'Static Ads' },
  { icon: TrendingUp, label: 'CRO & Konvertering' },
  { icon: ShoppingBag, label: 'Shopify' },
]

const problems = [
  { title: 'Ads der ikke konverterer', desc: 'Du bruger penge på annoncer, men får ikke salg tilbage' },
  { title: 'Svage creatives', desc: 'Dine annoncer bliver scrollet forbi uden engagement' },
  { title: 'Webshop drop-off', desc: 'Besøgende forlader din shop før de når til checkout' },
  { title: 'Uklar strategi', desc: 'Du ved ikke præcis hvor problemerne ligger' },
]

const solutions = [
  { title: 'Datadrevet tilgang', desc: 'Jeg finder præcis hvor du taber kunder og laver konkrete løsninger' },
  { title: 'Testede koncepter', desc: 'Static ads og designs der er bevist at stoppe scrollet og skabe salg' },
  { title: 'Hurtig eksekvering', desc: 'Fra analyse til implementation – jeg sætter det i værk med det samme' },
  { title: 'Løbende optimering', desc: 'Kontinuerlige forbedringer baseret på performance-data' },
]

export default async function HomePage() {
  const allPosts = await getAllBlogPosts()
  const recentPosts = allPosts.slice(0, 3)
  const services = await getAllServices()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-dark relative min-h-screen flex flex-col justify-center pt-36 pb-24 px-6 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-brand-500/30 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-brand-700/20 blur-[120px] pointer-events-none" />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/8 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: copy */}
            <div>
              <AnimateSection delay={0} animation="fade-in">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white mb-8">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm leading-none">★</span>
                    ))}
                  </div>
                  <span className="text-white/40">|</span>
                  <span>Hurtig levering · Professionelt resultat</span>
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
                <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-10">
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
                  <Link href="/kontakt" className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-base font-medium transition-all duration-300">
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
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <badge.icon className="w-4 h-4 text-brand-400" />
                      <span className="text-sm text-white font-medium">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </AnimateSection>
            </div>

            {/* Right: animated workflow board (desktop only) */}
            <AnimateSection delay={300} animation="slide-right" className="hidden lg:flex flex-col items-end gap-4 pt-8">
              <div className="inline-flex items-center gap-2 self-end px-4 py-2 rounded-full bg-green-500/15 border border-green-400/30 text-sm text-green-300">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                Klar til nye opgaver
              </div>
              <HeroWorkflow />
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* Reviews ticker */}
      <ReviewsTicker />

      {/* Problem / Solution – redesigned */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <AnimateSection className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">
              Kender du det?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
              Fra problem til løsning
            </h2>
          </AnimateSection>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Problems */}
            <AnimateSection animation="slide-left">
              <div className="rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm">
                <div className="px-6 py-5 border-b border-neutral-200/60 bg-neutral-50">
                  <h3 className="text-lg font-bold text-neutral-900">Kender du problemerne?</h3>
                </div>
                <div className="p-6 space-y-4 bg-white">
                  {problems.map((p) => (
                    <div key={p.title} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 text-sm">{p.title}</p>
                        <p className="text-sm text-neutral-500 mt-0.5">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateSection>

            {/* Solutions */}
            <AnimateSection animation="slide-right" delay={150}>
              <div className="rounded-2xl border border-brand-200/60 overflow-hidden shadow-sm bg-gradient-to-br from-brand-50/60 to-white">
                <div className="px-6 py-5 border-b border-brand-200/40 bg-brand-50/80">
                  <h3 className="text-lg font-bold text-neutral-900">Sådan løser jeg det</h3>
                </div>
                <div className="p-6 space-y-4">
                  {solutions.map((s) => (
                    <div key={s.title} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-green-50 border border-green-200/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 text-sm">{s.title}</p>
                        <p className="text-sm text-neutral-600 mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Link href="/kontakt" className="btn-primary w-full justify-center">
                      Start din gratis samtale
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-10 md:py-20 px-6 relative bg-gradient-to-b from-blue-50 to-white">
        <div className="relative max-w-7xl mx-auto">
          <AnimateSection className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">
              Ydelser
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
              Alt hvad du skal bruge for at{' '}
              <span className="gradient-text-brand">accelerere</span> dit brand
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-left md:text-center">
              Fra static ads der stopper scroll til webshops der konverterer – her er mine ydelser.
            </p>
          </AnimateSection>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-12">
            {(services as { slug: string; icon: string; shortTitle: string; shortDescription: string }[]).map((service, i) => {
              const Icon = iconMap[service.icon] || Target
              return (
                <AnimateSection key={service.slug} delay={i * 100} animation="scale">
                  <Link
                    href={`/ydelser/${service.slug}`}
                    className="group flex flex-col p-5 md:p-8 rounded-2xl bg-white border border-neutral-200/80 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-500 h-full relative overflow-hidden hover:-translate-y-1"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-700" />
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-50 border border-brand-200/60 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-100 transition-colors duration-300">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-600" />
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-neutral-900 mb-2 md:mb-3 leading-tight">{service.shortTitle}</h3>
                      <p className="text-neutral-600 leading-relaxed mb-4 md:mb-6 flex-1 text-sm md:text-base hidden sm:block">{service.shortDescription}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-brand-600 group-hover:text-brand-500 transition-colors">
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
      <section className="py-10 md:py-20 px-6 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-50 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateSection animation="slide-left">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-200/80 relative shadow-lg">
                  <Image
                    src="/images/frederik.png"
                    alt="Frederik"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-white border border-neutral-200/80 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">K</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">Konvertio</p>
                      <p className="text-xs text-neutral-500">Viborg, Danmark</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateSection>

            <div>
              <AnimateSection delay={100}>
                <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">
                  Om mig
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                  Indhold der føles ægte – fordi det er det
                </h2>
              </AnimateSection>

              <AnimateSection delay={200}>
                <p className="text-lg text-neutral-600 leading-relaxed mb-4">
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
                    <span key={skill} className="px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-neutral-700 text-sm hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 transition-all duration-200">
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
                      <span className="text-sm text-neutral-700">{b}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="text-sm text-neutral-700">Klar til nye projekter</span>
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
      <section className="py-10 md:py-20 px-6 relative bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="relative max-w-7xl mx-auto">
          <AnimateSection className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">
              Blog & Viden
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
              Seneste indsigter
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl mx-auto text-left md:text-center">
              Praktiske guides til dig der vil have mere ud af din webshop og markedsføring.
            </p>
          </AnimateSection>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {recentPosts.map((post, i) => (
              <AnimateSection key={post.slug} delay={i * 100}>
                <article className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/40 transition-all duration-500 hover:-translate-y-1">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video overflow-hidden bg-neutral-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 bg-brand-50 border border-brand-200/60 text-xs font-medium text-brand-600 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-neutral-500">{post.readTime} læsning</span>
                      </div>
                      <h3 className="text-base font-semibold text-neutral-900 mb-2 group-hover:text-brand-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-neutral-500 line-clamp-2">{post.excerpt}</p>
                    </div>
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
      <section className="py-14 md:py-24 px-6 bg-gradient-to-b from-blue-50 to-blue-100">
        <AnimateSection>
          <div className="relative max-w-4xl mx-auto text-center bg-white/70 backdrop-blur-sm border border-blue-200/60 rounded-3xl px-8 py-14 shadow-sm">
            <span className="inline-block text-sm font-medium text-brand-600 uppercase tracking-wider mb-6">
              Klar til at starte?
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6">
              Klar til at skabe indhold du er{' '}
              <span className="gradient-text-brand">stolt</span> af at dele?
            </h2>
            <p className="text-lg text-neutral-600 mb-12 max-w-xl mx-auto text-left md:text-center">
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
          </div>
        </AnimateSection>
      </section>
    </div>
  )
}
