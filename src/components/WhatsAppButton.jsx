import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { contactInfo } from '../data/content';

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola, me gustaría obtener una consultoría estratégica sobre sus servicios.')}`;

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
            {/* Tooltip con estética Boutique */}
            <div
                className={`bg-[#020617] border border-[#c5a67c]/30 p-4 shadow-2xl transition-all duration-500 origin-bottom-right ${isHovered ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'}`}
            >
                <div className="flex items-center gap-2 mb-1">
                    <Sparkles size={12} className="text-[#c5a67c]" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#c5a67c]">Canal Prioritario</span>
                </div>
                <p className="text-[11px] text-white font-light tracking-wide">Inicie una consulta ejecutiva inmediata.</p>
            </div>

            {/* Botón WhatsApp de Lujo */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex items-center justify-center w-16 h-16 bg-[#c5a67c] rounded-full shadow-[0_20px_50px_rgba(197,166,124,0.3)] hover:scale-110 transition-all duration-500 overflow-hidden"
            >
                {/* Ping de atención elegante */}
                <span className="absolute inset-0 rounded-full border-2 border-[#c5a67c] animate-ping opacity-40"></span>
                <span className="absolute inset-0 bg-[#020617] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>

                {/* WhatsApp SVG - Blanco por defecto, Dorado en hover */}
                <svg
                    className={`w-7 h-7 relative z-10 transition-colors duration-500 ${isHovered ? 'text-[#c5a67c]' : 'text-[#020617]'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </div>
    );
};

export default WhatsAppButton;
