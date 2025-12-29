import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, MessageCircle, ShieldCheck, Award, Users, TrendingUp, Sparkles, Building2, ExternalLink, Factory, ShoppingBag, Leaf, Landmark, Briefcase } from 'lucide-react';
import Reveal from '../components/Reveal';
import { clientsContent } from '../data/content';

const Clients = () => {
    // Sectores estratégicos para elevar el perfil profesional
    const sectors = [
        { name: 'Industrial & Manufactura', icon: Factory, desc: 'Optimización de riesgos en líneas de producción y plantas.' },
        { name: 'Banca & Finanzas', icon: Landmark, desc: 'Cumplimiento normativo y prevención de fraude.' },
        { name: 'Retail & Logística', icon: ShoppingBag, desc: 'Debida diligencia en cadena de suministros.' },
        { name: 'Construcción & Infraestructura', icon: Building2, desc: 'Seguridad operativa y gestión de activos.' },
        { name: 'Agronegocios', icon: Leaf, desc: 'Protección de patrimonio rural y sostenibilidad.' },
        { name: 'Servicios Profesionales', icon: Briefcase, desc: 'Gestión de talento y cumplimiento legal.' }
    ];

    return (
        <section className="bg-[#02010a] min-h-screen border-t border-white/5 pb-32 overflow-hidden">
            {/* Efectos de luz de fondo sutiles */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c5a67c]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 pt-24 relative z-10">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-12">
                    <Link to="/" className="hover:text-[#c5a67c] transition-colors">Inicio</Link>
                    <span>/</span>
                    <span className="text-[#c5a67c]">{clientsContent.title}</span>
                </div>

                <Reveal>
                    <div className="mb-32">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full mb-8">
                            <Building2 size={12} className="text-[#c5a67c]" />
                            <span className="text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.3em]">Nuestra Cartera de Confianza</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10 tracking-tighter leading-none">
                            Alianzas que <br /> <span className="text-[#c5a67c]">Perduran.</span>
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-4xl font-light leading-relaxed border-l-2 border-[#c5a67c]/30 pl-8 ml-2 mt-12">
                            {clientsContent.description}
                        </p>
                    </div>
                </Reveal>

                {/* Grid de Logos - Color Real con Fondo Blanco para visibilidad */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-40">
                    {clientsContent.clients.map((client, index) => (
                        <Reveal key={index} delay={index * 50}>
                            <div className="group h-48 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center p-8 transition-all duration-700 relative overflow-hidden border border-white/5 hover:border-[#c5a67c]/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(197,166,124,0.1)] rounded-sm">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    width="300"
                                    height="150"
                                    className="max-w-full max-h-full object-contain transition-all duration-700 opacity-80 group-hover:scale-110 group-hover:opacity-100"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />

                                {/* Label flotante en hover */}
                                <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#02010a] bg-[#c5a67c] px-2 py-1">
                                        Socio Corporativo
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* SECTORES ESTRATÉGICOS */}
                <div className="mb-40">
                    <Reveal>
                        <div className="text-center mb-24">
                            <span className="text-[#c5a67c] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Ecosistema de Experiencia</span>
                            <h3 className="text-3xl md:text-6xl font-bold text-white tracking-tight">Especialización por Sector</h3>
                            <div className="w-24 h-1 bg-[#c5a67c] mx-auto mt-8"></div>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sectors.map((sector, index) => (
                            <Reveal key={index} delay={index * 100}>
                                <div className="p-10 bg-white/5 border border-white/5 hover:border-[#c5a67c]/30 transition-all duration-500 group">
                                    <sector.icon className="text-[#c5a67c] mb-8 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.2} />
                                    <h4 className="text-white text-lg font-bold mb-4 group-hover:text-[#c5a67c] transition-colors">{sector.name}</h4>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {sector.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Aliados Estratégicos - Versión Compacta y Organizada */}
                <div className="relative py-16 px-8 md:px-20 bg-[#02010a] border border-white/5 overflow-hidden mb-32">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c5a67c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                        {/* Columna Texto */}
                        <div>
                            <Reveal>
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.3em] mb-6">
                                    <Handshake size={14} /> Cooperación Multidisciplinaria
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                                    Nuestra Red de <br /> <span className="text-[#c5a67c]">Aliados Estratégicos.</span>
                                </h3>
                                <div className="space-y-6">
                                    {clientsContent.partners.map((partner, index) => (
                                        <div key={index} className="flex gap-6 group">
                                            <div className="w-10 h-10 bg-[#0f2a4a]/40 border border-white/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-[#c5a67c] transition-all duration-700">
                                                <Award className="text-[#c5a67c] group-hover:text-[#02010a]" size={18} />
                                            </div>
                                            <div className="border-b border-white/5 pb-6 group-last:border-none w-full">
                                                <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-2 group-hover:text-[#c5a67c] transition-colors flex items-center gap-3">
                                                    {partner.name}
                                                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </h4>
                                                <p className="text-slate-500 text-xs leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                                                    {partner.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>

                        {/* Columna Imagen - Arreglada */}
                        <div className="relative h-full flex items-center justify-center lg:justify-end">
                            <Reveal delay={200}>
                                <div className="relative w-full max-w-[350px] aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden group shadow-2xl border border-white/10 bg-[#0f2a4a]">
                                    {/* Imagen con Fallback */}
                                    <div className="absolute inset-0 bg-[#02010a]/20 group-hover:bg-transparent transition-all duration-1000 z-10"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                                        alt="Aliados Estratégicos"
                                        loading="lazy"
                                        width="1000"
                                        height="1250"
                                        className="w-full h-full object-cover grayscale saturate-0 group-hover:scale-105 transition-all duration-1000"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.classList.add('bg-slate-800');
                                        }}
                                    />

                                    {/* Etiqueta Flotante Organizada */}
                                    <div className="absolute bottom-0 left-0 w-full z-20">
                                        <div className="bg-[#02010a]/95 backdrop-blur-xl p-5 border-t border-[#c5a67c]/30 flex items-center justify-between">
                                            <div>
                                                <div className="text-2xl font-bold text-white mb-1">100%</div>
                                                <div className="text-[8px] uppercase font-black tracking-widest text-[#c5a67c]">Confidencialidad</div>
                                            </div>
                                            <ShieldCheck size={24} className="text-[#c5a67c] opacity-50" />
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* Sección Ayuda / CTA */}
                <Reveal delay={200}>
                    <div className="relative py-16 px-8 md:p-20 rounded-sm text-center bg-gradient-to-br from-[#0f2a4a] to-[#02010a] border border-white/10 shadow-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay group-hover:scale-110 transition-transform duration-[5s]"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <span className="text-[#c5a67c] font-black uppercase tracking-[0.5em] text-[9px] mb-6 block">
                                Sinergia Empresarial de Alto Impacto
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-none tracking-tighter">
                                {clientsContent.helpSection.question}
                            </h2>
                            <p className="text-slate-400 text-base md:text-xl font-light italic mb-10 opacity-80 max-w-2xl mx-auto">
                                {clientsContent.helpSection.cta}
                            </p>
                            <Link
                                to="/contacto"
                                className="btn-wow inline-flex items-center gap-4 px-10 py-5 bg-[#c5a67c] text-[#02010a] text-[10px] font-black uppercase tracking-[0.4em] rounded-sm transition-all shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                            >
                                Iniciar Proceso de Vinculación <MessageCircle size={16} />
                            </Link>
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default Clients;
