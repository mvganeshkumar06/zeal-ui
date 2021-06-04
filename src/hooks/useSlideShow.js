import { useState } from "react";

const useSlideShow = (slides, slidesCount) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        if (slidesCount > 1) {
            if (slideIndex + slidesCount < slides.length) {
                setSlideIndex(slideIndex + slidesCount);
            }
        } else {
            setSlideIndex((slideIndex + 1) % slides.length);
        }
    };

    const prevSlide = () => {
        if (slidesCount > 1) {
            setSlideIndex(
                slideIndex - slidesCount >= 0
                    ? slideIndex - slidesCount
                    : 0
            );
        } else {
            setSlideIndex((slideIndex + slides.length - 1) % slides.length);
        }
    };

    return { slideIndex, nextSlide, prevSlide, setSlideIndex };
};

export default useSlideShow;
