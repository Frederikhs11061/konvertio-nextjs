import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, HelpCircle, ShoppingBag, TrendingUp, Target, Globe, Check, Zap } from 'lucide-react'
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
  { value: '50+', label: 'Projekter leveret' },
  { value: '4.9/5', label: 'Gennemsnitlig bedømmelse' },
  { value: '30%+', label: 'Gns. konverteringsstigning' },
]

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 pb-24 px-6 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto w-full">
          <AnimateSection delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 text-sm text-neutral-700 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Tilgængelig for nye projekter
            </div>
          </AnimateSection>

          <AnimateSection delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 leading-tight tracking-tight max-w-3xl mb-6">
              Static ads der stopper scroll og{' '}
              <span className="text-neutral-500">driver salg</span>
            </h1>
          </AnimateSection>

          <AnimateSection delay={200}>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mb-10">
              Jeg hjælper danske e-commerce virksomheder med at skabe static ads der konverterer,
              Shopify-webshops der sælger, og CRO-analyser der giver resultater.
            </p>
          </AnimateSection>

          <AnimateSection delay={300}>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 px-7 py-3.5 text-sm font-medium transition-all hover:scale-[1.02]"
              >
                Se mine ydelser
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-100 px-7 py-3.5 text-sm font-medium transition-all"
              >
                <HelpCircle className="w-4 h-4" />
                Kontakt mig
              </Link>
            </div>
          </AnimateSection>

          <AnimateSection delay={400}>
            <div className="flex flex-wrap gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-neutral-200 shadow-sm"
                >
                  <badge.icon className="w-5 h-5 text-neutral-700" />
                  <span className="text-sm font-medium text-neutral-700">{badge.label}</span>
                </div>
              ))}
            </div>
          </AnimateSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {statsData.map((stat, i) => (
              <AnimateSection key={stat.label} delay={i * 100} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-neutral-400">{stat.label}</p>
              </AnimateSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - all 4 services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateSection className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
              Hvad jeg tilbyder
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
              Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl mx-auto">
              Uanset hvor du er i din e-commerce rejse, har jeg en løsning der passer til dig.
            </p>
          </AnimateSection>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Target
              return (
                <AnimateSection key={service.slug} delay={i * 100}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-col p-8 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mb-6 group-hover:bg-neutral-200 transition-colors">
                      <Icon className="w-6 h-6 text-neutral-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{service.shortTitle}</h3>
                    <p className="text-neutral-600 leading-relaxed mb-6 flex-1">{service.shortDescription}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                      Se ydelse
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </AnimateSection>
              )
            })}
          </div>

          <AnimateSection className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-100 px-6 py-3 text-sm font-medium transition-all"
            >
              Se alle services og priser
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateSection>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* About Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Avatar placeholder (no photo) */}
            <AnimateSection>
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-24 h-24 rounded-full bg-neutral-900 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-3xl font-semibold">F</span>
                    </div>
                    <p className="text-neutral-600 font-medium">Frederik Høgh Simonsen</p>
                    <p className="text-neutral-500 text-sm">Konvertio · Viborg</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-neutral-100">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">K</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">Konvertio</p>
                      <p className="text-xs text-neutral-500">Viborg, Danmark</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateSection>

            {/* Content */}
            <div>
              <AnimateSection delay={100}>
                <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-6">
                  Jeg brænder for din vækst online
                </h2>
              </AnimateSection>

              <AnimateSection delay={200}>
                <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                  Jeg er Frederik Høgh Simonsen – Shopify-ekspert med dyb erfaring i CRO-gennemgange,
                  Shopify-webshops og static ads der konverterer.
                </p>
              </AnimateSection>

              <AnimateSection delay={300}>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  Baseret i Viborg og arbejder med kunder over hele Danmark.
                  Mit mål er simpelt: konkrete, brugbare løsninger – ikke lange rapporter der samler støv.
                </p>
              </AnimateSection>

              <AnimateSection delay={400}>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Shopify', 'CRO', 'Static Ads', 'Facebook Ads', 'WordPress', 'UX Design'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-700 text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </AnimateSection>

              <AnimateSection delay={500}>
                <div className="space-y-3 mb-8">
                  {['Gratis indledende samtale', 'Konkrete anbefalinger fra dag 1', 'Stopper ikke før du er tilfreds', 'Fast pris – ingen skjulte gebyrer'].map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
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
                <Link
                  href="/om-mig"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  Læs mere om mig
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimateSection>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <AnimateSection className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
              Blog & Viden
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
              Seneste indsigter
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl mx-auto">
              Praktiske guides til dig der vil have mere ud af din webshop og markedsføring.
            </p>
          </AnimateSection>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {recentPosts.map((post, i) => (
              <AnimateSection key={post.slug} delay={i * 100}>
                <article className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video rounded-xl overflow-hidden bg-neutral-200 mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-neutral-100 text-xs font-medium text-neutral-700 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-neutral-500">{post.readTime} læsning</span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-2">{post.excerpt}</p>
                  </Link>
                </article>
              </AnimateSection>
            ))}
          </div>

          <AnimateSection className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-100 px-6 py-3 text-sm font-medium transition-all"
            >
              Se alle blogindlæg
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateSection>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
              Klar til at komme i gang?
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
              Tag en uforpligtende snak om hvordan jeg kan hjælpe din virksomhed med at vækste online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-4 text-sm font-semibold transition-all hover:scale-[1.02]"
              >
                Kontakt mig i dag
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-700 text-neutral-300 hover:bg-neutral-800 px-8 py-4 text-sm font-medium transition-all"
              >
                Se services & priser
              </Link>
            </div>
          </AnimateSection>
        </div>
      </section>
    </div>
  )
}
