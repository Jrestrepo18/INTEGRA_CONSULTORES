import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Componentes
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';

// Secciones / Páginas
import Home from './pages/Home';
import About from './sections/About';
import WhatWeDo from './sections/WhatWeDo';
import Experience from './sections/Experience';
import Services from './sections/Services';
import ContactSection from './sections/Contact';
import Team from './pages/Team';
import Clients from './pages/Clients';
import Footer from './components/Footer';

// Estilos
import './styles/index.css';

// Componente para volver al inicio al cambiar de ruta
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
            <Router>
                <ScrollToTop />
                <div className={`font-sans text-slate-800 bg-white min-h-screen selection:bg-[#c5a67c] selection:text-white flex flex-col transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/quienes-somos" element={<About />} />
                            <Route path="/servicios" element={<Services />} />
                            <Route path="/nuestro-equipo" element={<Team />} />
                            <Route path="/clientes" element={<Clients />} />
                            <Route path="/contacto" element={<ContactSection />} />
                        </Routes>
                    </main>
                    <Footer />
                    <WhatsAppButton />
                </div>
            </Router>
        </>
    );
}

export default App;
