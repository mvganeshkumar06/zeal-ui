import React from 'react';
import GridStyled from './GridStyled';

const Grid = ({ row, col, children, ...rest }) => {
	return (
		<GridStyled row={row} col={col} {...rest}>
			{children}
		</GridStyled>
	);
};

export default Grid;
