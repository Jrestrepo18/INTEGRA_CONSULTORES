import es from './es';
import en from './en';

const translations = {
    es,
    en
};

export const getTranslation = (language, path) => {
    const keys = path.split('.');
    let result = translations[language];

    for (const key of keys) {
        if (result && result[key] !== undefined) {
            result = result[key];
        } else {
            // Fallback al español si no se encuentra la traducción
            result = translations['es'];
            for (const k of keys) {
                if (result && result[k] !== undefined) {
                    result = result[k];
                } else {
                    return path; // Retorna la key si no se encuentra
                }
            }
            break;
        }
    }

    return result;
};

export { es, en };
export default translations;
