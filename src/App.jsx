import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';

// Componentes
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';

// Secciones / Páginas
// Secciones / Páginas (Lazy Loading)
import Home from './pages/Home';
const About = lazy(() => import('./sections/About'));
const Services = lazy(() => import('./sections/Services'));
const ContactSection = lazy(() => import('./sections/Contact'));
const Team = lazy(() => import('./pages/Team'));
const Clients = lazy(() => import('./pages/Clients'));
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
    <LanguageProvider>
      <HelmetProvider>
        <Helmet>
          {/* Título Principal */}
          <title>Integra Consultores | Seguridad, Legal y Riesgos en Medellín</title>

          {/* Meta Descripción */}
          <meta name="description" content="Expertos en Consultoría Jurídica, SG-SST, Seguridad Física y Gestión de Riesgos en Medellín y Colombia. Blindaje corporativo integral para su empresa." />

          {/* Keywords */}
          <meta name="keywords" content="abogados medellin, seguridad privada, consultoria legal, sg-sst, riesgos corporativos, integra consultores" />

          {/* Open Graph */}
          <meta property="og:title" content="Integra Consultores - Protección Corporativa 360" />
          <meta property="og:description" content="Soluciones legales, de seguridad y gestión humana para empresas en Colombia." />
          <meta property="og:image" content="https://integraconsultoresgr.com/logo.png" />
          <meta property="og:url" content="https://integraconsultoresgr.com/" />

          {/* Geo-tags */}
          <meta name="geo.region" content="CO-ANT" />
          <meta name="geo.placename" content="Medellín" />
          <meta name="geo.position" content="6.2476;-75.5658" />
          <meta name="ICBM" content="6.2476, -75.5658" />

          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">
            {`
                  {
                    "@context": "https://schema.org",
                    "@type": "LegalService",
                    "name": "Integra Consultores",
                    "image": "https://integraconsultoresgr.com/logo.png",
                    "@id": "https://integraconsultoresgr.com",
                    "url": "https://integraconsultoresgr.com",
                    "telephone": "+573002689271",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Dirección de la oficina",
                      "addressLocality": "Medellín",
                      "addressRegion": "ANT",
                      "postalCode": "050001",
                      "addressCountry": "CO"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": 6.2476,
                      "longitude": -75.5658
                    },
                    "openingHoursSpecification": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                      ],
                      "opens": "08:00",
                      "closes": "18:00"
                    },
                    "priceRange": "$$"
                  }
                `}
          </script>
        </Helmet>

        {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
        <Router>
          <ScrollToTop />
          <div className={`font-sans text-slate-300 bg-[#020617] min-h-screen selection:bg-[#c5a67c] selection:text-white flex flex-col transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<div className="h-screen flex items-center justify-center text-[#c5a67c]">Cargando...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/quienes-somos" element={<About />} />
                  <Route path="/servicios" element={<Services />} />
                  <Route path="/nuestro-equipo" element={<Team />} />
                  <Route path="/clientes" element={<Clients />} />
                  <Route path="/contacto" element={<ContactSection />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </Router>
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
