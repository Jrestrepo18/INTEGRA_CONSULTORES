import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, ShieldCheck, ArrowRight, MessageSquare, Info } from 'lucide-react';
import Reveal from '../components/Reveal';
import { servicesContent } from '../data/content';

const Services = () => {
    const location = useLocation();
    const isFullPage = location.pathname === '/servicios';

    // Función para obtener una imagen de placeholder profesional si no hay una real
    const getServiceImage = (id) => {
        const keywords = [
            'security', 'safety', 'law', 'protection', 'investigation',
            'recruitment', 'office', 'team', 'insurance', 'guard',
            'medical', 'certificate', 'police', 'analytics', 'nature',
            'money', 'billing', 'compliance', 'accounting', 'technology',
            'installation', 'traffic', 'dashboard', 'management', 'drone'
        ];
        const keyword = keywords[id - 1] || 'business';
        return `https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop`; // Imagen base profesional
    };

    return (
        <section id="services" className={`py-24 ${isFullPage ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Breadcrumbs solo para full page */}
                {isFullPage && (
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">
                        <Link to="/" className="hover:text-[#c5a67c] transition-colors">Inicio</Link>
                        <span>/</span>
                        <span className="text-[#c5a67c]">Nuestros Servicios</span>
                    </div>
                )}

                <Reveal>
                    <div className="text-center mb-20">
                        <span className="text-[#c5a67c] font-bold tracking-widest uppercase text-xs mb-4 block">
                            Soluciones Integrales
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0f2a4a] mb-6">
                            {servicesContent.title}
                        </h2>
                        <div className="w-24 h-1 bg-[#c5a67c] mx-auto mb-6"></div>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            {servicesContent.subtitle}
                        </p>
                    </div>
                </Reveal>

                {/* Grid de Servicios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {(isFullPage ? servicesContent.services : servicesContent.services.slice(0, 8)).map((service, index) => (
                        <Reveal key={service.id} delay={index * 50}>
                            <div className="group bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm flex flex-col h-full">
                                {/* Imagen del Servicio con Filtro Corporativo */}
                                <div className="relative h-56 overflow-hidden">
                                    {/* Overlay Corporativo: Azul profundo que se aclara al hover */}
                                    <div className="absolute inset-0 bg-[#0f2a4a]/40 group-hover:bg-[#0f2a4a]/10 transition-all duration-500 z-10"></div>

                                    {/* Gradiente sutil para mejorar legibilidad */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a4a]/80 via-transparent to-transparent opacity-60 z-10"></div>

                                    <img
                                        src={`https://source.unsplash.com/featured/800x600?corporate,${service.title.split(' ').pop()}`}
                                        alt={service.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop';
                                        }}
                                    />

                                    {/* Badge con Icono */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center rounded-sm shadow-xl group-hover:bg-[#c5a67c] group-hover:border-[#c5a67c] transition-all duration-500">
                                            <ShieldCheck size={20} className="text-white group-hover:text-[#0f2a4a]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-sm font-bold text-[#0f2a4a] uppercase tracking-wider mb-4 leading-tight group-hover:text-[#c5a67c] transition-colors">
                                        {service.title}
                                    </h3>
                                    <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between items-center">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Consultoría Disponible</span>
                                        <ArrowRight size={14} className="text-[#c5a67c] transform group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Botón Ver Todos (solo si no estamos en la página completa) */}
                {!isFullPage && (
                    <Reveal delay={400}>
                        <div className="mt-16 text-center">
                            <Link
                                to="/servicios"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-[#0f2a4a] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#c5a67c] transition-all shadow-xl shadow-[#0f2a4a]/20"
                            >
                                Ver Todos los Servicios <ArrowRight size={16} />
                            </Link>
                        </div>
                    </Reveal>
                )}

                {/* Sección Consultoría Gratis */}
                <Reveal delay={200}>
                    <div className="mt-32 relative bg-[#0f2a4a] p-10 md:p-20 rounded-sm overflow-hidden text-white">
                        {/* Decoración de fondo */}
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c5a67c]/10 to-transparent"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c5a67c]/20 rounded-full text-[#c5a67c] text-[10px] font-bold uppercase tracking-widest mb-6">
                                    <MessageSquare size={14} /> Beneficio Exclusivo
                                </div>
                                <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                                    {servicesContent.freeConsultancy.title}
                                </h3>
                                <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                                    "{servicesContent.freeConsultancy.description.split('. ')[0]}."
                                </p>
                                <p className="text-slate-400 leading-relaxed mb-10">
                                    {servicesContent.freeConsultancy.description.split('. ').slice(1).join('. ')}
                                </p>
                                <Link
                                    to="/contacto"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#c5a67c] text-[#0f2a4a] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-all shadow-lg"
                                >
                                    Solicitar mi Consultoría Gratis <CheckCircle size={14} />
                                </Link>
                            </div>

                            <div className="hidden lg:block">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="h-40 bg-white/5 rounded-sm flex items-center justify-center flex-col p-4 border border-white/10 hover:border-[#c5a67c]/30 transition-colors">
                                            <div className="text-2xl font-serif text-[#c5a67c] mb-2">$0</div>
                                            <div className="text-[9px] uppercase font-bold tracking-widest text-center">Sin costo de inversión</div>
                                        </div>
                                        <div className="h-40 bg-white/5 rounded-sm flex items-center justify-center flex-col p-4 border border-white/10 hover:border-[#c5a67c]/30 transition-colors">
                                            <ShieldCheck size={32} className="text-[#c5a67c] mb-2" />
                                            <div className="text-[9px] uppercase font-bold tracking-widest text-center">Análisis de Riesgos</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <div className="h-40 bg-white/5 rounded-sm flex items-center justify-center flex-col p-4 border border-white/10 hover:border-[#c5a67c]/30 transition-colors">
                                            <Reveal duration={2000}>
                                                <div className="w-12 h-12 border-2 border-[#c5a67c] rounded-full animate-ping opacity-20 absolute"></div>
                                                <div className="w-12 h-12 bg-[#c5a67c] rounded-full flex items-center justify-center text-[#0f2a4a]">
                                                    <Info size={24} />
                                                </div>
                                            </Reveal>
                                            <div className="text-[9px] uppercase font-bold tracking-widest text-center mt-4">Puntos de Mejora</div>
                                        </div>
                                        <div className="h-40 bg-white/5 rounded-sm flex items-center justify-center flex-col p-4 border border-white/10 hover:border-[#c5a67c]/30 transition-colors">
                                            <ArrowRight size={32} className="text-[#c5a67c] mb-2" />
                                            <div className="text-[9px] uppercase font-bold tracking-widest text-center">Hoja de Ruta</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Services;
