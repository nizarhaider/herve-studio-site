import React from 'react';
import Image from 'next/image';
import { aiModels } from '@/data/aiModels';

const AIModelsShowcase: React.FC = () => {
    return (
        <section className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full py-12">
            {aiModels.map((model, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center text-center"
                >
                    <div className="relative w-60 h-60 mb-4 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={model.image}
                            alt={`${model.name} image`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-secondary">{model.name}</h3>
                    <p className="text-sm text-foreground-accent mt-2">{model.description}</p>
                </div>
            ))}
        </section>
    );
};

export default AIModelsShowcase;
