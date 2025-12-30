import React, { useEffect } from 'react';
import { X, CheckCircle, Shield, ArrowRight, Clock, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ServiceModal = ({ isOpen, onClose, serviceId, title, image }) => {
    const { t, tObj } = useLanguage();

    // Bloquear scroll cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('modal-open');
        } else {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Obtener detalles del servicio desde el sistema i18n
    const details = tObj('services.details')?.[serviceId] || {
        description: t('common.loading'),
        benefits: [],
        features: []
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop con Blur de Lujo */}
            <div
                className="absolute inset-0 bg-[#02010a]/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-500"
                onClick={onClose}
            ></div>

            {/* Contenedor del Modal */}
            <div className="relative w-full max-w-5xl bg-white overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 rounded-sm">

                {/* Botón Cerrar Flotante */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-[#02010a] text-white rounded-full hover:bg-[#c5a67c] hover:scale-110 transition-all duration-300 group"
                >
                    <X size={24} className="group-hover:rotate-90 transition-transform" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">

                    {/* Lateral Izquierdo: Imagen y Contexto */}
                    <div className="relative h-64 lg:h-full overflow-hidden flex flex-col justify-end p-10 group">
                        <div className="absolute inset-0 z-0">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-2000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#02010a] via-[#02010a]/50 to-transparent"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a67c] text-[#02010a] text-[9px] font-black uppercase tracking-widest mb-4">
                                <Award size={12} /> {t('services.consultLabel')}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-none tracking-tighter mb-4 uppercase">
                                {title}
                            </h2>
                            <div className="flex items-center gap-4 text-white/60 text-[10px] uppercase font-bold tracking-[0.2em]">
                                <span className="flex items-center gap-1"><Clock size={12} /> 5+ {t('team.stats.experience')}</span>
                                <span className="flex items-center gap-1"><Shield size={12} /> {t('clients.confidentiality')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Contenido Derecho: Detalles Técnicos */}
                    <div className="p-8 md:p-14 lg:overflow-y-auto">
                        <div className="space-y-10">

                            {/* Descripción Principal */}
                            <div>
                                <h4 className="text-[10px] font-black text-[#c5a67c] uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                                    <div className="w-8 h-[1px] bg-[#c5a67c]"></div> Descripción del Servicio
                                </h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-light">
                                    {details.description}
                                </p>
                            </div>

                            {/* Grid de Beneficios / Características */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xs font-black text-[#0f2a4a] uppercase tracking-widest mb-6 px-4 py-2 bg-slate-50 border-l-4 border-[#c5a67c]">
                                        Alcance Técnico
                                    </h4>
                                    <ul className="space-y-4">
                                        {(details.features || []).map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-sm text-slate-500 group">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#c5a67c] shrink-0 group-hover:scale-125 transition-transform"></div>
                                                <span className="leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black text-[#0f2a4a] uppercase tracking-widest mb-6 px-4 py-2 bg-slate-50 border-l-4 border-slate-300">
                                        Beneficios Directos
                                    </h4>
                                    <ul className="space-y-4">
                                        {(details.benefits || []).map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                                                <CheckCircle size={18} className="text-[#c5a67c] shrink-0" />
                                                <span className="leading-tight">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* CTA Footer */}
                            <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="text-center md:text-left">
                                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Inversión Inteligente</p>
                                    <p className="text-[#0f2a4a] text-sm font-black">SOLICITE SU DIAGNÓSTICO SIN COSTO</p>
                                </div>
                                <a
                                    href="https://wa.me/573243527655"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-wow flex items-center gap-4 px-10 py-4 bg-[#c5a67c] text-[#02010a] text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all"
                                >
                                    {t('nav.contactNow')} <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
