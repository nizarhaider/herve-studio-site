'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { aiModels } from '@/data/aiModels';

const AIModelsShowcase: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(10);
    const visibleModels = aiModels.slice(0, visibleCount);
    const hasMore = visibleCount < aiModels.length;

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 10, aiModels.length));
    };

    return (
        <section className="flex flex-col items-center gap-12">
            <div className="grid gap-8 w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {visibleModels.map((model, index) => (
                    <div
                        key={index}
                        className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                        <Image
                            src={model.image}
                            alt={`${model.name} image`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{model.name}</h3>
                            <p className="text-white/80 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">AI Model</p>
                        </div>
                    </div>
                ))}
            </div>
            {hasMore && (
                <button
                    onClick={loadMore}
                    className="mt-4 px-10 py-4 bg-primary-accent text-white font-bold rounded-full hover:bg-primary-accent/90 transition-all duration-300 shadow-lg hover:shadow-primary-accent/20"
                >
                    Load More Models
                </button>
            )}
        </section>
    );
};

export default AIModelsShowcase;

