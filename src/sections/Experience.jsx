import React from 'react';
import { Award, Calendar, CheckCircle, TrendingUp, AlertTriangle } from 'lucide-react';
import Reveal from '../components/Reveal';
import { experienceContent } from '../data/content';

const Experience = () => {
    const statIcons = [Calendar, Award, CheckCircle, TrendingUp];

    return (
        <section id="experience" className="py-24 bg-white relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a67c]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0f2a4a]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="text-[#c5a67c] font-bold tracking-widest uppercase text-xs mb-4 block">
                            {experienceContent.subtitle}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0f2a4a] mb-6">
                            {experienceContent.title}
                        </h2>
                        <p className="text-slate-600 text-lg font-light leading-relaxed max-w-3xl mx-auto">
                            {experienceContent.description}
                        </p>
                    </div>
                </Reveal>

                {/* Stats Grid */}
                <Reveal delay={200}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {experienceContent.stats.map((stat, index) => {
                            const Icon = statIcons[index] || Award;
                            return (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-[#0f2a4a] to-[#1e3a5f] p-6 rounded-sm text-center group hover:from-[#c5a67c] hover:to-[#a88d5e] transition-all duration-500"
                                >
                                    <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                                        <Icon size={24} className="text-[#c5a67c] group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="text-3xl font-bold text-white font-serif mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-slate-300 uppercase tracking-widest">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>

                {/* Frase de Impacto */}
                <Reveal delay={300}>
                    <div className="bg-[#0f2a4a] p-10 md:p-16 rounded-sm relative overflow-hidden">
                        {/* Icono decorativo */}
                        <div className="absolute top-6 left-6 text-[#c5a67c]/20">
                            <AlertTriangle size={60} />
                        </div>
                        <div className="absolute bottom-6 right-6 text-[#c5a67c]/10">
                            <AlertTriangle size={100} />
                        </div>

                        <div className="relative z-10">
                            <div className="text-[#c5a67c] text-xs uppercase tracking-widest font-bold mb-6 text-center">
                                ¿Sabe usted que...?
                            </div>
                            <p className="text-white text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed text-center max-w-4xl mx-auto">
                                {experienceContent.impactPhrase}
                            </p>
                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-10 py-4 bg-[#c5a67c] text-[#0f2a4a] font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#d6bba0] transition-colors"
                                >
                                    Proteja Su Empresa Hoy
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Experience;
