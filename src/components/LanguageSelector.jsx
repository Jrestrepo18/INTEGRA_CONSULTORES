import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
];

const LanguageSelector = ({ variant = 'desktop' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, changeLanguage } = useLanguage();
    const dropdownRef = useRef(null);

    // Cerrar dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setIsOpen(false);
    };

    const currentLanguage = languages.find(l => l.code === language);

    if (variant === 'mobile') {
        return (
            <div className="flex gap-2">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${language === lang.code
                                ? 'bg-[#c5a67c] text-[#020617]'
                                : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                    >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-xs font-bold uppercase tracking-wider">{lang.code.toUpperCase()}</span>
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-white transition-colors duration-300 group"
            >
                <Globe size={16} className="text-[#c5a67c]" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                    {currentLanguage?.code.toUpperCase()}
                </span>
                <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-[#0f2a4a] border border-white/10 rounded-sm shadow-2xl overflow-hidden z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-300 ${language === lang.code
                                    ? 'bg-[#c5a67c]/20 text-[#c5a67c]'
                                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="text-[11px] font-bold uppercase tracking-wider flex-1">
                                {lang.name}
                            </span>
                            {language === lang.code && (
                                <Check size={14} className="text-[#c5a67c]" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
