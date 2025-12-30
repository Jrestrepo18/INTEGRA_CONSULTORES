import React from 'react';
import { Scale, Users, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const WhatWeDo = () => {
    const icons = { Scale, Users, ShieldCheck };
    const { t, tObj } = useLanguage();
    const areas = tObj('whatWeDo.areas') || [];

    return (
        <section id="whatwedo" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
            {/* Elemento decorativo técnico lateral */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a67c]/20 to-transparent"></div>
            <div className="absolute bottom-0 left-10 w-[1px] h-32 bg-gradient-to-t from-[#c5a67c]/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.3em] mb-6">
                            <Sparkles size={12} /> {t('whatWeDo.badge')}
                        </div>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#0f2a4a] mb-6 tracking-tighter leading-none">
                            {t('whatWeDo.title')}
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto italic border-t border-[#c5a67c]/30 pt-6">
                            {t('whatWeDo.subtitle')}
                        </p>
                    </div>
                </Reveal>

                {/* Cards de áreas - Estilo "Boardroom" */}
                <div className="grid md:grid-cols-3 gap-6">
                    {areas.map((area, index) => {
                        const iconMapping = ['Scale', 'Users', 'ShieldCheck'];
                        const Icon = icons[iconMapping[index]] || ShieldCheck;
                        return (
                            <Reveal key={index} delay={index * 150}>
                                <div className="group bg-white p-8 border border-slate-200 transition-all duration-700 hover:border-[#c5a67c]/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] flex flex-col h-full relative overflow-hidden">
                                    {/* Número de fondo sutil */}
                                    <div className="absolute top-6 right-6 text-6xl font-black text-slate-50 pointer-events-none group-hover:text-[#c5a67c]/5 transition-colors duration-700">
                                        0{index + 1}
                                    </div>

                                    {/* Icono en Círculo Refinado */}
                                    <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0f2a4a] transition-all duration-700 relative z-10 shadow-sm group-hover:shadow-xl">
                                        <Icon size={24} className="text-[#c5a67c] group-hover:text-white transition-all duration-700" strokeWidth={1.2} />
                                    </div>

                                    {/* Título */}
                                    <h3 className="text-base font-black text-[#0f2a4a] mb-4 tracking-tight relative z-10">
                                        {area.title}
                                    </h3>

                                    {/* Descripción */}
                                    <p className="text-slate-500 leading-relaxed text-sm font-light mb-6 flex-grow relative z-10">
                                        {area.description}
                                    </p>

                                    {/* Link tipo Boutique */}
                                    <div className="relative z-10">
                                        <button
                                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a67c] flex items-center gap-4 group/btn"
                                        >
                                            {t('whatWeDo.exploreBtn')}
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
