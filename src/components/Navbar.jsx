import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { navLinks, contactInfo } from '../data/content';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const isHomePage = location.pathname === '/';

    // El Navbar siempre tendrá un estilo oscuro pero con variaciones de transparencia
    const navBgClass = (isScrolled || !isHomePage)
        ? 'py-4 bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl'
        : 'py-6 bg-transparent';

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${navBgClass}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                <Link to="/" className="flex items-center gap-3 cursor-pointer group">
                    <img
                        src="/assets/brand/logo.png"
                        alt="Integra Consultores"
                        className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${isScrolled || !isHomePage ? 'h-10' : 'h-12'}`}
                    />
                </Link>

                {/* Desktop Menu - Estilo Ejecutivo */}
                <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-white">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative group py-2 transition-all duration-500 ${isActive ? 'text-[#c5a67c]' : 'text-slate-300 hover:text-white'}`
                            }
                        >
                            {link.label}
                            <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#c5a67c] transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </NavLink>
                    ))}
                </div>

                <div className="hidden lg:block">
                    <a
                        href={`https://wa.me/${contactInfo.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wow relative overflow-hidden px-8 py-3.5 bg-[#c5a67c] text-[#020617] text-[10px] font-black uppercase tracking-[0.2em] rounded-sm flex items-center gap-3 shadow-[0_10px_20px_rgba(197,166,124,0.15)] group"
                    >
                        <span>Acceso Ejecutivo</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu - Pantalla Completa Dark */}
            <div className={`lg:hidden fixed inset-0 top-0 bg-[#020617] z-[100] transition-all duration-700 flex flex-col p-8 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <div className="flex justify-between items-center mb-16">
                    <img src="/assets/brand/logo.png" alt="Integra" className="h-10 w-auto" />
                    <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                        <X size={32} />
                    </button>
                </div>

                <div className="flex flex-col gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-2xl font-black uppercase tracking-[0.2em] transition-all ${isActive ? 'text-[#c5a67c]' : 'text-slate-500'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <div className="mt-auto pb-12">
                    <a
                        href={`https://wa.me/${contactInfo.whatsapp}`}
                        className="w-full py-6 bg-[#c5a67c] text-[#020617] flex items-center justify-center gap-3 font-black uppercase tracking-[0.3em] text-xs rounded-sm shadow-2xl"
                    >
                        Contactar Ahora <ArrowRight size={18} />
                    </a>
                    <div className="mt-10 text-center text-slate-600 text-[10px] uppercase font-bold tracking-widest">
                        &copy; 2024 INTEGRA CONSULTORES
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
