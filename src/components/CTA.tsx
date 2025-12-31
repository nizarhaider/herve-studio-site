import { ctaDetails } from "@/data/cta"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="py-20 lg:py-32">
            <div className="relative overflow-hidden bg-primary-accent rounded-3xl p-10 sm:p-20 text-center">
                {/* Subtle decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                        {ctaDetails.heading}
                    </h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                        {ctaDetails.subheading}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="https://wa.me/94742530708"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-12 py-5 text-xl font-bold text-primary-accent bg-white rounded-full hover:bg-gray-50 transition-all duration-300 shadow-xl hover:scale-105"
                        >
                            Get Started Now
                        </a>
                        <a
                            href="mailto:nizarhaider@gmail.com"
                            className="text-lg font-bold text-white hover:underline underline-offset-8"
                        >
                            Talk to an expert
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA