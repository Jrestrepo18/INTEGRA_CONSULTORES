import React from 'react';
import { Scale, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import { whatWeDoContent } from '../data/content';

const WhatWeDo = () => {
    const icons = { Scale, Users, ShieldCheck };

    return (
        <section id="whatwedo" className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="text-[#c5a67c] font-bold tracking-widest uppercase text-xs mb-4 block">
                            Nuestro Enfoque
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0f2a4a] mb-6">
                            {whatWeDoContent.title}
                        </h2>
                        <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                            {whatWeDoContent.subtitle}
                        </p>
                    </div>
                </Reveal>

                {/* Cards de áreas */}
                <div className="grid md:grid-cols-3 gap-8">
                    {whatWeDoContent.areas.map((area, index) => {
                        const Icon = icons[area.icon] || ShieldCheck;
                        return (
                            <Reveal key={index} delay={index * 100}>
                                <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 group h-full border-b-4 border-transparent hover:border-[#c5a67c]">
                                    {/* Icono */}
                                    <div className="w-16 h-16 bg-[#0f2a4a] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#c5a67c] transition-colors duration-500">
                                        <Icon size={28} className="text-white" strokeWidth={1.5} />
                                    </div>

                                    {/* Título */}
                                    <h3 className="text-xl font-bold text-[#0f2a4a] mb-4 group-hover:text-[#c5a67c] transition-colors">
                                        {area.title}
                                    </h3>

                                    {/* Descripción */}
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {area.description}
                                    </p>

                                    {/* Link */}
                                    <button
                                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="mt-6 text-[#c5a67c] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all"
                                    >
                                        Ver Servicios <ArrowRight size={14} />
                                    </button>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
