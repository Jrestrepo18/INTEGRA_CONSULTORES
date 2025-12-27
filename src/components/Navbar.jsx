import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { navLinks, contactInfo } from '../data/content';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerramos el menú móvil cuando cambia la ruta
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // Determinamos si el navbar debe ser oscuro o claro basado en la página
    // En el inicio (/) es transparente/oscuro, en las otras es blanco/claro
    const isHomePage = location.pathname === '/';
    const navTextClass = (isScrolled || !isHomePage) ? 'text-[#0f2a4a]' : 'text-white';

    // Totalmente transparente al inicio, sutil con cristal al bajar
    const navBgClass = isScrolled
        ? 'py-3 bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg'
        : 'py-5 bg-transparent';

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBgClass}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                <Link to="/" className="flex items-center gap-3 cursor-pointer">
                    {/* Logo de Integra */}
                    <img
                        src="/assets/brand/logo.png"
                        alt="Integra Consultores"
                        className={`w-auto object-contain transition-all duration-300 ${isScrolled || !isHomePage ? 'h-12' : 'h-14'}`}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className={`hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest transition-colors ${navTextClass}`}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `hover:text-[#c5a67c] transition-colors relative group py-2 ${isActive ? 'text-[#c5a67c]' : ''}`
                            }
                        >
                            {link.label}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#c5a67c] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </NavLink>
                    ))}
                </div>

                <div className="hidden lg:block">
                    <a
                        href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola, me gustaría agendar una cita para conocer más sobre sus servicios.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all border flex items-center gap-2 ${isScrolled || !isHomePage ? 'border-[#0f2a4a] text-[#0f2a4a] hover:bg-[#0f2a4a] hover:text-white' : 'border-white/30 text-white hover:bg-white hover:text-[#0f2a4a]'}`}
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Agendar Cita
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden p-2 ${isScrolled || !isHomePage ? 'text-[#0f2a4a]' : 'text-white'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-left text-sm font-bold uppercase tracking-widest py-4 border-b border-slate-100 transition-colors ${isActive ? 'text-[#c5a67c]' : 'text-slate-700 hover:text-[#c5a67c]'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <a
                        href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola, me gustaría agendar una cita para conocer más sobre sus servicios.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 w-full py-4 bg-[#25D366] text-white flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-[#128C7E] transition-colors shadow-lg"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Agendar Cita
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
