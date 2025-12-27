import React, { useState, useEffect } from 'react';
import { ShieldCheck, Target, Users, CheckCircle, Eye, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { aboutContent } from '../data/content';

const About = () => {
    const location = useLocation();
    const isFullPage = location.pathname === '/quienes-somos';

    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        { type: 'logo', content: '/assets/brand/logo.png' },
        { type: 'image', content: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop' }, // Team meeting
        { type: 'image', content: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop' }, // Legal/Strategy
        { type: 'image', content: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop' }  // Professionalism
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]); // Added images.length to dependency array

    return (
        <section id="about" className={`py - 24 ${isFullPage ? 'bg-slate-50' : 'bg-white'} `}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <div className="relative group">
                            {/* Fondo decorativo sutil */}
                            <div className="absolute -inset-4 bg-slate-100/50 rounded-sm -z-10"></div>

                            {/* Contenedor del Carrusel */}
                            <div className="aspect-square bg-white border border-slate-100 rounded-sm relative overflow-hidden shadow-2xl flex items-center justify-center">
                                {images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute inset - 0 transition - all duration - 1000 flex items - center justify - center p - 12 ${idx === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'} `}
                                    >
                                        {img.type === 'logo' ? (
                                            <div className="relative w-full h-full flex items-center justify-center">
                                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                                                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0f2a4a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                                                </div>
                                                <img
                                                    src={img.content}
                                                    alt="Integra"
                                                    className="max-w-full max-h-full object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0">
                                                <div className="absolute inset-0 bg-[#0f2a4a]/20 z-10"></div>
                                                <img
                                                    src={img.content}
                                                    alt="Integra Moment"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Indicadores */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImage(idx)}
                                            className={`h - 1 rounded - full transition - all duration - 300 ${idx === currentImage ? 'w-6 bg-[#c5a67c]' : 'w-2 bg-white/50 hover:bg-white'} `}
                                        />
                                    ))}
                                </div>

                                {/* Badge de Fundación */}
                                <div className="absolute bottom-0 right-0 bg-[#0f2a4a] p-4 shadow-2xl z-30 translate-x-2 translate-y-2">
                                    <div className="text-2xl font-bold text-white font-serif leading-none">2019</div>
                                    <div className="text-[8px] text-[#c5a67c] uppercase tracking-widest font-bold">Fundación</div>
                                </div>
                            </div>

                            {/* Icono de confianza */}
                            <div className="absolute -top-6 -left-6 bg-[#c5a67c] text-[#0f2a4a] w-14 h-14 shadow-2xl flex items-center justify-center rounded-sm z-30 transform -rotate-6">
                                <ShieldCheck size={28} />
                            </div>
                        </div>
                    </Reveal>

                    {/* Contenido Principal */}
                    <Reveal delay={200}>
                        <div>
                            <span className="text-[#c5a67c] font-bold tracking-widest uppercase text-xs mb-4 block">
                                {aboutContent.subtitle}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-[#0f2a4a] mb-8">
                                {aboutContent.title}
                            </h2>

                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                <strong className="text-[#0f2a4a]">INTEGRA CONSULTORES</strong> {aboutContent.description.replace('INTEGRA CONSULTORES ', '')}
                            </p>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                {aboutContent.purpose}
                            </p>

                            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                                {aboutContent.team}
                            </p>

                            {!isFullPage && (
                                // Botón solo en Inicio
                                <div className="mt-8">
                                    <Link
                                        to="/quienes-somos"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f2a4a] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#c5a67c] transition-all hover:gap-4 shadow-lg shadow-[#0f2a4a]/10"
                                    >
                                        Conocer Nuestra Misión <CheckCircle size={14} />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </Reveal>
                </div>

                {/* Sección Extra solo para la página completa: Misión, Visión y Política de Calidad */}
                {isFullPage && (
                    <div className="mt-24 space-y-16">
                        {/* Misión y Visión Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <Reveal delay={300}>
                                <div className="bg-white p-10 shadow-sm border-t-4 border-[#c5a67c] h-full flex flex-col">
                                    <div className="w-12 h-12 bg-[#c5a67c]/10 rounded-sm flex items-center justify-center mb-6">
                                        <Target className="text-[#c5a67c]" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-[#0f2a4a] mb-4">Misión</h3>
                                    <p className="text-slate-600 leading-relaxed italic">
                                        "{aboutContent.mission}"
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={400}>
                                <div className="bg-white p-10 shadow-sm border-t-4 border-[#0f2a4a] h-full flex flex-col">
                                    <div className="w-12 h-12 bg-[#0f2a4a]/10 rounded-sm flex items-center justify-center mb-6">
                                        <Eye className="text-[#0f2a4a]" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-[#0f2a4a] mb-4">Visión</h3>
                                    <p className="text-slate-600 leading-relaxed italic">
                                        "{aboutContent.vision}"
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Política de Calidad */}
                        <Reveal delay={500}>
                            <div className="bg-[#0f2a4a] p-10 md:p-16 rounded-sm relative overflow-hidden text-center">
                                {/* Decoración */}
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Award size={120} className="text-white" />
                                </div>

                                <div className="relative z-10 max-w-4xl mx-auto">
                                    <div className="inline-block p-3 bg-[#c5a67c]/20 rounded-full mb-6 text-[#c5a67c]">
                                        <Award size={32} />
                                    </div>
                                    <h3 className="text-3xl font-serif text-white mb-6">Política de Calidad</h3>
                                    <p className="text-slate-300 text-lg leading-relaxed italic">
                                        "{aboutContent.qualityPolicy}"
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                )}
            </div>
        </section>
    );
};

export default About;
