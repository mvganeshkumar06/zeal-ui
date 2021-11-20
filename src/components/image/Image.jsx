import React from 'react';
import ImageStyled from './ImageStyled';

const Image = ({ width, height, src, alt, type, ...rest }) => {
	return <ImageStyled width={width} height={height} src={src} alt={alt} type={type} {...rest} />;
};

export default Image;
