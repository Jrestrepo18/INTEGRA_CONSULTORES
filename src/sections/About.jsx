import React, { useState, useEffect } from 'react';
import { ShieldCheck, Target, Users, CheckCircle, Eye, Award, Sparkles, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { aboutContent } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const location = useLocation();
    const isFullPage = location.pathname === '/quienes-somos';
    const { t } = useLanguage();

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
    }, [images.length]);

    return (
        <section id="about" className={`py-16 md:py-24 lg:py-32 ${isFullPage ? 'bg-[#02010a]' : 'bg-white'} overflow-hidden relative`}>
            {/* Decoración técnica de fondo para Full Page */}
            {isFullPage && (
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c5a67c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            )}

            {!isFullPage && (
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            )}

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Breadcrumbs solo para full page */}
                {isFullPage && (
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-12">
                        <Link to="/" className="hover:text-[#c5a67c] transition-colors">{t('common.breadcrumb.home')}</Link>
                        <span>/</span>
                        <span className="text-[#c5a67c]">{t('about.title')}</span>
                    </div>
                )}

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <Reveal>
                        <div className="relative group">
                            {/* Brillo dinámico de fondo */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#c5a67c]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                            {/* Contenedor del Carrusel - Estilo Galería de Arte */}
                            <div className="aspect-[5/4] md:aspect-[4/5] bg-[#020617] p-px relative overflow-hidden shadow-2xl max-w-[300px] md:max-w-[480px] mx-auto">
                                {images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center ${idx === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
                                    >
                                        {img.type === 'logo' ? (
                                            <div className="p-16 md:p-20 flex items-center justify-center w-full h-full bg-[#020617]">
                                                <img
                                                    src={img.content}
                                                    alt="Integra"
                                                    className="max-w-full max-h-full object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0">
                                                <div className="absolute inset-0 bg-[#020617]/40 z-10"></div>
                                                <img
                                                    src={img.content}
                                                    alt="Integra Moment"
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Barra de Progreso Minimalista */}
                                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex gap-2 z-20">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImage(idx)}
                                            className={`h-[1px] transition-all duration-1000 ${idx === currentImage ? 'flex-[4] bg-[#c5a67c]' : 'flex-1 bg-white/20'}`}
                                        />
                                    ))}
                                </div>

                                {/* Badge de Prestigio */}
                                <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-[#c5a67c] px-4 py-4 md:px-5 md:py-5 shadow-2xl z-30 transform hover:-translate-y-1 transition-transform">
                                    <div className="text-xl md:text-2xl font-black text-[#020617] tracking-tighter leading-none">2019</div>
                                    <div className="text-[7px] md:text-[8px] text-[#020617] uppercase font-black tracking-[0.2em] mt-1 border-t border-[#020617]/20 pt-1">
                                        {t('about.foundation')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Contenido Principal */}
                    <Reveal delay={200}>
                        <div className="lg:pl-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.3em] mb-6">
                                <ShieldCheck size={12} /> {t('about.badge')}
                            </div>

                            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-black mb-5 md:mb-6 leading-none tracking-tighter ${isFullPage ? 'text-white' : 'text-[#0f2a4a]'}`}>
                                {t('about.title').split(' ')[0]} <br />
                                <span className="text-[#c5a67c]">{t('about.title').split(' ').slice(1).join(' ')}</span>
                            </h2>

                            <div className="space-y-4 md:space-y-5">
                                <p className={`text-sm md:text-sm lg:text-base leading-relaxed ${isFullPage ? 'text-slate-400' : 'text-slate-500'}`}>
                                    <span className={isFullPage ? 'text-white font-bold' : 'text-[#0f2a4a] font-bold'}>INTEGRA CONSULTORES</span> {t('about.description').replace('INTEGRA CONSULTORES ', '')}
                                </p>

                                <p className={`text-xs md:text-sm lg:text-sm leading-relaxed font-light ${isFullPage ? 'text-slate-500' : 'text-slate-400'}`}>
                                    {t('about.purpose')}
                                </p>

                                <div className={`flex items-start gap-3 p-4 md:p-6 border-l-2 border-[#c5a67c] italic font-light relative overflow-hidden group ${isFullPage ? 'bg-white/5 text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
                                    <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Award size={44} />
                                    </div>
                                    <span className="relative z-10 text-sm md:text-base lg:text-lg leading-relaxed">"{t('about.team')}"</span>
                                </div>
                            </div>

                            {!isFullPage && (
                                <div className="mt-16">
                                    <Link
                                        to="/quienes-somos"
                                        className="btn-wow inline-flex items-center gap-3 px-10 py-5 bg-[#0f2a4a] text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-sm shadow-2xl"
                                    >
                                        {t('about.missionBtn')} <ArrowRight size={16} />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </Reveal>
                </div>

                {/* Secciones Full Page */}
                {isFullPage && (
                    <div className="mt-24 space-y-24">
                        <div className="grid md:grid-cols-2 gap-8">
                            <Reveal delay={300}>
                                <div className="group bg-white/5 p-10 md:p-12 border border-white/5 hover:border-[#c5a67c]/30 transition-all duration-700 h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 text-6xl font-black text-white/[0.02] p-6">01</div>
                                    <div className="w-12 h-12 bg-[#c5a67c]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#c5a67c] transition-all duration-700">
                                        <Target className="text-[#c5a67c] group-hover:text-[#020617] transition-all" size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-6 tracking-tight uppercase">{t('about.missionTitle')}</h3>
                                    <p className="text-slate-400 leading-relaxed font-light italic text-lg">
                                        "{t('about.mission')}"
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={400}>
                                <div className="group bg-white/5 p-10 md:p-12 border border-white/5 hover:border-[#c5a67c]/30 transition-all duration-700 h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 text-6xl font-black text-white/[0.02] p-6">02</div>
                                    <div className="w-12 h-12 bg-[#c5a67c]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#c5a67c] transition-all duration-700">
                                        <Eye className="text-[#c5a67c] group-hover:text-[#020617] transition-all" size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-6 tracking-tight uppercase">{t('about.visionTitle')}</h3>
                                    <p className="text-slate-400 leading-relaxed font-light italic text-lg">
                                        "{t('about.vision')}"
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        <Reveal delay={500}>
                            <div className="bg-[#020617] p-10 md:p-20 rounded-sm relative overflow-hidden text-center border border-[#c5a67c]/20 shadow-[-20px_20px_60px_rgba(0,0,0,0.5)]">
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c5a67c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                                <div className="relative z-10 max-w-4xl mx-auto">
                                    <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-[#c5a67c]/10 rounded-full">
                                        <Award size={16} className="text-[#c5a67c]" />
                                        <span className="text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.4em]">{t('about.qualityBadge')}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tighter leading-none">{t('about.qualityTitle')}</h3>
                                    <p className="text-slate-300 text-lg md:text-2xl leading-relaxed font-light italic opacity-90 mx-auto max-w-4xl">
                                        "{t('about.qualityPolicy')}"
                                    </p>
                                    <div className="mt-12 w-24 h-[1px] bg-[#c5a67c]/30 mx-auto"></div>
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
