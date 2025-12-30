import React, { useState, useEffect, useRef } from 'react';
import { Award, Calendar, CheckCircle, TrendingUp, AlertTriangle } from 'lucide-react';
import Reveal from '../components/Reveal';
import { experienceContent } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

const Counter = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef(null);

    // Separar número del texto (ej: "100%" -> 100 y "%")
    const match = value.toString().match(/^(\d+)(.*)$/);

    useEffect(() => {
        if (!match) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Dispara si hay intersección (aunque sea mínima)
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const target = parseInt(match[1]);
                    // Se adapta: rápido para números pequeños, normal para grandes
                    const duration = target < 20 ? 1000 : 2000;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        // Easing suave cubic
                        const ease = 1 - Math.pow(1 - progress, 3);

                        const current = Math.floor(ease * target);
                        setDisplayValue(current);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setDisplayValue(target);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 } // Se activa apenas entre el 10% en pantalla
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [match, hasAnimated]);

    if (!match) return <span>{value}</span>;

    return (
        <span ref={elementRef} className="tabular-nums inline-block">
            {displayValue}{match[2]}
        </span>
    );
};

const Experience = () => {
    const statIcons = [Calendar, Award, CheckCircle, TrendingUp];
    const { t, tObj } = useLanguage();
    const stats = tObj('experience.stats') || [];

    return (
        <section id="experience" className="py-16 md:py-20 bg-[#020617] relative overflow-hidden">
            {/* Decoración de fondo técnica/corporativa */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a67c]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#c5a67c]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <Reveal>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full mb-6">
                            <TrendingUp size={12} className="text-[#c5a67c]" />
                            <span className="text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.3em]">{t('experience.badge')}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 tracking-tighter leading-none">
                            {t('experience.title')}
                        </h2>
                        <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-3xl mx-auto border-t border-[#c5a67c]/30 pt-6">
                            {t('experience.description')}
                        </p>
                    </div>
                </Reveal>

                {/* Stats Grid - Estilo Ejecutivo */}
                <Reveal delay={200}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                        {stats.map((stat, index) => {
                            const Icon = statIcons[index] || Award;
                            return (
                                <div
                                    key={index}
                                    className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-sm text-center group hover:bg-white/10 hover:border-[#c5a67c]/30 transition-all duration-500"
                                >
                                    <div className="text-2xl lg:text-3xl font-bold text-[#c5a67c] mb-3 tracking-tighter">
                                        <Counter value={stat.value} />
                                    </div>
                                    <div className="text-[8px] md:text-[9px] text-slate-400 uppercase tracking-[0.2em] font-medium border-t border-white/10 pt-3 inline-block">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>

                {/* Frase de Impacto - Banner Premium */}
                <Reveal delay={300}>
                    <div className="bg-gradient-to-r from-[#0f2a4a] to-[#020617] border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden text-center">
                        <div className="relative z-10">
                            <div className="text-[#c5a67c] text-[9px] uppercase tracking-[0.25em] font-bold mb-5">
                                {t('experience.reflection')}
                            </div>
                            <p className="text-white text-base md:text-lg lg:text-xl font-light italic leading-relaxed max-w-4xl mx-auto mb-8">
                                {t('experience.impactPhrase')}
                            </p>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="btn-wow px-10 py-4 bg-[#c5a67c] text-[#0f2a4a] font-bold text-[10px] uppercase tracking-[0.2em] rounded-sm"
                                >
                                    {t('experience.ctaBtn')}
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
