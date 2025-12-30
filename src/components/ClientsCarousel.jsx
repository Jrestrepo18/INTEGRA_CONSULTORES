import React from 'react';
import { clientsContent } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

const ClientsCarousel = () => {
    const { t } = useLanguage();
    // Usamos los logos originales para cada bloque del scroll
    const logos = clientsContent.clients;

    return (
        <div className="bg-[#02010a] py-24 border-y border-white/5 overflow-hidden relative group">
            {/* Elemento decorativo técnico lateral */}
            <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-transparent via-[#c5a67c]/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#c5a67c]/5 border border-[#c5a67c]/10 rounded-full mb-4">
                    <div className="w-1 h-1 bg-[#c5a67c] rounded-full animate-pulse"></div>
                    <span className="text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.4em]">{t('clients.carousel.badge')}</span>
                </div>
                <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{t('clients.carousel.title')} <span className="text-[#c5a67c]">{t('clients.carousel.excellence')}</span></h2>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Contenedor del scroll animado - Bloque 1 */}
                <div className="flex animate-infinite-scroll whitespace-nowrap items-center py-4">
                    {logos.map((client, index) => (
                        <div
                            key={`b1-${index}`}
                            className="flex-shrink-0 mx-16 w-36 h-20 flex flex-col items-center justify-center transition-all duration-700 opacity-90 hover:opacity-100 hover:scale-110 group/logo"
                        >
                            <div className="bg-white p-2 rounded-sm w-full h-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/5 group-hover/logo:border-[#c5a67c]/30 transition-all duration-500">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-4 opacity-0 group-hover/logo:opacity-100 transition-all duration-500 whitespace-normal text-center">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Duplicado para el loop infinito perfecto - Bloque 2 */}
                <div className="flex animate-infinite-scroll whitespace-nowrap items-center py-4" aria-hidden="true">
                    {logos.map((client, index) => (
                        <div
                            key={`b2-${index}`}
                            className="flex-shrink-0 mx-16 w-36 h-20 flex flex-col items-center justify-center transition-all duration-700 opacity-90 hover:opacity-100 hover:scale-110 group/logo"
                        >
                            <div className="bg-white p-2 rounded-sm w-full h-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/5 group-hover/logo:border-[#c5a67c]/30 transition-all duration-500">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-4 opacity-0 group-hover/logo:opacity-100 transition-all duration-500 whitespace-normal text-center">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradientes laterales para suavizar bordes - Efecto de "fvanishing" de lujo */}
            <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#02010a] via-[#02010a]/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#02010a] via-[#02010a]/80 to-transparent z-10 pointer-events-none"></div>
        </div>
    );
};

export default ClientsCarousel;
