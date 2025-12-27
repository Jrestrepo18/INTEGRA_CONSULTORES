import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import { clientsContent } from '../data/content';

const Clients = () => {
    return (
        <section className="py-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
                    <Link to="/" className="hover:text-[#c5a67c] transition-colors">Inicio</Link>
                    <span>/</span>
                    <span className="text-[#c5a67c]">{clientsContent.title}</span>
                </div>

                <Reveal>
                    <div className="mb-20">
                        <span className="text-[#c5a67c] font-bold tracking-widest uppercase text-xs mb-4 block">
                            {clientsContent.subtitle}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0f2a4a] mb-8">
                            {clientsContent.title}
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
                            {clientsContent.description}
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-32">
                    {clientsContent.clients.map((client, index) => (
                        <Reveal key={index} delay={index * 100}>
                            <div className="group h-40 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center p-4 hover:bg-white hover:shadow-xl hover:border-[#c5a67c]/30 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-0 bg-[#c5a67c] group-hover:h-full transition-all duration-500"></div>
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-[90%] max-h-[90%] object-contain group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Aliados Estratégicos */}
                <div className="bg-[#0f2a4a] rounded-sm overflow-hidden mb-32">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-12 md:p-20 flex flex-col justify-center">
                            <Reveal>
                                <div className="inline-flex items-center gap-2 text-[#c5a67c] text-xs font-bold uppercase tracking-widest mb-6">
                                    <Handshake size={20} /> Alianzas de Valor
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif text-white mb-8">
                                    {clientsContent.partnersTitle}
                                </h3>
                                <div className="space-y-8">
                                    {clientsContent.partners.map((partner, index) => (
                                        <div key={index} className="flex gap-6 group">
                                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center shrink-0 group-hover:border-[#c5a67c]/50 transition-colors">
                                                <CheckCircle2 className="text-[#c5a67c]" size={20} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 group-hover:text-[#c5a67c] transition-colors italic">
                                                    {partner.name}
                                                </h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    {partner.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>
                        <div className="relative h-64 lg:h-auto bg-slate-900 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=1200&auto=format&fit=crop"
                                alt="Aliados"
                                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0f2a4a] to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Sección Como podemos ayudar / CTA */}
                <Reveal>
                    <div className="bg-slate-50 border border-slate-100 p-12 md:p-20 rounded-sm text-center relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c5a67c]/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h3 className="text-[#c5a67c] font-bold uppercase tracking-widest text-xs mb-6">
                                {clientsContent.helpSection.title}
                            </h3>
                            <h2 className="text-3xl md:text-5xl font-serif text-[#0f2a4a] mb-8 leading-tight">
                                {clientsContent.helpSection.question}
                            </h2>
                            <p className="text-slate-600 text-lg md:text-xl italic mb-12">
                                "{clientsContent.helpSection.cta}"
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

export default Clients;
