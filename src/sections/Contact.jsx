import React, { useState } from 'react';
import { Globe2, Phone, Mail, Clock, MessageSquare, Send, Sparkles, MapPin } from 'lucide-react';
import { contactInfo } from '../data/content';
import Reveal from '../components/Reveal';

const Contact = () => {
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
        <section id="contact" className="bg-[#020617] text-white py-32 px-6 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a67c]/20 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c5a67c]/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-start">

                    {/* Información de Contacto - Estilo Editorial */}
                    <Reveal>
                        <div className="space-y-12">
                            <div>
                                <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#c5a67c]/10 border border-[#c5a67c]/20 rounded-full text-[#c5a67c] text-[9px] font-black uppercase tracking-[0.3em] mb-8">
                                    <Sparkles size={12} /> Canales Exclusivos
                                </div>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10 tracking-tighter leading-none">
                                    Inicie una Conversación <br /> <span className="text-[#c5a67c]">Estratégica.</span>
                                </h2>
                                <p className="text-slate-400 text-lg sm:text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#c5a67c]/30 pl-6">
                                    Estamos listos para analizar los desafíos de su organización con la confidencialidad y rigor técnico que nos caracteriza.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="p-8 bg-white/5 border border-white/10 rounded-sm hover:border-[#c5a67c]/30 transition-all duration-500">
                                    <Mail className="text-[#c5a67c] mb-6" size={24} />
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Email Directo</span>
                                    <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-[#c5a67c] transition-colors break-all font-medium">
                                        {contactInfo.email}
                                    </a>
                                </div>
                                <div className="p-8 bg-white/5 border border-white/10 rounded-sm hover:border-[#c5a67c]/30 transition-all duration-500">
                                    <Phone className="text-[#c5a67c] mb-6" size={24} />
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Línea Directa</span>
                                    <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-[#c5a67c] transition-colors font-medium">
                                        {contactInfo.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                                <MapPin className="text-[#c5a67c] mb-6" size={24} />
                                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Sede Administrativa</span>
                                <p className="text-white font-medium">{contactInfo.address}</p>
                            </div>

                            <div className="flex items-center gap-6 pt-8">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Expert" className="w-full h-full object-cover opacity-80" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500 font-light">
                                    Nuestro equipo senior técnico está <br /> disponible para atender su solicitud.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Formulario de Contacto - Estilo High-Tech */}
                    <Reveal delay={200}>
                        <div className="relative group">
                            {/* Brillo de fondo sutil */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#c5a67c]/20 to-[#0f2a4a]/20 rounded-sm blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>

                            <div className="relative bg-[#020617] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                                    <MessageSquare size={20} className="text-[#c5a67c]" /> Solicitud de Consultoría
                                </h3>

                                <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Nombre Completo</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#c5a67c]/50 focus:outline-none transition-all rounded-sm font-light placeholder:text-slate-700"
                                                placeholder="Ej. Juan Pérez"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Email Corporativo</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#c5a67c]/50 focus:outline-none transition-all rounded-sm font-light placeholder:text-slate-700"
                                                placeholder="nombre@empresa.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Teléfono de Enlace</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#c5a67c]/50 focus:outline-none transition-all rounded-sm font-light placeholder:text-slate-700"
                                            placeholder="+57..."
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Breve Descripción del Requerimiento</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#c5a67c]/50 focus:outline-none transition-all rounded-sm font-light placeholder:text-slate-700 resize-none"
                                            placeholder="Describa el servicio o desafío de interés..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-wow w-full bg-[#c5a67c] text-[#020617] font-black py-6 uppercase tracking-[0.3em] text-[10px] rounded-sm transition-all shadow-[0_20px_40px_rgba(197,166,124,0.15)] flex items-center justify-center gap-4"
                                    >
                                        Despachar Consulta <Send size={16} />
                                    </button>

                                    <p className="text-[10px] text-slate-600 text-center leading-relaxed">
                                        Al enviar esta solicitud, sus datos serán tratados bajo estrictas políticas <br /> de confidencialidad y ley de protección de datos.
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
