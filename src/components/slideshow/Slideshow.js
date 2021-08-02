import React from "react";
import useSlideShow from "../../hooks/useSlideShow";
import { Container, Button, useStyles } from "../../index";

const getSlidesBgColor = (color, theme, colors) => {
    if (colors[color]) {
        return colors[color][4];
    }
    if (theme === "light") {
        return colors.gray[1];
    }
    return colors.gray[4];
};

const SlideShow = ({
    prev,
    next,
    slides,
    width,
    height,
    slidesCount = 1,
    color,
    customStyles,
    ...rest
}) => {

    const styles = useStyles((style, theme) => `
        position:relative;
        width:${width};
        height:${height};
        border-radius:0.25rem;
        margin:2rem 0rem;
        background-color:${getSlidesBgColor(color, theme, style.colors)};
        
        .slideContainer{
            width:100%;
        }

        .prevBtn, .nextBtn{
            position:absolute;
            top:auto;
            bottom:auto;
            z-index:${style.zIndex[1]}
            margin:0rem 2rem;
        }

        .prevBtn{
            left:0.5rem;
        }

        .nextBtn{
            right:0.5rem;
        }
    `);

    const { slideIndex, prevSlide, nextSlide } = useSlideShow(
        slides,
        slidesCount
    );

    const slidesToShow = [];
    let currIndex = slideIndex;
    const limit = slidesCount <= slides.length ? slidesCount : 1;
    for (let count = 1; count <= limit; count++) {
        slidesToShow[currIndex] = slides[currIndex];
        currIndex++;
    }

    const getPrevIndicator = () => {
        if (slideIndex !== 0) {
            if (prev) {
                return (
                    <span className="prevBtn" onClick={prevSlide}>
                        {prev}
                    </span>
                );
            }
            return (
                <Button className="prevBtn" color={color} onClick={prevSlide}>
                    Previous
                </Button>
            );
        }
    };

    const getNextIndicator = () => {
        if (slideIndex + slidesCount < slides.length) {
            if (next) {
                return (
                    <span className="nextBtn" onClick={nextSlide}>
                        {next}
                    </span>
                );
            }
            return (
                <Button className="nextBtn" color={color} onClick={nextSlide}>
                    Next
                </Button>
            );
        }
    };

    return (
        <Container
            type="col"
            rowCenter
            colCenter
            withBorder
            customStyles={styles + customStyles}
            {...rest}
        >
            {getPrevIndicator()}
            {getNextIndicator()}
            <Container type="row" rowCenter className="slideContainer">
                {slidesToShow.map((slide) => slide)}
            </Container>
        </Container>
    );
};

export default SlideShow;
