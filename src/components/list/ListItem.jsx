import React from 'react';
import ListItemStyled from './ListItemStyled';

const ListItem = ({ active, children, ...rest }) => {
	return (
		<ListItemStyled active={active} {...rest}>
			{children}
		</ListItemStyled>
	);
};

export default ListItem;
