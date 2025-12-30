import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo, siteInfo } from '../../data/content';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    // Enlaces de navegación con traducciones
    const navLinks = [
        { label: t('nav.home'), path: '/' },
        { label: t('nav.about'), path: '/quienes-somos' },
        { label: t('nav.services'), path: '/servicios' },
        { label: t('nav.team'), path: '/nuestro-equipo' },
        { label: t('nav.clients'), path: '/clientes' },
        { label: t('nav.contact'), path: '/contacto' }
    ];

    return (
        <footer id="footer" className="bg-[#020617] text-slate-400 py-24 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Elemento decorativo técnico en el fondo del footer */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c5a67c]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

                    {/* Identidad Corporativa */}
                    <div className="space-y-8">
                        <Link to="/" className="inline-block group">
                            <img src="/assets/brand/logo.png" alt="Integra logo" className="h-16 w-auto transition-transform duration-700 group-hover:scale-105" />
                        </Link>
                        <p className="text-[13px] leading-relaxed font-light opacity-60">
                            {siteInfo.slogan}. {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, url: contactInfo.social.facebook, label: 'Facebook' },
                                { icon: Instagram, url: contactInfo.social.instagram, label: 'Instagram' },
                                { icon: Linkedin, url: contactInfo.social.linkedin, label: 'LinkedIn' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#c5a67c] hover:text-[#020617] hover:border-[#c5a67c] transition-all duration-500 group"
                                    aria-label={social.label}
                                >
                                    <social.icon size={16} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navegación Estratégica */}
                    <div>
                        <h4 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                            <span className="w-4 h-[1px] bg-[#c5a67c]"></span> {t('footer.companyTitle')}
                        </h4>
                        <ul className="space-y-5 text-[13px] font-light">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="hover:text-[#c5a67c] transition-colors flex items-center gap-2 group">
                                        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#c5a67c]" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Servicios Destacados o Info Adicional */}
                    <div>
                        <h4 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                            <span className="w-4 h-[1px] bg-[#c5a67c]"></span> {t('footer.quickLinksTitle')}
                        </h4>
                        <ul className="space-y-5 text-[13px] font-light">
                            <li><Link to="/servicios" className="hover:text-[#c5a67c] transition-colors">{t('footer.portfolio')}</Link></li>
                            <li><Link to="/contacto" className="hover:text-[#c5a67c] transition-colors">{t('footer.audit')}</Link></li>
                            <li><Link to="/quienes-somos" className="hover:text-[#c5a67c] transition-colors">{t('footer.mission')}</Link></li>
                            <li><Link to="/nuestro-equipo" className="hover:text-[#c5a67c] transition-colors">{t('footer.leadership')}</Link></li>
                        </ul>
                    </div>

                    {/* Contacto Ejecutivo */}
                    <div>
                        <h4 className="text-white text-[11px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                            <span className="w-4 h-[1px] bg-[#c5a67c]"></span> {t('footer.contactTitle')}
                        </h4>
                        <div className="space-y-6 text-[13px] font-light">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-[#c5a67c] shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                                <span className="opacity-80">{contactInfo.address}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-[#c5a67c] shrink-0" size={18} strokeWidth={1.5} />
                                <a href={`tel:${contactInfo.phone}`} className="hover:text-[#c5a67c] transition-colors opacity-80">
                                    {contactInfo.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-[#c5a67c] shrink-0" size={18} strokeWidth={1.5} />
                                <a href={`mailto:${contactInfo.email}`} className="hover:text-[#c5a67c] transition-colors opacity-80 break-all">
                                    {contactInfo.email}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Línea de Cierre Legal */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">
                        &copy; 2025 <span className="text-[#c5a67c]">INTEGRA CONSULTORES</span> | {t('footer.tagline')}
                    </div>
                    <div className="flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em] opacity-40">
                        <Link to="/" className="hover:opacity-100 transition-opacity">{t('footer.privacy')}</Link>
                        <Link to="/" className="hover:opacity-100 transition-opacity">{t('footer.terms')}</Link>
                        <Link to="/" className="hover:opacity-100 transition-opacity">{t('footer.legal')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
