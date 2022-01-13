import styled from 'styled-components';

const getFlexDirection = (type) => {
	if (type === 'row') {
		return 'row';
	}
	if (type === 'row-reverse') {
		return 'row-reverse';
	}
	if (type === 'col') {
		return 'column';
	}
	if (type === 'col-reverse') {
		return 'column-reverse';
	}
	return 'row';
};

const getJustifyContent = (
	type,
	{
		rowStart,
		rowEnd,
		rowCenter,
		rowBetween,
		rowAround,
		rowEven,
		colStart,
		colEnd,
		colCenter,
		colBetween,
		colAround,
		colEven,
	},
) => {
	if ((type === 'row' && rowStart) || (type === 'col' && colStart)) {
		return 'flex-start';
	}
	if ((type === 'row' && rowEnd) || (type === 'col' && colEnd)) {
		return 'flex-end';
	}
	if ((type === 'row' && rowCenter) || (type === 'col' && colCenter)) {
		return 'center';
	}
	if ((type === 'row' && rowBetween) || (type === 'col' && colBetween)) {
		return 'space-between';
	}
	if ((type === 'row' && rowAround) || (type === 'col' && colAround)) {
		return 'space-around';
	}
	if ((type === 'row' && rowEven) || (type === 'col' && colEven)) {
		return 'space-evenly';
	}
	return 'flex-start';
};

const getAlignItems = (
	type,
	{
		rowStart,
		rowEnd,
		rowCenter,
		rowBetween,
		rowAround,
		rowEven,
		colStart,
		colEnd,
		colCenter,
		colBetween,
		colAround,
		colEven,
	},
) => {
	if ((type === 'col' && rowStart) || (type === 'row' && colStart)) {
		return 'flex-start';
	}
	if ((type === 'col' && rowEnd) || (type === 'row' && colEnd)) {
		return 'flex-end';
	}
	if ((type === 'col' && rowCenter) || (type === 'row' && colCenter)) {
		return 'center';
	}
	if ((type === 'col' && rowBetween) || (type === 'row' && colBetween)) {
		return 'space-between';
	}
	if ((type === 'col' && rowAround) || (type === 'row' && colAround)) {
		return 'space-around';
	}
	if ((type === 'col' && rowEven) || (type === 'row' && colEven)) {
		return 'space-evenly';
	}
	return 'flex-start';
};

const ContainerStyled = styled.div`
	${({
		width,
		height,
		type,
		rowStart,
		rowEnd,
		rowCenter,
		rowBetween,
		rowAround,
		rowEven,
		colStart,
		colEnd,
		colCenter,
		colBetween,
		colAround,
		colEven,
		withBorder,
		scrollAuto,
	}) => {
		const alignOptions = {
			rowStart,
			rowEnd,
			rowCenter,
			rowBetween,
			rowAround,
			rowEven,
			colStart,
			colEnd,
			colCenter,
			colBetween,
			colAround,
			colEven,
		};

		return {
			width: width,
			height: height,
			border: withBorder ? '1px solid var(--zeal-color-border)' : '',
			display: 'flex',
			flexDirection: getFlexDirection(type),
			justifyContent: getJustifyContent(type, alignOptions),
			alignItems: getAlignItems(type, alignOptions),
			overflow: scrollAuto ? 'auto' : '',
		};
	}};
`;

export default ContainerStyled;
