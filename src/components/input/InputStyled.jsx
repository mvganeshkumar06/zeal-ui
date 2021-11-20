import styled from 'styled-components';

const InputStyled = styled.input`
	${({ width, height, isInvalid }) => {
		return {
			width: width,
			height: height,
			padding: '0.5rem',
			margin: '0.5rem 0rem',
			border: `0.125rem solid ${
				isInvalid ? 'var(--zeal-color-error)' : 'var(--zeal-color-border-base)'
			}`,
			borderRadius: '0.25rem',
			color: 'var(--zeal-color-on-background)',
			backgroundColor: 'var(--zeal-color-background-light)',
			accentColor: 'var(--zeal-color-primary-main)',
		};
	}}

	&::placeholder {
		color: var(--zeal-color-border-base);
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

const ErrorMessageStyled = styled.span`
	font-size: smaller;
	color: var(--zeal-color-on-error);
	background-color: var(--zeal-color-error);
	padding: 0.25rem;
	margin-bottom: 0.5rem;
	border-radius: 0.25rem;
`;

export { InputStyled, ErrorMessageStyled };
