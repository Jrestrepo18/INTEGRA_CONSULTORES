import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, ShieldCheck, ArrowRight, MessageSquare, Info, Sparkles, LayoutGrid } from 'lucide-react';
import Reveal from '../components/Reveal';
import ServiceModal from '../components/ServiceModal';
import { servicesContent } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const location = useLocation();
    const isFullPage = location.pathname === '/servicios';
    const { t, tObj } = useLanguage();

    // Estado para el modal de servicios
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openServiceDetails = (service, title) => {
        setSelectedService({ ...service, displayTitle: title });
        setIsModalOpen(true);
    };

    // Obtener lista de servicios traducidos
    const translatedServices = tObj('services.servicesList') || [];

    return (
        <section id="services" className={`py-20 md:py-28 ${isFullPage ? 'bg-[#02010a]' : 'bg-white'} overflow-hidden relative`}>
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
                        <Link to="/" className="hover:text-[#c5a67c] transition-colors">{t('common.breadcrumb.home')}</Link>
                        <span>/</span>
                        <span className="text-[#c5a67c]">{t('nav.services')}</span>
                    </div>
                )}

                <Reveal>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#c5a67c]/10 rounded-full text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.4em] mb-8">
                            <LayoutGrid size={12} /> {t('services.badge')}
                        </div>
                        <h2 className={`text-2xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-[0.9] ${isFullPage ? 'text-white' : 'text-[#0f2a4a]'}`}>
                            {t('services.title').split(' ')[0]} <br /> <span className="text-[#c5a67c]">{t('services.title').split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className={`max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed border-t border-[#c5a67c]/30 pt-6 mt-6 ${isFullPage ? 'text-slate-400' : 'text-slate-500'}`}>
                            {t('services.subtitle')}
                        </p>
                    </div>
                </Reveal>

                {/* Grid de Servicios - Estilo Galería de Prestigio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
                    {(isFullPage ? servicesContent.services : servicesContent.services.slice(0, 8)).map((service, index) => {
                        // Buscar el título traducido
                        const translatedService = translatedServices.find(s => s.id === service.id);
                        const displayTitle = translatedService ? translatedService.title : service.title;

                        return (
                            <Reveal key={service.id} delay={index * 50}>
                                <div
                                    onClick={() => openServiceDetails(service, displayTitle)}
                                    className={`group cursor-pointer transition-all duration-700 overflow-hidden flex flex-col h-full border ${isFullPage ? 'bg-white/5 border-white/5 hover:border-[#c5a67c]/30' : 'bg-white border-slate-100 hover:border-[#c5a67c]/30'} shadow-2xl`}
                                >
                                    {/* Imagen del Servicio - Formato Editorial */}
                                    <div className="relative aspect-[4/4] overflow-hidden">
                                        <div className="absolute inset-0 bg-[#02010a]/40 group-hover:bg-transparent transition-all duration-1000 z-10"></div>
                                        <img
                                            src={service.image}
                                            alt={displayTitle}
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
                                                {t('services.consultLabel')}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className={`text-sm font-black uppercase tracking-[0.15em] mb-4 leading-snug group-hover:text-[#c5a67c] transition-colors duration-500 ${isFullPage ? 'text-white' : 'text-[#0f2a4a]'}`}>
                                            {displayTitle}
                                        </h3>
                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                                            <div className="flex gap-2">
                                                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-[#c5a67c]/50"></div>)}
                                            </div>
                                            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#c5a67c] translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
                                                {t('services.detailsBtn')} <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* Modal de Detalles de Servicio */}
                <ServiceModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    serviceId={selectedService?.id}
                    title={selectedService?.displayTitle}
                    image={selectedService?.image}
                />

                {/* Botón Explorar Todo (solo en Inicio) */}
                {!isFullPage && (
                    <Reveal delay={400}>
                        <div className="mt-20 text-center">
                            <Link
                                to="/servicios"
                                className="btn-wow inline-flex items-center gap-4 px-12 py-5 bg-[#0f2a4a] text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                            >
                                {t('services.exploreBtn')} <LayoutGrid size={18} />
                            </Link>
                        </div>
                    </Reveal>
                )}

                {/* BENEFICIO DESTACADO: CONSULTORÍA GRATIS - Versión Compacta */}
                <Reveal delay={200}>
                    <div className="mt-16 relative bg-[#02010a] p-6 md:p-10 rounded-sm overflow-hidden text-white border border-[#c5a67c]/20 shadow-[-20px_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c5a67c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                        <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
                            <div>
                                <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.4em] mb-6">
                                    <Sparkles size={14} className="animate-pulse" /> {t('services.freeConsult.badge')}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-[0.9] tracking-tighter">
                                    {t('services.freeConsult.title').split('.')[0]} <br /> <span className="text-[#c5a67c]">{t('services.freeConsult.title').includes('.') ? '' : t('services.freeConsult.title')}</span>
                                </h3>
                                <p className="text-slate-300 text-base leading-relaxed mb-4 font-light italic opacity-90 border-l-2 border-[#c5a67c] pl-4">
                                    "{t('services.freeConsult.description')}"
                                </p>
                                <Link
                                    to="/contacto"
                                    className="btn-wow inline-flex items-center gap-3 px-8 py-4 bg-[#c5a67c] text-[#02010a] text-[9px] font-black uppercase tracking-[0.25em] rounded-sm shadow-[0_15px_30px_rgba(197,166,124,0.3)]"
                                >
                                    {t('services.freeConsult.ctaBtn')} <CheckCircle size={16} />
                                </Link>
                            </div>

                            <div className="hidden lg:grid grid-cols-2 gap-4 relative z-10 p-2">
                                {[
                                    { val: '$0', lab: t('services.items.investment'), icon: Info },
                                    { val: 'Risk', lab: t('services.items.matrix'), icon: ShieldCheck },
                                    { val: 'Check', lab: t('services.items.findings'), icon: CheckCircle },
                                    { val: 'Map', lab: t('services.items.roadmap'), icon: ArrowRight }
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
