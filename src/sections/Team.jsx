import React from 'react';
import { Users, Award, Briefcase } from 'lucide-react';
import Reveal from '../components/Reveal';
import { teamMembers } from '../data/content';

const Team = () => {
    return (
        <section id="team" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="text-[#c5a67c] font-bold tracking-widest uppercase text-xs mb-4 block">
                            Profesionales Comprometidos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0f2a4a] mb-6">
                            Nuestro Equipo
                        </h2>
                        <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                            Contamos con un equipo interdisciplinario de amplia experiencia, orientado a que nuestros clientes obtengan resultados de alto impacto.
                        </p>
                    </div>
                </Reveal>

                {/* Stats del equipo */}
                <div className="grid grid-cols-3 gap-8 mb-16">
                    {[
                        { icon: Users, value: '10+', label: 'Profesionales' },
                        { icon: Award, value: '5+', label: 'Años de Experiencia' },
                        { icon: Briefcase, value: '100+', label: 'Proyectos Exitosos' }
                    ].map((stat, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div className="text-center p-6">
                                <div className="w-14 h-14 mx-auto mb-4 bg-[#0f2a4a]/5 rounded-full flex items-center justify-center">
                                    <stat.icon size={24} className="text-[#c5a67c]" />
                                </div>
                                <div className="text-3xl font-bold text-[#0f2a4a] font-serif mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Grid de miembros */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div className="group bg-slate-50 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500">
                                {/* Placeholder de imagen */}
                                <div className="aspect-square bg-gradient-to-br from-[#0f2a4a] to-[#1e3a5f] flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#c5a67c]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="text-white/20 text-6xl font-serif font-bold">
                                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-[#0f2a4a] mb-1">{member.name}</h3>
                                    <p className="text-[#c5a67c] text-sm font-medium mb-3">{member.role}</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">{member.description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Mensaje de reclutamiento */}
                <Reveal delay={400}>
                    <div className="mt-16 text-center p-8 bg-slate-50 rounded-sm">
                        <p className="text-slate-600 mb-4">
                            ¿Eres profesional en áreas jurídicas, de seguridad o gestión humana?
                        </p>
                        <button className="text-[#c5a67c] font-bold text-sm uppercase tracking-widest hover:text-[#0f2a4a] transition-colors">
                            Únete a Nuestro Equipo →
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Team;
