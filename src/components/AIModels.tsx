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
        <section className="flex flex-col items-center gap-8">
            <div className="grid gap-6 w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {visibleModels.map((model, index) => (
                    <div
                        key={index}
                        className="relative aspect-[3/4] w-full rounded-lg overflow-hidden group"
                    >
                        <Image
                            src={model.image}
                            alt={`${model.name} image`}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                            <h3 className="text-lg font-medium text-white">{model.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {hasMore && (
                <button
                    onClick={loadMore}
                    className="mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                    Load More Models
                </button>
            )}
        </section>
    );
};

export default AIModelsShowcase;
