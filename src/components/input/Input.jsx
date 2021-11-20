import React from 'react';
import { InputStyled, ErrorMessageStyled } from './InputStyled';

const Input = ({ width, height, isInvalid, errorMessage, ...rest }) => {
	return (
		<>
			<InputStyled width={width} height={height} isInvalid={isInvalid} {...rest} />
			{isInvalid && (
				<ErrorMessageStyled>
					{errorMessage ? errorMessage : 'Something went wrong'}
				</ErrorMessageStyled>
			)}
		</>
	);
};

export default Input;
