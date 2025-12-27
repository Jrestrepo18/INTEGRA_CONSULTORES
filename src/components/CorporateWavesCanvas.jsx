import React, { useEffect, useRef } from 'react';

// --- COMPONENTE CANVAS: ONDAS INSTITUCIONALES (SILK WAVES) ---
// Representa: Calma, Solidez, Continuidad y Elegancia.
const CorporateWavesCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let animationFrameId;

        const config = {
            lineCount: 3, // Pocas líneas para elegancia minimalista
            amplitude: 50, // Altura de la onda suave
            frequency: 0.002, // Frecuencia muy baja para ondas largas
            speed: 0.0005 // Movimiento extremadamente lento (serio)
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const animate = (time) => {
            ctx.clearRect(0, 0, width, height);

            // Fondo: Azul Corporativo Profundo (Casi Negro/Navy)
            // Un degradado vertical sutil que da profundidad de "oficina ejecutiva"
            const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
            bgGradient.addColorStop(0, '#0f172a'); // Slate 900
            bgGradient.addColorStop(1, '#1e293b'); // Slate 800
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, width, height);

            // Dibujar Ondas
            ctx.lineWidth = 2;

            for (let i = 0; i < config.lineCount; i++) {
                ctx.beginPath();

                // Color: Dorado/Bronce muy sutil y transparente
                // Esto da el toque "Premium" sobre el azul
                ctx.strokeStyle = `rgba(203, 172, 136, ${0.1 + (i * 0.05)})`;

                for (let x = 0; x <= width; x += 10) {
                    // Fórmula de onda sine compuesta
                    const y = height / 2
                        + Math.sin(x * config.frequency + time * config.speed + i) * config.amplitude
                        + Math.sin(x * config.frequency * 0.5 + time * config.speed * 0.5) * config.amplitude * 0.5;

                    if (x === 0) ctx.moveTo(x, y + (i * 40)); // Offset vertical por línea
                    else ctx.lineTo(x, y + (i * 40));
                }
                ctx.stroke();
            }

            // Añadir un efecto de "ruido" o grano muy sutil para textura de papel/pared
            // Esto elimina la sensación "digital"
            ctx.fillStyle = "rgba(255,255,255,0.03)";
            for (let k = 0; k < 100; k++) {
                const px = Math.random() * width;
                const py = Math.random() * height;
                ctx.fillRect(px, py, 1, 1);
            }

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
