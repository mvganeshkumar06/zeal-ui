import React from "react";
import styled from "styled-components";
import style from "../../style/Style";
import useSlideShow from "../../hooks/useSlideShow";
import { Container, Button } from "../../index";

const getSlideIndicatorBgColor = (colors, slideIndicatorColor) => {
    if (colors[slideIndicatorColor]) {
        return colors[slideIndicatorColor][3];
    }
    return colors.gray[2];
};

const getSlideIndicatorBgColorOnHover = (colors, slideIndicatorColor) => {
    if (colors[slideIndicatorColor]) {
        return colors[slideIndicatorColor][4];
    }
    return colors.gray[3];
};

const SlideIndicator = styled.span`
    ${({ style: { colors }, slideIndicatorColor }) => {
        return {
            backgroundColor: getSlideIndicatorBgColor(
                colors,
                slideIndicatorColor
            ),
            borderRadius: "50%",
            width: "10px",
            height: "10px",
            margin: "0.5rem",
        };
    }}

    &:hover {
        background-color: ${({ style: { colors }, slideIndicatorColor }) =>
            getSlideIndicatorBgColorOnHover(colors, slideIndicatorColor)};
    }

    @media (min-width: 768px) {
        width: 0.75rem;
        height: 0.75rem;
    }
`;

const SlideShow = ({
    prev,
    next,
    slides,
    width,
    height,
    slideIndicatorColor,
    slidesCount = 1,
    customStyles,
    ...rest
}) => {
    const styles = `
        position:relative;
        width:${width ? width : "100%"};
        height:${height ? height : "25rem"};
        border-radius:0.25rem;
        margin:2rem 0rem;

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

        .slideIndicatorContainer{
            position:absolute;
            bottom:1rem;
            width:100%;
        }

        .slideIndicator{
            margin:0rem 2%;
        }

        .slideIndicatorActive{
            background-color:${getSlideIndicatorBgColorOnHover(
                style.colors,
                slideIndicatorColor
            )};
            border:2px solid white;
        }

    `;

    const { slideIndex, prevSlide, nextSlide, setSlideIndex } = useSlideShow(
        slides,
        slidesCount
    );
    const slideIndicators = [];
    for (let i = 0; i < slides.length; i++) {
        slideIndicators.push(
            <SlideIndicator
                style={style}
                slideIndicatorColor={slideIndicatorColor}
                key={i}
                className={`slideIndicator ${
                    slideIndex === i ? "slideIndicatorActive" : ""
                }`}
                onClick={() => setSlideIndex(i)}
            />
        );
    }

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
                <Button className="prevBtn" onClick={prevSlide}>
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
                <Button className="nextBtn" onClick={nextSlide}>
                    Previous
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
            {slidesCount === 1 && (
                <Container
                    type="row"
                    rowCenter
                    colCenter
                    className="slideIndicatorContainer"
                >
                    {slideIndicators.map((slideIndicator) => slideIndicator)}
                </Container>
            )}
        </Container>
    );
};

export default SlideShow;
