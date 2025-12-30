import React from 'react';
import { Users, Award, Briefcase } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Team = () => {
    const { t, tObj } = useLanguage();
    const members = tObj('team.members') || [];

    return (
        <section id="team" className="py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal>
                    <div className="text-center mb-10">
                        <span className="text-[#c5a67c] font-bold tracking-widest uppercase text-xs mb-4 block">
                            {t('team.badge')}
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0f2a4a] mb-4">
                            {t('team.title')}
                        </h2>
                        <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
                            {t('team.subtitle')}
                        </p>
                    </div>
                </Reveal>

                {/* Stats del equipo */}
                <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
                    {[
                        { icon: Users, value: '10+', label: t('team.stats.professionals') },
                        { icon: Award, value: '5+', label: t('team.stats.experience') },
                        { icon: Briefcase, value: '100+', label: t('team.stats.projects') }
                    ].map((stat, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div className="text-center p-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 bg-[#0f2a4a]/5 rounded-full flex items-center justify-center">
                                    <stat.icon size={20} className="text-[#c5a67c]" />
                                </div>
                                <div className="text-xl md:text-2xl font-bold text-[#0f2a4a] font-serif mb-1">{stat.value}</div>
                                <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Grid de miembros */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {members.map((member, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div className="group bg-slate-50 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500">
                                {/* Placeholder de imagen */}
                                <div className="aspect-square bg-gradient-to-br from-[#0f2a4a] to-[#1e3a5f] flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#c5a67c]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="text-white/20 text-6xl font-serif font-bold">
                                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-[#0f2a4a] mb-1">{member.name}</h3>
                                    <p className="text-[#c5a67c] text-sm font-medium mb-3">{member.role}</p>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        {member.specialties ? member.specialties.join(', ') : ''}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Mensaje de reclutamiento */}
                <Reveal delay={400}>
                    <div className="mt-10 text-center p-6 bg-slate-50 rounded-sm">
                        <p className="text-slate-600 text-sm mb-3">
                            {t('team.recruitQuestion')}
                        </p>
                        <button className="text-[#c5a67c] font-bold text-xs uppercase tracking-widest hover:text-[#0f2a4a] transition-colors">
                            {t('team.joinTeam')} →
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Team;
