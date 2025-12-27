import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Scale, Users, BookmarkCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CorporateWavesCanvas from '../components/CorporateWavesCanvas';
import Reveal from '../components/Reveal';
import { heroCarouselTexts, siteInfo } from '../data/content';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % heroCarouselTexts.length);
                setIsAnimating(false);
            }, 600);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const currentText = heroCarouselTexts[currentSlide];

    // Iconos que cambian según el slide
    const icons = [
        <Shield className="text-[#c5a67c]" />,
        <BookmarkCheck className="text-[#c5a67c]" />,
        <Scale className="text-[#c5a67c]" />
    ];

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-[#020617]">

            {/* FONDO LIMPIO Y PROFESIONAL */}
            <CorporateWavesCanvas />

            <div className="max-w-7xl mx-auto relative z-20 w-full">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

                    {/* Bloque de Texto Izquierdo */}
                    <div className="text-left space-y-10">

                        <Reveal>
                            <div className="inline-flex items-center gap-4 px-5 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md shadow-2xl">
                                <span className="flex gap-2">
                                    <Shield size={16} className="text-[#c5a67c]" />
                                    <Scale size={16} className="text-[#c5a67c]" />
                                    <Users size={16} className="text-[#c5a67c]" />
                                </span>
                                <div className="w-[1px] h-4 bg-white/20"></div>
                                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-[#c5a67c]">
                                    {siteInfo.pillars}
                                </span>
                            </div>
                        </Reveal>

                        <div className="relative">
                            <h1
                                className={`text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 translate-y-6 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}
                            >
                                <span className="block text-slate-500 font-light text-sm md:text-lg uppercase tracking-[0.3em] mb-4">
                                    Servicios y Consultorías Legales
                                </span>
                                {currentText.title} <br />
                                <span className="relative inline-block text-[#c5a67c] mt-1 font-extrabold">
                                    {currentText.highlight}
                                    <div className={`absolute -bottom-2 left-0 h-1 bg-[#c5a67c] rounded-full transition-all duration-1000 ${isAnimating ? 'w-0' : 'w-32'}`}></div>
                                </span>
                            </h1>

                            <p
                                className={`mt-10 text-sm md:text-base lg:text-lg text-slate-400/90 leading-relaxed font-light max-w-xl transition-all duration-700 delay-150 ${isAnimating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}
                            >
                                {currentText.subtitle}
                            </p>
                        </div>

                        <Reveal delay={400}>
                            <div className="flex flex-col sm:flex-row gap-6 pt-6">
                                <Link
                                    to="/servicios"
                                    className="btn-wow px-12 py-5 bg-[#c5a67c] text-[#0f2a4a] font-bold text-xs uppercase tracking-[0.25em] rounded-sm flex items-center justify-center gap-3"
                                >
                                    Nuestros Servicios
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/contacto"
                                    className="btn-wow-secondary px-12 py-5 bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-sm flex items-center justify-center"
                                >
                                    Solicitar Consultoría
                                </Link>
                            </div>
                        </Reveal>
                    </div>

                    {/* Bloque Derecha: El "Escudo" dinámico equilibrado */}
                    <div className="hidden lg:flex justify-end pr-4 lg:pr-12">
                        <div className="relative flex items-center justify-center w-[450px] h-[450px]">

                            {/* Círculos de fondo - Sutiles y Profundos */}
                            <div className={`absolute inset-0 border border-[#c5a67c]/10 rounded-full transition-all duration-1000 ${isAnimating ? 'scale-90 opacity-40' : 'scale-100 opacity-100'}`}></div>
                            <div className={`absolute inset-16 border border-[#c5a67c]/5 rounded-full animate-spin-slow`}>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#c5a67c] rounded-full shadow-[0_0_15px_#c5a67c]"></div>
                            </div>

                            {/* Contenedor del Icono Central */}
                            <div className={`relative w-56 h-56 bg-[#0f2a4a]/40 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-500 ${isAnimating ? 'scale-75 opacity-0 blur-md' : 'scale-100 opacity-100 blur-0'}`}>
                                {React.cloneElement(icons[currentSlide], { size: 84, strokeWidth: 1.1 })}

                                {/* Anillo de pulso profesional */}
                                <div className="absolute inset-0 rounded-full border border-[#c5a67c]/20 animate-pulse"></div>
                            </div>

                            {/* Panel de Estatus Lateral - Mejor alineado */}
                            <div className="absolute -right-16 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-sm shadow-xl min-w-[140px]">
                                <div className="text-[10px] font-bold text-[#c5a67c] uppercase tracking-[0.25em] mb-2">Estatus</div>
                                <div className="text-white text-[12px] font-medium tracking-wide">Análisis Activo</div>
                                <div className="flex gap-1.5 pt-3">
                                    <div className="w-1.5 h-1.5 bg-[#c5a67c] rounded-full animate-pulse"></div>
                                    <div className="w-1.5 h-1.5 bg-[#c5a67c]/30 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-[#c5a67c]/30 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navegación y Scroll - Posicionamiento Mejorado */}
            <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-10">
                <div className="flex gap-3">
                    {heroCarouselTexts.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1 transition-all duration-500 rounded-full ${currentSlide === index ? 'w-16 bg-[#c5a67c]' : 'w-6 bg-white/20'}`}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[11px] text-white/60 font-medium tracking-[0.3em]">
                        0{currentSlide + 1}
                    </span>
                    <div className="w-8 h-px bg-white/20"></div>
                    <span className="text-[11px] text-white/20 font-medium tracking-[0.3em]">
                        0{heroCarouselTexts.length}
                    </span>
                </div>
            </div>

            {/* Scroll Indicator Lado Derecho */}
            <div className="absolute bottom-12 right-12 hidden md:flex items-center gap-6 rotate-90 origin-right translate-y-[-50%]">
                <span className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-light">Scroll Down</span>
                <div className="w-20 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;
