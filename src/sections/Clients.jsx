import React from 'react';
import { Building, Factory, ShoppingBag, Leaf, Building2, Landmark } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Clients = () => {
    const { t, tObj } = useLanguage();
    const sectorIcons = [Building, Factory, ShoppingBag, Leaf, Building2, Landmark];
    const sectors = tObj('clients.sectors.list') || [];

    return (
        <section id="clients" className="py-16 md:py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal>
                    <div className="text-center mb-10">
                        <span className="text-[#c5a67c] font-bold tracking-widest uppercase text-xs mb-4 block">
                            {t('clients.badge')}
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#0f2a4a] mb-4">
                            {t('clients.title')}
                        </h2>
                        <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
                            {t('clients.description')}
                        </p>
                    </div>
                </Reveal>

                {/* Sectores que atendemos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                    {sectors.map((sector, index) => {
                        const Icon = sectorIcons[index] || Building;
                        return (
                            <Reveal key={index} delay={index * 50}>
                                <div className="bg-white p-4 rounded-sm text-center hover:shadow-lg transition-all duration-300 group cursor-default">
                                    <div className="w-10 h-10 mx-auto mb-3 bg-[#0f2a4a]/5 rounded-full flex items-center justify-center group-hover:bg-[#c5a67c]/10 transition-colors">
                                        <Icon size={20} className="text-[#0f2a4a] group-hover:text-[#c5a67c] transition-colors" />
                                    </div>
                                    <p className="text-xs font-medium text-slate-700">{sector}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* Beneficios para clientes */}
                <Reveal delay={300}>
                    <div className="bg-[#0f2a4a] rounded-sm p-8 md:p-12 text-center relative overflow-hidden">
                        {/* Decoración */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a67c]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c5a67c]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <p className="text-[#c5a67c] text-base md:text-lg lg:text-xl font-serif italic mb-4 leading-relaxed">
                                "{t('clients.commitmentQuote')}"
                            </p>
                            <div className="w-12 h-[2px] bg-[#c5a67c] mx-auto mb-4"></div>
                            <p className="text-slate-400 text-sm uppercase tracking-widest">
                                {t('clients.commitment')}
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* CTA */}
                <Reveal delay={400}>
                    <div className="mt-8 text-center">
                        <p className="text-slate-600 text-sm mb-4">
                            {t('clients.needRiskManagement')}
                        </p>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-[#c5a67c] text-[#0f2a4a] font-bold text-[10px] uppercase tracking-widest rounded-sm hover:bg-[#d6bba0] transition-colors shadow-lg"
                        >
                            {t('clients.requestConsultation')}
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Clients;
