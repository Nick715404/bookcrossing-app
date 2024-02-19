// СЛишком много кода! Рефакторить нужно очень сильно, выносить по папкам

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

import { ISlide, IAdressJson } from "../../interfaces/interface";

const Slider = ({ adress }: IAdressJson) => {
    const [slides, setSlides] = useState<ISlide[]>([]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ISlide[]>(adress);
                setSlides(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (sliderRef.current) {
            sliderRef.current.classList.add('dragging');
        }
    };

    const handleDragEnd = () => {
        if (sliderRef.current) {
            sliderRef.current.classList.remove('dragging');
        }
    };

    const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        if (sliderRef.current) {
            const { clientX } = e;

            const sliderWidth = sliderRef.current.offsetWidth;

            const newPosition = (clientX - sliderRef.current.getBoundingClientRect().left) / sliderWidth;

            const newIndex = Math.round(newPosition * slides.length);

            setCurrentSlide(newIndex);
        }
    };


    return (
        <div className="slider" ref={sliderRef} onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseMove={handleDrag}>
            {slides.map((image, index) => (
                <div key={index}
                    className={`slider__image ${index === currentSlide ? 'slider__image--active' : ''}`}
                    style={{ backgroundImage: `url(${image.image})`, backgroundSize: 'cover' }}>
                    <div className="slider__text">{image.text}</div>
                </div>
            ))}
        </div>
    );
};

export default Slider;