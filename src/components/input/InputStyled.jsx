import styled from 'styled-components';

const InputStyled = styled.input`
	${({ width, height, isInvalid }) => {
		return {
			width: width,
			height: height,
			margin: '0.5rem 0rem',
			border: `0.125rem solid ${
				isInvalid ? 'var(--zeal-color-error-main)' : 'var(--zeal-color-border-base)'
			}`,
			borderRadius: '0.25rem',
			color: 'var(--zeal-color-on-background)',
			backgroundColor: 'var(--zeal-color-background-base-light)',
			accentColor: 'var(--zeal-color-primary-main)',
		};
	}}

	&::placeholder {
		color: var(--zeal-color-border-base);
	}

	&:disabled {
		cursor: not-allowed;
	}

	&[type='button'],
	&[type='email'],
	&[type='password'],
	&[type='reset'],
	&[type='search'],
	&[type='submit'],
	&[type='tel'],
	&[type='text'],
	&[type='url'] {
		padding: 0.5rem;
	}

	&[type='date'],
	&[type='datetime-local'],
	&[type='date'],
	&[type='file'],
	&[type='month'],
	&[type='number'],
	&[type='time'],
	&[type='week'] {
		padding: 0.25rem 0.5rem;
	}

	&[type='file'] {
		padding: 0.25rem;
	}
`;

const ErrorMessageStyled = styled.p`
	font-size: smaller;
	color: var(--zeal-color-on-error);
	background-color: var(--zeal-color-error-main);
	padding: 0.25rem;
	margin-bottom: 0.5rem;
	border-radius: 0.125rem;
`;

export { InputStyled, ErrorMessageStyled };
