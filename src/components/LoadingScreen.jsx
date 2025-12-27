import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
                if (onFinished) onFinished();
            }, 800); // Duración de la animación de salida
        }, 2500); // Tiempo que permanece el logo visible

        return () => clearTimeout(timer);
    }, [onFinished]);

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f2a4a] transition-all duration-800 ease-in-out ${isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <div className="relative flex flex-col items-center px-6 text-center">
                {/* Logo con animación de entrada y pulso - AUMENTADO TAMAÑO */}
                <div className={`transition-all duration-1000 ease-out transform ${isExiting ? 'scale-150 opacity-0' : 'scale-100 opacity-100'} animate-fade-in-up`}>
                    <img
                        src="/assets/brand/logo.png"
                        alt="Integra Consultores"
                        className="h-32 md:h-48 lg:h-56 w-auto object-contain animate-pulse-soft"
                    />
                </div>

                {/* Barra de carga eliminada como solicitaste */}

                <p className="mt-10 text-white/40 text-[11px] uppercase tracking-[0.4em] font-light animate-pulse">
                    Integra Consultores
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
