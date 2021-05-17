import { useState } from "react";

const useSlideShow = (slides, slidesToDisplay) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        if (slidesToDisplay > 1) {
            if (slideIndex + slidesToDisplay < slides.length) {
                setSlideIndex(slideIndex + slidesToDisplay);
            }
        } else {
            setSlideIndex((slideIndex + 1) % slides.length);
        }
    };

    const prevSlide = () => {
        if (slidesToDisplay > 1) {
            setSlideIndex(
                slideIndex - slidesToDisplay >= 0
                    ? slideIndex - slidesToDisplay
                    : 0
            );
        } else {
            setSlideIndex((slideIndex + slides.length - 1) % slides.length);
        }
    };

    return { slideIndex, nextSlide, prevSlide, setSlideIndex };
};

export default useSlideShow;
