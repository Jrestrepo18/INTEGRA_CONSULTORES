import React from 'react';
import { clientsContent } from '../data/content';

const ClientsCarousel = () => {
    // Duplicamos los logos para crear el efecto de scroll infinito suave
    const doubledLogos = [...clientsContent.clients, ...clientsContent.clients];

    return (
        <div className="bg-white py-16 border-y border-slate-100 overflow-hidden relative group">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center italic">
                <span className="text-[#c5a67c] text-sm uppercase tracking-[0.3em] font-bold">Nuestros Clientes</span>
            </div>

            <div className="relative flex overflow-hidden">
                {/* Contenedor del scroll animado */}
                <div className="flex animate-infinite-scroll whitespace-nowrap items-center py-4">
                    {doubledLogos.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-12 w-40 h-20 flex items-center justify-center transition-all duration-500"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Duplicado para el loop infinito */}
                <div className="flex animate-infinite-scroll whitespace-nowrap items-center py-4" aria-hidden="true">
                    {doubledLogos.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-12 w-40 h-20 flex items-center justify-center transition-all duration-500"
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradientes laterales para suavizar bordes */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
    );
};

export default ClientsCarousel;
