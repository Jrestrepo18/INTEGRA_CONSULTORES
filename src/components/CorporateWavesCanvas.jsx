import React, { useEffect, useRef } from 'react';

const CorporateWavesCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let animationFrameId;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const animate = (time) => {
            ctx.clearRect(0, 0, width, height);

            // Fondo: Azul Corporativo Sólido y Profundo
            const bg = ctx.createLinearGradient(0, 0, width, height);
            bg.addColorStop(0, '#0f172a'); // Navy Slate
            bg.addColorStop(1, '#020617'); // Darker Navy
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, width, height);

            // Dibujar un patrón de rejilla técnica muy sutil (Consultoría/Estrategia)
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(197, 166, 124, 0.02)';
            ctx.lineWidth = 1;
            const step = 80;
            for (let x = 0; x < width; x += step) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            for (let y = 0; y < height; y += step) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            ctx.stroke();

            // Dos grandes orbes de luz muy suaves que se mueven lento para dar profundidad
            const t = time * 0.0001;

            // Orbe Dorado
            const g1 = ctx.createRadialGradient(
                width * (0.7 + Math.sin(t) * 0.1), height * (0.3 + Math.cos(t) * 0.1), 0,
                width * (0.7 + Math.sin(t) * 0.1), height * (0.3 + Math.cos(t) * 0.1), width * 0.6
            );
            g1.addColorStop(0, 'rgba(197, 166, 124, 0.07)');
            g1.addColorStop(1, 'rgba(197, 166, 124, 0)');
            ctx.fillStyle = g1;
            ctx.fillRect(0, 0, width, height);

            // Orbe Azul
            const g2 = ctx.createRadialGradient(
                width * (0.2 + Math.cos(t * 0.8) * 0.1), height * (0.7 + Math.sin(t * 0.8) * 0.1), 0,
                width * (0.2 + Math.cos(t * 0.8) * 0.1), height * (0.7 + Math.sin(t * 0.8) * 0.1), width * 0.5
            );
            g2.addColorStop(0, 'rgba(15, 42, 74, 0.2)');
            g2.addColorStop(1, 'rgba(15, 42, 74, 0)');
            ctx.fillStyle = g2;
            ctx.fillRect(0, 0, width, height);

            animationFrameId = requestAnimationFrame((t) => animate(t));
        };

        window.addEventListener('resize', resize);
        resize();
        animationFrameId = requestAnimationFrame((t) => animate(t));

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
    );
};

export default CorporateWavesCanvas;
