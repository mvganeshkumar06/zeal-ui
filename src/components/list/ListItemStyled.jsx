import styled from 'styled-components';

const ListItemStyled = styled.li`
	width: auto;
	height: auto;
	margin: 0.75rem 0rem 0.75rem 1rem;
	border-radius: 0.25rem;
	background-color: ${({ active }) => (active ? 'var(--zeal-color-highlight-base)' : '')};
`;

export default ListItemStyled;
