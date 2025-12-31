import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children }: React.PropsWithChildren<Props>) => {
    return (
        <section id={id} className="py-20 lg:py-32 border-t border-gray-100 first:border-t-0">
            <div className="max-w-4xl mx-auto text-center mb-16 px-5">
                <SectionTitle>
                    <h2 className="mb-6">{title}</h2>
                </SectionTitle>
                <p className="text-lg md:text-xl text-secondary leading-relaxed">{description}</p>
            </div>
            {children}
        </section>
    )
}

export default Section