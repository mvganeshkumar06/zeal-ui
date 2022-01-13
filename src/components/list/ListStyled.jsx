import styled from 'styled-components';

const UnorderedListStyled = styled.ul`
	li {
		margin: 0.5rem 1rem;
		list-style-type: ${({ styleType }) => styleType};
	}
`;

const OrderedListStyled = styled.ol`
	li {
		margin: 0.5rem 1rem;
		list-style-type: ${({ styleType }) => styleType};
	}
`;

const StackedListStyled = styled.ul`
	li {
		padding: 0.5rem;
		list-style-type: none;
		border: 1px solid var(--zeal-color-border);
		border-radius: 0rem;
		border-bottom: none;
	}
	li:last-child {
		border-bottom: 1px solid var(--zeal-color-border);
	}
`;

const LinkedListStyled = styled.ul`
	li {
		list-style-type: none;
		margin: 0.25rem 0rem;
	}
	li a {
		text-decoration: none;
		display: block;
		width: 100%;
		height: 100%;
		padding: 0.5rem;
		border-radius: 0.25rem;
	}
	li:hover {
		cursor: pointer;
		background-color: var(--zeal-color-highlight-base);
	}
`;

export { UnorderedListStyled, OrderedListStyled, StackedListStyled, LinkedListStyled };
