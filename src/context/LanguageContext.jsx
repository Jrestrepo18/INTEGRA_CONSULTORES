import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import translations from '../i18n';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Recuperar idioma guardado o usar español por defecto
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('integra-language');
            return saved || 'es';
        }
        return 'es';
    });

    useEffect(() => {
        // Guardar preferencia de idioma
        localStorage.setItem('integra-language', language);
        // Actualizar el atributo lang del documento
        document.documentElement.lang = language;
    }, [language]);

    const changeLanguage = (newLang) => {
        setLanguage(newLang);
    };

    // Función para obtener traducción por path (ej: "nav.home")
    const t = useCallback((path) => {
        const keys = path.split('.');
        let result = translations[language];

        for (const key of keys) {
            if (result && result[key] !== undefined) {
                result = result[key];
            } else {
                // Fallback al español
                result = translations['es'];
                for (const k of keys) {
                    if (result && result[k] !== undefined) {
                        result = result[k];
                    } else {
                        return path;
                    }
                }
                break;
            }
        }

        return result;
    }, [language]);

    // Función para obtener un objeto de traducción completo
    const tObj = useCallback((path) => {
        const keys = path.split('.');
        let result = translations[language];

        for (const key of keys) {
            if (result && result[key] !== undefined) {
                result = result[key];
            } else {
                return null;
            }
        }

        return result;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t, tObj }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
