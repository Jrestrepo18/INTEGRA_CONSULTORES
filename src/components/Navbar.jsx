import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { contactInfo } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { t } = useLanguage();

    // Monitorear si hay un modal abierto mediante la clase en el body
    useEffect(() => {
        const checkModal = () => {
            setIsModalOpen(document.body.classList.contains('modal-open'));
        };

        // Crear un observador para detectar cambios en las clases del body
        const observer = new MutationObserver(checkModal);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    // Enlaces de navegación con traducciones
    const navLinks = [
        { label: t('nav.home'), path: '/' },
        { label: t('nav.about'), path: '/quienes-somos' },
        { label: t('nav.services'), path: '/servicios' },
        { label: t('nav.team'), path: '/nuestro-equipo' },
        { label: t('nav.clients'), path: '/clientes' },
        { label: t('nav.contact'), path: '/contacto' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const isHomePage = location.pathname === '/';

    // El Navbar cambia a un estilo "pill" flotante al hacer scroll
    const isFloating = isScrolled || !isHomePage;

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isFloating ? 'pt-4' : 'pt-0'} ${isModalOpen ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0'}`}>
                <div className={`
                    transition-all duration-500 mx-auto flex justify-between items-center
                    ${isFloating
                        ? 'max-w-5xl bg-[#020617]/80 backdrop-blur-xl border border-white/10 rounded-full py-3 px-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                        : 'max-w-7xl py-6 px-6 bg-transparent'}
                `}>

                    <Link to="/" className="flex items-center gap-3 cursor-pointer group">
                        <img
                            src="/assets/brand/logo.png"
                            alt="Integra Consultores"
                            className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${isFloating ? 'h-8' : 'h-12'}`}
                        />
                    </Link>

                    {/* Desktop Menu - Estilo Ejecutivo */}
                    <div className={`hidden lg:flex items-center transition-all duration-500 ${isFloating ? 'gap-8 text-[9px] tracking-[0.2em]' : 'gap-10 text-[11px] tracking-[0.3em]'} font-black uppercase text-white`}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative group py-2 transition-all duration-500 whitespace-nowrap ${isActive ? 'text-[#c5a67c]' : 'text-slate-300 hover:text-white'}`
                                }
                            >
                                {link.label}
                                {!isFloating && (
                                    <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#c5a67c] transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <LanguageSelector />
                        <a
                            href={`https://wa.me/${contactInfo.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn-wow relative overflow-hidden bg-[#c5a67c] text-[#020617] text-[9px] font-black uppercase tracking-[0.2em] rounded-full flex items-center gap-3 shadow-[0_10px_20px_rgba(197,166,124,0.15)] group transition-all duration-500 ${isFloating ? 'px-6 py-2.5' : 'px-8 py-3.5'}`}
                        >
                            <span>{t('nav.contactUs')}</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria_label={t('nav.aria.openMenu')}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu - FUERA del nav para evitar conflictos de z-index */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 flex flex-col"
                    style={{
                        zIndex: 99999,
                        backgroundColor: '#020617'
                    }}
                >
                    {/* Header del menú móvil */}
                    <div className="flex justify-between items-center p-6 border-b border-white/10" style={{ backgroundColor: '#020617' }}>
                        <img src="/assets/brand/logo.png" alt="Integra" className="h-9 w-auto" />
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#c5a67c] hover:text-[#020617] transition-all duration-300"
                            aria_label={t('nav.aria.closeMenu')}
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Enlaces a la izquierda */}
                    <div className="flex-1 flex flex-col justify-center gap-2 px-6 py-8" style={{ backgroundColor: '#020617' }}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-2xl font-bold uppercase tracking-[0.15em] py-4 px-4 rounded-lg transition-colors duration-300 ${isActive
                                        ? 'text-[#c5a67c] bg-[#c5a67c]/10 border-l-4 border-[#c5a67c]'
                                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Footer del menú móvil */}
                    <div className="p-6 space-y-4 border-t border-white/10" style={{ backgroundColor: '#020617' }}>
                        {/* Selector de idioma móvil */}
                        <div className="flex justify-center mb-4">
                            <LanguageSelector variant="mobile" />
                        </div>
                        <a
                            href={`https://wa.me/${contactInfo.whatsapp}`}
                            className="w-full py-4 bg-[#c5a67c] text-[#020617] flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] text-xs rounded-lg shadow-lg shadow-[#c5a67c]/20 hover:shadow-[#c5a67c]/40 hover:scale-[1.02] transition-all duration-300"
                        >
                            {t('nav.contactNow')} <ArrowRight size={16} />
                        </a>
                        <div className="text-center text-slate-500 text-[10px] uppercase font-semibold tracking-widest pt-2">
                            {t('footer.copyright')}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
