import { stats } from "@/data/stats"

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-20 lg:py-32 bg-gray-50 rounded-3xl px-8 my-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-20">
                {stats.map(stat => (
                    <div key={stat.title} className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-4 mb-4 text-primary-accent">
                            <span className="p-3 bg-white rounded-2xl shadow-sm">
                                {stat.icon}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                                {stat.title}
                            </h3>
                        </div>
                        <p className="text-lg text-secondary leading-relaxed max-w-sm mx-auto sm:mx-0">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats