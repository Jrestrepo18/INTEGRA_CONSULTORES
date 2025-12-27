import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const LoadingScreen = ({ onFinished }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
                if (onFinished) onFinished();
            }, 1000); // Salida más suave
        }, 3000);

        return () => clearTimeout(timer);
    }, [onFinished]);

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#02010a] transition-all duration-1000 ease-in-out ${isExiting ? 'opacity-0 blur-2xl pointer-events-none' : 'opacity-100 blur-0'}`}>
            {/* Efecto de luz técnica de fondo */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c5a67c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="relative flex flex-col items-center px-6 text-center">
                {/* Elemento decorativo sutil */}
                <div className="mb-12 inline-flex items-center gap-2 px-3 py-1 bg-[#c5a67c]/5 border border-[#c5a67c]/10 rounded-full">
                    <Sparkles size={12} className="text-[#c5a67c] animate-pulse" />
                    <span className="text-[#c5a67c] text-[8px] font-black uppercase tracking-[0.4em]">Estableciendo Conexión Segura</span>
                </div>

                {/* Logo con animación editorial */}
                <div className={`transition-all duration-1000 ease-in-out transform ${isExiting ? 'scale-125 opacity-0 blur-md' : 'scale-100 opacity-100'} animate-fade-in-up`}>
                    <img
                        src="/assets/brand/logo.png"
                        alt="Integra Consultores"
                        className="h-32 md:h-48 w-auto object-contain filter brightness-110"
                    />
                </div>

                <div className="mt-16 relative w-48 h-[1px] bg-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c5a67c]/50 to-transparent animate-loading-bar"></div>
                </div>

                <p className="mt-8 text-white/30 text-[9px] uppercase font-black tracking-[0.6em]">
                    GESTIÓN DE RIESGOS INTEGRAL
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
