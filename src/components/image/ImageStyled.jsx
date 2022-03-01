import styled from 'styled-components';

const getBorderRadius = (type) => {
	if (type === 'row' || type === 'col') {
		return '0rem';
	}
	if (type === 'round') {
		return '50%';
	}
	return '0.25rem';
};

const getImageWidth = (type, width) => {
	if (type === 'row') {
		return '100%';
	}
	if (type === 'col') {
		return '50%';
	}
	return width;
};

const getImageHeight = (type, height) => {
	if (type === 'row') {
		return '50%';
	}
	if (type === 'col') {
		return '100%';
	}
	return height;
};

const ImageStyled = styled.img`
	${({ width, height, type }) => {
		return {
			width: `${getImageWidth(type, width)}`,
			height: `${getImageHeight(type, height)}`,
			margin: `${type === 'row' || type === 'col' ? '0rem' : '0.5rem 0rem'}`,
			borderRadius: getBorderRadius(type),
			color: 'var(--zeal-color-on-background)',
		};
	}}
`;

export default ImageStyled;
