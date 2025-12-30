import React, { useState, useEffect } from 'react';
import { initGA } from '../utils/analytics';
import { X } from 'lucide-react';

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem('cana_cookie_consent');

        if (hasConsented === 'true') {
            // 1. SI YA ACEPTÓ ANTES: Iniciamos Analytics silenciosamente
            initGA();
        } else if (!hasConsented) {
            // 2. SI NO HA DECIDIDO: Mostramos el banner despues de un momento
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cana_cookie_consent', 'true');
        // 3. CUANDO HACE CLIC EN ACEPTAR: Iniciamos Analytics
        initGA();
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] p-4 animate-in slide-in-from-bottom-10 fade-in duration-700">
            <div className="max-w-5xl mx-auto bg-[#020617]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-white font-bold mb-2">🍪 Usamos Cookies</h3>
                    <p className="text-slate-400 text-sm">
                        Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
                    </p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => setVisible(false)}
                        className="px-6 py-2.5 rounded-lg border border-white/10 text-slate-300 hover:bg-white/5 transition-colors text-sm font-medium"
                    >
                        Cerrar
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2.5 rounded-lg bg-[#c5a67c] text-[#020617] font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(197,166,124,0.2)]"
                    >
                        Aceptar Todas
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
