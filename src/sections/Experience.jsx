import React, { useState, useEffect, useRef } from 'react';
import { Award, Calendar, CheckCircle, TrendingUp, AlertTriangle } from 'lucide-react';
import Reveal from '../components/Reveal';
import { experienceContent } from '../data/content';

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

    return (
        <section id="experience" className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Decoración de fondo técnica/corporativa */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a67c]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#c5a67c]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <Reveal>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full mb-8">
                            <TrendingUp size={12} className="text-[#c5a67c]" />
                            <span className="text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.3em]">{experienceContent.subtitle}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 tracking-tighter leading-none">
                            {experienceContent.title}
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto border-t border-[#c5a67c]/30 pt-10">
                            {experienceContent.description}
                        </p>
                    </div>
                </Reveal>

                {/* Stats Grid - Estilo Ejecutivo */}
                <Reveal delay={200}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                        {experienceContent.stats.map((stat, index) => {
                            const Icon = statIcons[index] || Award;
                            return (
                                <div
                                    key={index}
                                    className="bg-white/5 border border-white/10 p-8 rounded-sm text-center group hover:bg-white/10 hover:border-[#c5a67c]/30 transition-all duration-500"
                                >
                                    <div className="text-3xl lg:text-5xl font-bold text-[#c5a67c] mb-4 tracking-tighter">
                                        <Counter value={stat.value} />
                                    </div>
                                    <div className="text-[9px] text-slate-400 uppercase tracking-[0.25em] font-medium border-t border-white/10 pt-4 inline-block">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>

                {/* Frase de Impacto - Banner Premium */}
                <Reveal delay={300}>
                    <div className="bg-gradient-to-r from-[#0f2a4a] to-[#020617] border border-white/10 p-10 md:p-16 rounded-sm relative overflow-hidden text-center">
                        <div className="relative z-10">
                            <div className="text-[#c5a67c] text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
                                Reflexión Estratégica
                            </div>
                            <p className="text-white text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed max-w-4xl mx-auto mb-12">
                                {experienceContent.impactPhrase}
                            </p>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="btn-wow px-12 py-5 bg-[#c5a67c] text-[#0f2a4a] font-bold text-xs uppercase tracking-[0.2em] rounded-sm"
                                >
                                    Protección Empresarial Inmediata
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
