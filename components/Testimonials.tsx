import AnimateSection from './AnimateSection'
import TestimonialsTicker from './TestimonialsTicker'
import { getAllTestimonials } from '@/lib/sanity/fetchTestimonials'

export default async function Testimonials() {
    const testimonials = await getAllTestimonials()

    return (
        <section id="anbefalinger" className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
            <div className="relative max-w-7xl mx-auto px-6">
                <AnimateSection className="text-center mb-14">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
                        Anbefalinger
                    </h2>
                    <p className="text-lg font-medium text-neutral-500 mb-2">Hvad kunderne siger</p>
                    <p className="text-neutral-400 max-w-xl mx-auto">
                        Jeg stopper ikke før du er tilfreds.
                    </p>
                </AnimateSection>
            </div>
            <AnimateSection animation="fade-in" delay={150}>
                <TestimonialsTicker testimonials={testimonials} />
            </AnimateSection>
        </section>
    )
}
