import ReactGA from "react-ga4";

const TRACKING_ID = "G-43JG94Z2J0";

export const initGA = () => {
    ReactGA.initialize(TRACKING_ID);
    // Enviar la primera visita de página manualmente
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category, action, label) => {
    if (ReactGA.isInitialized()) {
        ReactGA.event({
            category: category,
            action: action,
            label: label,
        });
    }
};
