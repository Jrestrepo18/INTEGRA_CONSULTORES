import React from 'react';
import { trustBarStats } from '../data/content';

// Declaración de Valor (Barra de Confianza)
const TrustBar = () => {
    return (
        <div className="bg-[#0f2a4a] text-white py-12 px-6 border-b border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {trustBarStats.map((stat, index) => (
                        <div key={index} className="relative">
                            <div className="text-2xl md:text-3xl font-bold font-serif text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-[10px] text-[#c5a67c] uppercase tracking-widest font-bold">
                                {stat.label}
                            </div>
                            {/* Separador vertical (excepto último) */}
                            {index < trustBarStats.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
