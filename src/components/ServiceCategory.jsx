import React from 'react';

// Tarjeta de Servicio Elegante (Lista densa pero limpia)
const ServiceCategory = ({ title, icon: Icon, items, delay }) => (
    <div className={`bg-white p-8 border-t-2 border-slate-200 hover:border-[#c5a67c] transition-colors duration-500 shadow-sm hover:shadow-xl group h-full`}>
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-slate-50 text-slate-700 rounded-sm group-hover:bg-[#0f2a4a] group-hover:text-white transition-colors duration-500">
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">{title}</h3>
        </div>
        <ul className="space-y-3">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#c5a67c] shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default ServiceCategory;
