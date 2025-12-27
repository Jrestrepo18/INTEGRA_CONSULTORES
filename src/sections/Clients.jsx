import React from 'react';
import { Building, Factory, ShoppingBag, Leaf, Building2, Landmark } from 'lucide-react';
import Reveal from '../components/Reveal';
import { clientsInfo } from '../data/content';

const Clients = () => {
    const sectorIcons = [Building, Factory, ShoppingBag, Leaf, Building2, Landmark];

    return (
        <section id="clients" className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="text-[#c5a67c] font-bold tracking-widest uppercase text-xs mb-4 block">
                            Confianza Empresarial
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0f2a4a] mb-6">
                            {clientsInfo.title}
                        </h2>
                        <p className="text-slate-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                            {clientsInfo.description}
                        </p>
                    </div>
                </Reveal>

                {/* Sectores que atendemos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                    {clientsInfo.sectors.map((sector, index) => {
                        const Icon = sectorIcons[index] || Building;
                        return (
                            <Reveal key={index} delay={index * 50}>
                                <div className="bg-white p-6 rounded-sm text-center hover:shadow-lg transition-all duration-300 group cursor-default">
                                    <div className="w-12 h-12 mx-auto mb-4 bg-[#0f2a4a]/5 rounded-full flex items-center justify-center group-hover:bg-[#c5a67c]/10 transition-colors">
                                        <Icon size={24} className="text-[#0f2a4a] group-hover:text-[#c5a67c] transition-colors" />
                                    </div>
                                    <p className="text-sm font-medium text-slate-700">{sector}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* Beneficios para clientes */}
                <Reveal delay={300}>
                    <div className="bg-[#0f2a4a] rounded-sm p-10 md:p-16 text-center relative overflow-hidden">
                        {/* Decoración */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a67c]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c5a67c]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <p className="text-[#c5a67c] text-xl md:text-2xl font-serif italic mb-6 leading-relaxed">
                                "Brindamos a nuestros clientes la tranquilidad de enfocarse en sus actividades productivas, mientras gestionamos el cumplimiento normativo y la debida diligencia."
                            </p>
                            <div className="w-16 h-[2px] bg-[#c5a67c] mx-auto mb-6"></div>
                            <p className="text-slate-400 text-sm uppercase tracking-widest">
                                Nuestro Compromiso
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* CTA */}
                <Reveal delay={400}>
                    <div className="mt-12 text-center">
                        <p className="text-slate-600 mb-6">
                            ¿Su empresa necesita gestión integral del riesgo?
                        </p>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-4 bg-[#c5a67c] text-[#0f2a4a] font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#d6bba0] transition-colors shadow-lg"
                        >
                            Solicitar Consulta
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Clients;
