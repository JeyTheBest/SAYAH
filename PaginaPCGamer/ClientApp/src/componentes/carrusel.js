import React, { useState, useEffect } from 'react';
import imagen1 from '../assets/carrusel.jpeg';
import pantalla from '../assets/carrusel1.jpg';
import tarjeta from '../assets/carrusel2.png';
import '../Estilos/carrusel.css';

const Carrusel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = activeSlide === 2 ? 0 : activeSlide + 1;
            setActiveSlide(nextSlide);
        }, 3000); // Cambia el intervalo de tiempo según tus necesidades (en milisegundos)

        return () => clearInterval(interval);
    }, [activeSlide]);

    const handleIndicatorClick = (slideIndex) => {
        setActiveSlide(slideIndex);
    };

    const handlePrevSlide = () => {
        const prevSlide = activeSlide === 0 ? 2 : activeSlide - 1;
        setActiveSlide(prevSlide);
    };

    const handleNextSlide = () => {
        const nextSlide = activeSlide === 2 ? 0 : activeSlide + 1;
        setActiveSlide(nextSlide);
    };

    return (
        <div id="carouselExampleIndicators" className="carousel slide">

                                         {/*--------------indicadores del carrusel----------------*/}
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className={activeSlide === 0 ? 'active' : ''}
                    onClick={() => handleIndicatorClick(0)}
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    className={activeSlide === 1 ? 'active' : ''}
                    onClick={() => handleIndicatorClick(1)}
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    className={activeSlide === 2 ? 'active' : ''}
                    onClick={() => handleIndicatorClick(2)}
                ></button>
            </div>


                                 {/*--------------imagenes del carrusel----------------*/}


            <div className="carousel-inner">
                <div className={`carousel-item ${activeSlide === 0 ? 'active' : ''}`}>
                    <img
                        src={imagen1}
                        className="d-block w-100 carousel-image"
                        alt="..."
                        width="1000px"
                        height="500px"
                    />
                </div>
                <div className={`carousel-item ${activeSlide === 1 ? 'active' : ''}`}>
                    <img
                        src={pantalla}
                        className="d-block w-100 carousel-image"
                        alt="..."
                        width="1000px"
                        height="500px"
                    />
                </div>
                <div className={`carousel-item ${activeSlide === 2 ? 'active' : ''}`}>
                    <img
                        src={tarjeta}
                        className="d-block w-100 carousel-image"
                        alt="..."
                        width="1000px"
                        height="500px"
                    />
                </div>
            </div>

                                 {/*--------------botones del carrusel----------------*/}

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
                onClick={handlePrevSlide}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
                onClick={handleNextSlide}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carrusel;
