import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle2, MessageCircle, Star, ShieldCheck, Award, Target, Zap, Clock, Lock, CheckCircle } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Team = () => {
    const { t, tObj } = useLanguage();
    const members = tObj('team.members') || [];
    const differentiators = tObj('team.differentiatorsList') || [];
    const helpSection = tObj('team.helpSection') || {};

    // Mapeo de iconos para factores diferenciadores para que se vean más profesionales
    const differentiatorIcons = [
        Award,      // Compromiso
        ShieldCheck, // Lealtad
        Lock,        // Manejo responsable
        Target,      // Orientación al logro
        Clock,       // Asistencia 24/7
        Zap,         // Sentido de urgencia
        Users,       // Acompañamiento técnico
        CheckCircle  // Ética
    ];

    return (
        <section className="bg-[#020617] min-h-screen border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-12">
                    <Link to="/" className="hover:text-[#c5a67c] transition-colors">{t('common.breadcrumb.home')}</Link>
                    <span>/</span>
                    <span className="text-[#c5a67c]">{t('team.title')}</span>
                </div>

                <Reveal>
                    <div className="mb-24">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full mb-8">
                            <Users size={12} className="text-[#c5a67c]" />
                            <span className="text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.3em]">{t('team.badge')}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 tracking-tighter leading-none">
                            {t('team.title')}
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-4xl font-light leading-relaxed border-l-2 border-[#c5a67c]/30 pl-6">
                            {t('team.subtitle')}
                        </p>
                    </div>
                </Reveal>

                {/* Grid de Miembros del Equipo - Estilo Ejecutivo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
                    {members.map((member, index) => (
                        <Reveal key={index} delay={index * 150}>
                            <div className="group relative bg-[#020617] border border-white/5 rounded-sm overflow-hidden hover:border-[#c5a67c]/30 transition-all duration-700 h-full flex flex-col shadow-2xl">
                                {/* Imagen del Miembro */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-60"></div>
                                    <img
                                        src={`/assets/team/person_0${index + 1}.png`}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop';
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{member.name}</h3>
                                        <div className="h-0.5 w-12 bg-[#c5a67c] mb-4 transition-all duration-700 group-hover:w-24"></div>
                                        <p className="text-[#c5a67c] text-[10px] font-bold uppercase tracking-[0.3em]">{member.role}</p>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow">
                                    <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                                        <div className="w-4 h-[1px] bg-[#c5a67c]/30"></div> {t('team.criticalAreas')}
                                    </h4>
                                    <ul className="space-y-4">
                                        {member.specialties && member.specialties.map((spec, sIdx) => (
                                            <li key={sIdx} className="flex items-start gap-4 text-sm text-slate-400 font-light hover:text-white transition-colors duration-300">
                                                <CheckCircle2 size={16} className="text-[#c5a67c] shrink-0 mt-0.5" />
                                                <span>{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* FACTOR DIFERENCIADOR - REVESTIMIENTO DE LUJO COMPACTO */}
                <div className="relative py-16 px-8 md:px-20 bg-[#020617] border border-white/5 overflow-hidden">
                    {/* Fondo con rejilla técnica */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c5a67c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-[#c5a67c]/5 rounded-full blur-[120px]"></div>

                    <div className="relative z-10">
                        <Reveal>
                            <div className="text-center mb-16">
                                <span className="text-[#c5a67c] font-black tracking-[0.5em] uppercase text-[9px] mb-6 block">{t('team.differentiators')}</span>
                                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{t('team.differentiators')}</h3>
                                <div className="w-16 h-1 bg-[#c5a67c] mx-auto mt-6"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                                {differentiators.map((item, index) => {
                                    const Icon = differentiatorIcons[index] || ShieldCheck;
                                    return (
                                        <div key={index} className="relative group text-center">
                                            {/* Icono en Círculo Premium Compacto */}
                                            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                                                {/* Efecto de anillo animado */}
                                                <div className="absolute inset-0 rounded-full border border-white/5 group-hover:border-[#c5a67c]/40 transition-all duration-700 group-hover:scale-125"></div>
                                                <div className="absolute inset-2 rounded-full border border-white/10 group-hover:rotate-180 transition-all duration-1000 border-dashed"></div>

                                                <div className="relative w-12 h-12 bg-[#0f2a4a]/40 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#c5a67c] transition-all duration-500 shadow-2xl">
                                                    <Icon size={24} className="text-[#c5a67c] group-hover:text-[#020617] transition-all duration-500" strokeWidth={1.5} />
                                                </div>
                                            </div>

                                            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-3 group-hover:text-[#c5a67c] transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-500 text-xs leading-relaxed font-light max-w-[220px] mx-auto group-hover:text-slate-300 transition-colors">
                                                {item.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Sección Ayuda / CTA - Estilo Dark Premium */}
                <Reveal delay={200}>
                    <div className="mt-32 relative py-20 px-10 md:p-24 rounded-sm text-center bg-gradient-to-br from-[#0f2a4a] to-[#020617] border border-white/10 shadow-2xl overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#c5a67c]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <span className="text-[#c5a67c] font-black uppercase tracking-[0.4em] text-[9px] mb-8 block">
                                {t('team.immediateChannels')}
                            </span>
                            <h2 className="text-3xl md:text-6xl font-bold text-white mb-10 leading-tight tracking-tight">
                                {helpSection.question || t('clients.helpSection.question')}
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl font-light italic mb-16 opacity-80">
                                {helpSection.cta || t('clients.helpSection.cta')}
                            </p>
                            <Link
                                to="/contacto"
                                className="btn-wow inline-flex items-center gap-4 px-12 py-6 bg-[#c5a67c] text-[#020617] text-[11px] font-black uppercase tracking-[0.3em] rounded-sm shadow-[0_20px_40px_rgba(197,166,124,0.2)]"
                            >
                                {t('nav.contact')} <MessageCircle size={18} />
                            </Link>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default Team;
