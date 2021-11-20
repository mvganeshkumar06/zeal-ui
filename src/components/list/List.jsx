import React from 'react';
import {
	UnorderedListStyled,
	OrderedListStyled,
	StackedListStyled,
	LinkedListStyled,
} from './ListStyled';

const List = ({ type, styleType, children, ...rest }) => {
	if (type === 'ol') {
		return (
			<OrderedListStyled styleType={styleType} {...rest}>
				{children}
			</OrderedListStyled>
		);
	}

	if (type === 'stacked') {
		return <StackedListStyled {...rest}>{children}</StackedListStyled>;
	}

	if (type === 'link') {
		return <LinkedListStyled {...rest}>{children}</LinkedListStyled>;
	}

	return (
		<UnorderedListStyled styleType={styleType} {...rest}>
			{children}
		</UnorderedListStyled>
	);
};

export default List;
