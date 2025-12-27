import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CorporateWavesCanvas from '../components/CorporateWavesCanvas';
import Reveal from '../components/Reveal';
import { heroCarouselTexts, siteInfo } from '../data/content';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % heroCarouselTexts.length);
                setIsAnimating(false);
            }, 500);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const currentText = heroCarouselTexts[currentSlide];

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#0f172a]">

            {/* FONDO: ONDAS INSTITUCIONALES */}
            <CorporateWavesCanvas />

            {/* Overlay sutil para oscurecer y dar foco */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f172a]/90 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-20 text-center">

                <Reveal>
                    <div className="mb-8 flex justify-center">
                        <div className="px-6 py-2 border border-[#c5a67c]/30 rounded-full bg-[#c5a67c]/10 text-[#c5a67c] text-[11px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
                            {siteInfo.pillars}
                        </div>
                    </div>
                </Reveal>

                {/* Carrusel de Textos */}
                <div className="min-h-[200px] md:min-h-[250px] flex flex-col justify-center">
                    <h1
                        className={`text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                    >
                        {currentText.title} <br />
                        <span className="italic text-[#c5a67c]">{currentText.highlight}</span>
                    </h1>

                    <p
                        className={`text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto mb-8 transition-all duration-500 delay-100 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                    >
                        {currentText.subtitle}
                    </p>
                </div>

                {/* Indicadores del carrusel */}
                <div className="flex justify-center gap-2 mb-10">
                    {heroCarouselTexts.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setIsAnimating(true);
                                setTimeout(() => {
                                    setCurrentSlide(index);
                                    setIsAnimating(false);
                                }, 300);
                            }}
                            className={`h-1 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-[#c5a67c]' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                        />
                    ))}
                </div>

                <Reveal delay={400}>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            to="/servicios"
                            className="group w-full md:w-auto px-10 py-4 bg-[#c5a67c] text-[#0f2a4a] font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#d6bba0] transition-all shadow-lg shadow-[#c5a67c]/20 flex items-center justify-center gap-2"
                        >
                            Nuestros Servicios
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contacto"
                            className="group w-full md:w-auto px-10 py-4 bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                        >
                            Contacto Directo
                        </Link>
                    </div>
                </Reveal>
            </div>

            {/* Scroll Indicator minimalista */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 animate-pulse">
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
