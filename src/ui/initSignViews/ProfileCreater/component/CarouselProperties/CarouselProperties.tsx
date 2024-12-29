import "./CarouselProperties.css"
import {useEffect, useState} from 'react';
import { BoxProfile } from '../BoxProfile/BoxProfile.tsx';
import { ExpensesConfig } from '../ExpensesConfig/ExpensesConfig.tsx'
import { IncomesConfig } from '../IncomesConfig/IncomesConfig.tsx';
import { WalletsConfig } from '../WalletsConfig/WalletsConfig.tsx';




const CarouselProperties = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCarousel, setShowCarousel] = useState(false);

    // Lista de componentes a mostrar
    const components = [
        <BoxProfile />,
        <ExpensesConfig />,
        <IncomesConfig />,
        <WalletsConfig />
    ];

    // Funciones para cambiar el índice
    const nextComponent = () => {
        if (currentIndex < components.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevComponent = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCarousel(true);
        }, 2800); // 3 segundos después de que termine la animación de texto
        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="profile-carousel">
            <div className="carousel-container">
                {/* Componente actual */}
                {showCarousel && <div className="carousel-item">
                    {components[currentIndex]}
                </div>}
            </div>

            {/* Botones de navegación */}
            <div className="carousel-buttons">
                <button onClick={prevComponent} disabled={currentIndex === 0}>
                    Anterior
                </button>
                <button onClick={nextComponent} disabled={currentIndex === components.length - 1}>
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default CarouselProperties;