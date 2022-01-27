import React from 'react';
import useSlideShow from '../../hooks/use-slide-show';
import { Container } from '../../index';
import { Arrow } from '../../icons';
import SlideshowStyled from './SlideshowStyled';

const SlideShow = ({
	width,
	height,
	slides,
	slidesCount = 1,
	prev,
	next,
	color,
	arrowColor,
	...rest
}) => {
	const { slideIndex, prevSlide, nextSlide } = useSlideShow(slides, slidesCount);

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
				<Arrow
					type="left"
					color={arrowColor}
					withBorder
					className="prevArrow"
					onClick={prevSlide}
				/>
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
				<Arrow
					type="right"
					color={arrowColor}
					withBorder
					className="nextArrow"
					onClick={nextSlide}
				/>
			);
		}
	};

	return (
		<SlideshowStyled
			width={width}
			height={height}
			type="col"
			color={color}
			rowCenter
			colCenter
			{...rest}
		>
			{getPrevIndicator()}
			{getNextIndicator()}
			<Container type="row" rowCenter className="slideContainer">
				{slidesToShow.map((slide) => slide)}
			</Container>
		</SlideshowStyled>
	);
};

export default SlideShow;
