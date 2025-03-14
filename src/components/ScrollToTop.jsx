// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la página al inicio (top)
    }, [pathname]); // Se ejecuta cada vez que cambia la ruta (pathname)

    return null; // No renderiza nada
};

export default ScrollToTop;