import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle2, MessageCircle, Star, ShieldCheck } from 'lucide-react';
import Reveal from '../components/Reveal';
import { teamContent } from '../data/content';

const Team = () => {
    return (
        <section className="py-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
                    <Link to="/" className="hover:text-[#c5a67c] transition-colors">Inicio</Link>
                    <span>/</span>
                    <span className="text-[#c5a67c]">{teamContent.title}</span>
                </div>

                <Reveal>
                    <div className="mb-20">
                        <span className="text-[#c5a67c] font-bold tracking-widest uppercase text-xs mb-4 block">
                            {teamContent.subtitle}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0f2a4a] mb-8">
                            {teamContent.headerText}
                        </h2>
                        <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
                            {teamContent.description}
                        </p>
                    </div>
                </Reveal>

                {/* Grid de Miembros del Equipo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    {teamContent.members.map((member, index) => (
                        <Reveal key={index} delay={index * 150}>
                            <div className="group bg-slate-50 border border-slate-100 rounded-sm overflow-hidden hover:shadow-2xl hover:border-[#c5a67c]/30 transition-all duration-500 flex flex-col h-full">
                                {/* Imagen del Miembro con Filtro */}
                                <div className="relative h-80 overflow-hidden bg-[#0f2a4a]">
                                    <div className="absolute inset-0 bg-[#0f2a4a]/40 group-hover:bg-[#0f2a4a]/10 transition-all duration-500 z-10"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop';
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 bg-gradient-to-t from-[#0f2a4a] to-transparent">
                                        <h3 className="text-xl font-serif text-white mb-1">{member.name}</h3>
                                        <p className="text-[#c5a67c] text-xs font-bold uppercase tracking-widest">{member.role}</p>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow">
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <ShieldCheck size={14} className="text-[#c5a67c]" /> Especialidades
                                    </h4>
                                    <ul className="space-y-4">
                                        {member.specialties.map((spec, sIdx) => (
                                            <li key={sIdx} className="flex items-start gap-3 text-sm text-slate-600 italic">
                                                <span className="w-1.5 h-1.5 bg-[#c5a67c] rounded-full mt-1.5 shrink-0"></span>
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Factor Diferenciador */}
                <div className="bg-[#0f2a4a] rounded-sm overflow-hidden mb-32 relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Star size={200} className="text-white" />
                    </div>

                    <div className="p-12 md:p-20 relative z-10">
                        <Reveal>
                            <div className="text-center mb-16">
                                <span className="text-[#c5a67c] font-bold tracking-widest uppercase text-xs mb-4 block">Valores que nos definen</span>
                                <h3 className="text-3xl md:text-5xl font-serif text-white">{teamContent.differentiatorsTitle}</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {teamContent.differentiators.map((item, index) => (
                                    <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#c5a67c]/50 transition-all duration-500 group flex flex-col items-center text-center">
                                        <div className="w-12 h-12 rounded-full border border-[#c5a67c]/30 flex items-center justify-center mb-6 group-hover:bg-[#c5a67c] transition-all duration-500">
                                            <div className="w-2 h-2 bg-[#c5a67c] rounded-full group-hover:bg-[#0f2a4a]"></div>
                                        </div>
                                        <span className="text-white text-[11px] font-bold uppercase tracking-widest mb-4 block group-hover:text-[#c5a67c] transition-colors">
                                            {item.title}
                                        </span>
                                        <p className="text-slate-400 text-xs leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Sección Como podemos ayudar / CTA */}
                <Reveal>
                    <div className="bg-slate-50 border border-slate-100 p-12 md:p-20 rounded-sm text-center relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c5a67c]/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h3 className="text-[#c5a67c] font-bold uppercase tracking-widest text-xs mb-6">
                                {teamContent.helpSection.title}
                            </h3>
                            <h2 className="text-3xl md:text-5xl font-serif text-[#0f2a4a] mb-8 leading-tight">
                                {teamContent.helpSection.question}
                            </h2>
                            <p className="text-slate-600 text-lg md:text-xl italic mb-12">
                                "{teamContent.helpSection.cta}"
                            </p>
                            <Link
                                to="/contacto"
                                className="inline-flex items-center gap-3 px-12 py-5 bg-[#0f2a4a] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#c5a67c] transition-all shadow-2xl shadow-[#0f2a4a]/20 hover:gap-5"
                            >
                                Contactar Ahora <MessageCircle size={18} />
                            </Link>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default Team;
