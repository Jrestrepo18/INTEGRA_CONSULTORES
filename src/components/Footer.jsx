import React from 'react';
import { Globe2, Phone, Mail, Clock, MapPin, Send, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo, navLinks, siteInfo } from '../data/content';

const Footer = () => {
    return (
        <footer id="footer" className="bg-[#0f172a] text-slate-300 pt-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Columna 1: Info Empresa */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <img src="/assets/brand/logo.png" alt="Integra logo" className="h-16 w-auto" />
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            {siteInfo.slogan}. Somos especialistas en la identificación y diseño de controles de riesgo para organizaciones de todos los niveles.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={contactInfo.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                            >
                                <Facebook size={16} />
                            </a>
                            <a
                                href={contactInfo.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all duration-300"
                            >
                                <Instagram size={16} />
                            </a>
                            <a
                                href={contactInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                            >
                                <Linkedin size={16} />
                            </a>
                            <a
                                href={`https://wa.me/${contactInfo.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
                            >
                                <svg
                                    className="w-4 h-4 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Links Quick Navigation */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
                            Links Rápidos
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#c5a67c]"></span>
                        </h4>
                        <ul className="space-y-4 text-sm">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="hover:text-[#c5a67c] transition-colors flex items-center gap-2">
                                        <span className="w-1 h-1 bg-[#c5a67c] rounded-full"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Horas de Trabajo */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
                            Horas de Trabajo
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#c5a67c]"></span>
                        </h4>
                        <div className="space-y-6 text-sm">
                            <div className="flex items-start gap-4">
                                <Clock className="text-[#c5a67c] shrink-0" size={20} />
                                <div>
                                    <span className="block text-white font-bold uppercase tracking-wider mb-2">Días de Apertura</span>
                                    <p>{contactInfo.workHours.weekdays}</p>
                                    <p>{contactInfo.workHours.saturday}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-1 rounded-sm bg-red-500/10 text-red-400">
                                    <Clock size={16} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold uppercase tracking-wider mb-1">Cerrado</span>
                                    <p>{contactInfo.workHours.closed}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna 4: ¿Tiene Preguntas? */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-8 relative inline-block">
                            ¿Tiene preguntas?
                            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#c5a67c]"></span>
                        </h4>
                        <div className="space-y-6 text-sm font-medium">
                            <div className="flex items-start gap-4 group">
                                <MapPin className="text-[#c5a67c] shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                <span>{contactInfo.address}</span>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <Phone className="text-[#c5a67c] shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                <a href={`tel:${contactInfo.whatsapp}`} className="hover:text-[#c5a67c] transition-colors">
                                    {contactInfo.phone}
                                </a>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <Mail className="text-[#c5a67c] shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                <a href={`mailto:${contactInfo.email}`} className="hover:text-[#c5a67c] transition-colors break-all">
                                    {contactInfo.email}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <div className="text-[11px] text-slate-500 tracking-wider">
                        &copy; 2024 <span className="text-[#c5a67c]">integraconsultoresgr.com</span> | Todos los derechos Reservados | <span className="opacity-50">Desing by Antigravity AI</span>
                    </div>
                    <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest">
                        <Link to="/" className="hover:text-white transition-colors">Politica de Privacidad</Link>
                        <Link to="/" className="hover:text-white transition-colors">Términos de Servicio</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
