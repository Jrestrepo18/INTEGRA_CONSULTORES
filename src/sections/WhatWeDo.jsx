import React from 'react';
import { Scale, Users, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal';
import { whatWeDoContent } from '../data/content';

const WhatWeDo = () => {
    const icons = { Scale, Users, ShieldCheck };

    return (
        <section id="whatwedo" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Elemento decorativo técnico lateral */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a67c]/20 to-transparent"></div>
            <div className="absolute bottom-0 left-10 w-[1px] h-32 bg-gradient-to-t from-[#c5a67c]/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <Reveal>
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.3em] mb-8">
                            <Sparkles size={12} /> Excelencia Operativa
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0f2a4a] mb-10 tracking-tighter leading-none">
                            {whatWeDoContent.title}
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto italic border-t border-[#c5a67c]/30 pt-10">
                            {whatWeDoContent.subtitle}
                        </p>
                    </div>
                </Reveal>

                {/* Cards de áreas - Estilo "Boardroom" */}
                <div className="grid md:grid-cols-3 gap-10">
                    {whatWeDoContent.areas.map((area, index) => {
                        const Icon = icons[area.icon] || ShieldCheck;
                        return (
                            <Reveal key={index} delay={index * 150}>
                                <div className="group bg-white p-12 border border-slate-200 transition-all duration-700 hover:border-[#c5a67c]/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] flex flex-col h-full relative overflow-hidden">
                                    {/* Número de fondo sutil */}
                                    <div className="absolute top-8 right-8 text-8xl font-black text-slate-50 pointer-events-none group-hover:text-[#c5a67c]/5 transition-colors duration-700">
                                        0{index + 1}
                                    </div>

                                    {/* Icono en Círculo Refinado */}
                                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-10 group-hover:bg-[#0f2a4a] transition-all duration-700 relative z-10 shadow-sm group-hover:shadow-xl">
                                        <Icon size={32} className="text-[#c5a67c] group-hover:text-white transition-all duration-700" strokeWidth={1.2} />
                                    </div>

                                    {/* Título */}
                                    <h3 className="text-xl font-black text-[#0f2a4a] mb-6 tracking-tight relative z-10">
                                        {area.title}
                                    </h3>

                                    {/* Descripción */}
                                    <p className="text-slate-500 leading-relaxed text-[15px] font-light mb-10 flex-grow relative z-10">
                                        {area.description}
                                    </p>

                                    {/* Link tipo Boutique */}
                                    <div className="relative z-10">
                                        <button
                                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a67c] flex items-center gap-4 group/btn"
                                        >
                                            Explorar Soluciones
                                            <div className="w-8 h-[1px] bg-[#c5a67c]/30 group-hover/btn:w-12 transition-all duration-500"></div>
                                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
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
