import React, { useState } from 'react';
import { Globe2, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { contactInfo } from '../data/content';

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

        // Estructurar el mensaje para WhatsApp
        const text = `*Nueva Solicitud de Información - INTEGRA*\n\n` +
            `*Nombre:* ${formData.name}\n` +
            `*Correo:* ${formData.email}\n` +
            `*Teléfono:* ${formData.phone}\n` +
            `*Mensaje:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`;

        // Abrir WhatsApp en una nueva pestaña
        window.open(whatsappUrl, '_blank');
    };

    return (
        <footer id="contact" className="bg-[#0f172a] text-slate-300 py-24 px-6 border-t-4 border-[#c5a67c]">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    {/* Info de contacto */}
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-2">Contacto Directo.</h2>
                        <p className="text-[#c5a67c] text-sm uppercase tracking-widest mb-8">¿Tiene preguntas?</p>
                        <p className="text-slate-400 mb-10 max-w-sm leading-relaxed">
                            Hablemos sobre la protección y el futuro de su organización. Confidencialidad garantizada desde el primer contacto.
                        </p>

                        <div className="space-y-6 text-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#c5a67c]/10 rounded-sm flex items-center justify-center shrink-0">
                                    <Globe2 className="text-[#c5a67c]" size={20} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold uppercase tracking-wider mb-1">Sede Principal</span>
                                    <span>{contactInfo.address}</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#c5a67c]/10 rounded-sm flex items-center justify-center shrink-0">
                                    <Phone className="text-[#c5a67c]" size={20} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold uppercase tracking-wider mb-1">Teléfono</span>
                                    <a href={`tel:${contactInfo.phone}`} className="hover:text-[#c5a67c] transition-colors">
                                        {contactInfo.phone}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#c5a67c]/10 rounded-sm flex items-center justify-center shrink-0">
                                    <Mail className="text-[#c5a67c]" size={20} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold uppercase tracking-wider mb-1">Correo</span>
                                    <a href={`mailto:${contactInfo.email}`} className="hover:text-[#c5a67c] transition-colors">
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Horarios */}
                        <div className="mt-10 p-6 bg-white/5 rounded-sm border border-white/10">
                            <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider mb-4">
                                <Clock size={16} className="text-[#c5a67c]" />
                                Horas de Trabajo
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Lunes - Viernes:</span>
                                    <span className="text-white">8:00 am - 5:00 pm</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Sábados:</span>
                                    <span className="text-white">9:00 am - 2:00 pm</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Domingos y Festivos:</span>
                                    <span className="text-[#c5a67c]">Cerrado</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="bg-white/5 p-8 md:p-10 rounded-sm border border-white/10">
                        <h3 className="text-xl font-serif text-white mb-6">Envíenos un mensaje</h3>
                        <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
                            <div>
                                <label className="block text-[10px] font-bold text-[#c5a67c] uppercase mb-2 tracking-wider">Nombre Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Su nombre"
                                    className="w-full bg-[#0f172a] border border-slate-700 p-4 text-white placeholder:text-slate-600 focus:border-[#c5a67c] focus:outline-none transition-colors rounded-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-[#c5a67c] uppercase mb-2 tracking-wider">Correo Electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="correo@empresa.com"
                                    className="w-full bg-[#0f172a] border border-slate-700 p-4 text-white placeholder:text-slate-600 focus:border-[#c5a67c] focus:outline-none transition-colors rounded-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-[#c5a67c] uppercase mb-2 tracking-wider">Teléfono</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+57 300 000 0000"
                                    className="w-full bg-[#0f172a] border border-slate-700 p-4 text-white placeholder:text-slate-600 focus:border-[#c5a67c] focus:outline-none transition-colors rounded-none"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-[#c5a67c] uppercase mb-2 tracking-wider">Mensaje</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="¿En qué podemos ayudarle?"
                                    className="w-full bg-[#0f172a] border border-slate-700 p-4 text-white placeholder:text-slate-600 focus:border-[#c5a67c] focus:outline-none transition-colors rounded-none resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#c5a67c] text-[#0f2a4a] font-bold py-4 uppercase tracking-widest text-xs hover:bg-[#d6bba0] transition-colors flex items-center justify-center gap-2"
                            >
                                Enviar Solicitud a WhatsApp
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; 2024 integraconsultoresgr.com | Todos los derechos Reservados</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-[#c5a67c] transition-colors">Aviso Legal</a>
                        <a href="#" className="hover:text-[#c5a67c] transition-colors">Política de Datos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
