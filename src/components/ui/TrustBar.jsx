import React from 'react';
import { trustBarStats } from '../../data/content';

const TrustBar = () => {
    return (
        <div className="bg-[#020617] text-white py-20 px-6 border-y border-white/5 relative z-10 overflow-hidden">
            {/* Textura de fondo sutil */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c5a67c 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center">
                    {trustBarStats.map((stat, index) => (
                        <div key={index} className="relative group p-4">
                            <div className="text-4xl md:text-5xl font-black text-white mb-3 transition-all duration-700 group-hover:text-[#c5a67c] group-hover:scale-110 tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-[9px] text-[#c5a67c] uppercase tracking-[0.5em] font-black opacity-60 group-hover:opacity-100 transition-all duration-500">
                                {stat.label}
                            </div>

                            {/* Separador vertical ultra-fino */}
                            {index < trustBarStats.length - 1 && (
                                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
