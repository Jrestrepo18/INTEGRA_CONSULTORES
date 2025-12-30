import React from 'react';

// Botón reutilizable con estilos premium
const Button = ({
    children,
    onClick,
    variant = 'primary', // 'primary' | 'secondary' | 'outline'
    fullWidth = false,
    className = ''
}) => {
    const baseStyles = "px-10 py-4 font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300";

    const variants = {
        primary: "bg-[#c5a67c] text-[#0f172a] hover:bg-[#d6bba0] shadow-lg shadow-[#c5a67c]/20",
        secondary: "bg-[#0f2a4a] text-white hover:bg-[#1e3a5f] shadow-lg",
        outline: "bg-transparent border border-white/20 text-white hover:bg-white/5"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
