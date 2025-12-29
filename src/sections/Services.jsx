import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, ShieldCheck, ArrowRight, MessageSquare, Info, Sparkles, LayoutGrid } from 'lucide-react';
import Reveal from '../components/Reveal';
import { servicesContent } from '../data/content';

const Services = () => {
    const location = useLocation();
    const isFullPage = location.pathname === '/servicios';

    return (
        <section id="services" className={`py-32 ${isFullPage ? 'bg-[#02010a]' : 'bg-white'} overflow-hidden relative`}>
            {/* Decoración técnica para Full Page */}
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
                        <Link to="/" className="hover:text-[#c5a67c] transition-colors">Inicio</Link>
                        <span>/</span>
                        <span className="text-[#c5a67c]">Portafolio Estratégico</span>
                    </div>
                )}

                <Reveal>
                    <div className="text-center mb-32">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#c5a67c]/10 rounded-full text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.4em] mb-8">
                            <LayoutGrid size={12} /> Soluciones de Alto Impacto
                        </div>
                        <h2 className={`text-4xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] ${isFullPage ? 'text-white' : 'text-[#0f2a4a]'}`}>
                            Servicios <br /> <span className="text-[#c5a67c]">Estratégicos.</span>
                        </h2>
                        <p className={`max-w-3xl mx-auto text-xl font-light leading-relaxed border-t border-[#c5a67c]/30 pt-10 mt-10 ${isFullPage ? 'text-slate-400' : 'text-slate-500'}`}>
                            {servicesContent.subtitle}
                        </p>
                    </div>
                </Reveal>

                {/* Grid de Servicios - Estilo Galería de Prestigio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                    {(isFullPage ? servicesContent.services : servicesContent.services.slice(0, 8)).map((service, index) => (
                        <Reveal key={service.id} delay={index * 50}>
                            <div className={`group transition-all duration-700 overflow-hidden flex flex-col h-full border ${isFullPage ? 'bg-white/5 border-white/5 hover:border-[#c5a67c]/30' : 'bg-white border-slate-100 hover:border-[#c5a67c]/30'} shadow-2xl`}>
                                {/* Imagen del Servicio - Formato Editorial */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <div className="absolute inset-0 bg-[#02010a]/40 group-hover:bg-transparent transition-all duration-1000 z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading="lazy"
                                        width="800"
                                        height="1000"
                                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop';
                                        }}
                                    />
                                    {/* Overlay técnico de esquina */}
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#c5a67c]/40 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <div className="px-3 py-1 bg-[#c5a67c] text-[#02010a] text-[8px] font-black uppercase tracking-widest shadow-xl">
                                            Consultoría Senior
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 flex-grow flex flex-col">
                                    <h3 className={`text-base font-black uppercase tracking-[0.2em] mb-6 leading-snug group-hover:text-[#c5a67c] transition-colors duration-500 ${isFullPage ? 'text-white' : 'text-[#0f2a4a]'}`}>
                                        {service.title}
                                    </h3>
                                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                                        <div className="flex gap-2">
                                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-[#c5a67c]/50"></div>)}
                                        </div>
                                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#c5a67c] opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-700">
                                            Detalles <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Botón Explorar Todo (solo en Inicio) */}
                {!isFullPage && (
                    <Reveal delay={400}>
                        <div className="mt-32 text-center">
                            <Link
                                to="/servicios"
                                className="btn-wow inline-flex items-center gap-6 px-16 py-7 bg-[#0f2a4a] text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                            >
                                Descubrir Portafolio Completo <LayoutGrid size={18} />
                            </Link>
                        </div>
                    </Reveal>
                )}

                {/* BENEFICIO DESTACADO: CONSULTORÍA GRATIS - Versión Compacta */}
                <Reveal delay={200}>
                    <div className="mt-24 relative bg-[#02010a] p-8 md:p-14 rounded-sm overflow-hidden text-white border border-[#c5a67c]/20 shadow-[-20px_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c5a67c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                        <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
                            <div>
                                <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.4em] mb-6">
                                    <Sparkles size={14} className="animate-pulse" /> Beneficio Corporativo
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-[0.9] tracking-tighter">
                                    Diagnóstico <br /> <span className="text-[#c5a67c]">Sin Costo.</span>
                                </h3>
                                <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light italic opacity-90 border-l-2 border-[#c5a67c] pl-6">
                                    "{servicesContent.freeConsultancy.description.split('. ')[0]}."
                                </p>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light max-w-xl">
                                    {servicesContent.freeConsultancy.description.split('. ').slice(1).join('. ')}
                                </p>
                                <Link
                                    to="/contacto"
                                    className="btn-wow inline-flex items-center gap-4 px-10 py-5 bg-[#c5a67c] text-[#02010a] text-[10px] font-black uppercase tracking-[0.3em] rounded-sm shadow-[0_15px_30px_rgba(197,166,124,0.3)]"
                                >
                                    Solicitar Auditoría <CheckCircle size={16} />
                                </Link>
                            </div>

                            <div className="hidden lg:grid grid-cols-2 gap-4 relative z-10 p-2">
                                {[
                                    { val: '$0', lab: 'Inversión', icon: Info },
                                    { val: 'Risk', lab: 'Matriz', icon: ShieldCheck },
                                    { val: 'Check', lab: 'Hallazgos', icon: CheckCircle },
                                    { val: 'Map', lab: 'Hoja de Ruta', icon: ArrowRight }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 bg-white/5 border border-white/5 hover:border-[#c5a67c]/30 transition-all duration-700 group flex flex-col items-center text-center">
                                        <stat.icon size={20} className="text-[#c5a67c] mb-3 group-hover:scale-110 transition-transform" />
                                        <div className="text-xl font-black text-white mb-1 tracking-tighter uppercase">{stat.val}</div>
                                        <div className="text-[8px] uppercase font-black tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors">{stat.lab}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Services;
