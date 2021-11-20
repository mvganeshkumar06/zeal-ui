import styled from 'styled-components';

const GridStyled = styled.div`
	${({ row, col }) => {
		return {
			display: 'grid',
			gridTemplateColumns: `repeat(${col}, 1fr)`,
			gridTemplateRows: `repeat(${row}, 1fr)`,
		};
	}};
`;

export default GridStyled;
