import React, { useState } from 'react';
import { Globe2, Phone, Mail, Clock, MessageSquare, Send, Sparkles, MapPin } from 'lucide-react';
import { contactInfo } from '../data/content';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const text = `*Nueva Consulta Ejecutiva - INTEGRA*\n\n` +
            `*Nombre:* ${formData.name}\n` +
            `*Correo:* ${formData.email}\n` +
            `*Teléfono:* ${formData.phone}\n` +
            `*Mensaje:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="bg-[#020617] text-white py-20 md:py-28 px-6 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a67c]/20 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c5a67c]/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Información de Contacto - Estilo Editorial */}
                    <Reveal>
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.3em] mb-6">
                                    <Sparkles size={12} /> {t('contact.badge')}
                                </div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tighter leading-none">
                                    {t('contact.title').split('.')[0]}. <br /> <span className="text-[#c5a67c]">{t('contact.title').split('.')[1] || ''}</span>
                                </h2>
                                <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-lg border-l-2 border-[#c5a67c]/30 pl-4">
                                    {t('contact.subtitle')}
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="p-5 bg-white/5 border border-white/10 rounded-sm hover:border-[#c5a67c]/30 transition-all duration-500">
                                    <Mail className="text-[#c5a67c] mb-4" size={20} />
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{t('contact.email')}</span>
                                    <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-[#c5a67c] transition-colors break-all font-medium">
                                        {contactInfo.email}
                                    </a>
                                </div>
                                <div className="p-5 bg-white/5 border border-white/10 rounded-sm hover:border-[#c5a67c]/30 transition-all duration-500">
                                    <Phone className="text-[#c5a67c] mb-4" size={20} />
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{t('contact.phone')}</span>
                                    <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-[#c5a67c] transition-colors font-medium">
                                        {contactInfo.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="p-5 bg-white/5 border border-white/10 rounded-sm">
                                <MapPin className="text-[#c5a67c] mb-4" size={20} />
                                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{t('contact.address')}</span>
                                <p className="text-white font-medium">{contactInfo.address}</p>
                            </div>

                            <div className="flex items-center gap-5 pt-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Expert" className="w-full h-full object-cover opacity-80" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500 font-light">
                                    {t('contact.teamAvailable')}
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Formulario de Contacto - Estilo High-Tech */}
                    <Reveal delay={200}>
                        <div className="relative group">
                            {/* Brillo de fondo sutil */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#c5a67c]/20 to-[#0f2a4a]/20 rounded-sm blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>

                            <div className="relative bg-[#020617] border border-white/10 p-6 md:p-10 rounded-sm shadow-2xl">
                                <h3 className="text-xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                                    <MessageSquare size={20} className="text-[#c5a67c]" /> {t('contact.form.title')}
                                </h3>

                                <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{t('contact.form.name')}</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm focus:border-[#c5a67c]/50 focus:outline-none transition-all rounded-sm font-light placeholder:text-slate-700"
                                                placeholder={t('contact.form.namePlaceholder')}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{t('contact.form.email')}</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm focus:border-[#c5a67c]/50 focus:outline-none transition-all rounded-sm font-light placeholder:text-slate-700"
                                                placeholder={t('contact.form.emailPlaceholder')}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{t('contact.form.phone')}</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm focus:border-[#c5a67c]/50 focus:outline-none transition-all rounded-sm font-light placeholder:text-slate-700"
                                            placeholder={t('contact.form.phonePlaceholder')}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{t('contact.form.message')}</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full bg-white/5 border border-white/10 p-3 text-white text-sm focus:border-[#c5a67c]/50 focus:outline-none transition-all rounded-sm font-light placeholder:text-slate-700 resize-none"
                                            placeholder={t('contact.form.messagePlaceholder')}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-wow w-full bg-[#c5a67c] text-[#020617] font-black py-5 uppercase tracking-[0.25em] text-[9px] rounded-sm transition-all shadow-[0_20px_40px_rgba(197,166,124,0.15)] flex items-center justify-center gap-3"
                                    >
                                        {t('contact.form.submit')} <Send size={16} />
                                    </button>

                                    <p className="text-[10px] text-slate-600 text-center leading-relaxed">
                                        {t('contact.form.disclaimer')}
                                    </p>
                                </form>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
