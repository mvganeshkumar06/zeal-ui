const validProps = ['primary', 'secondary', 'accent', 'error', 'warning', 'success'];

const isValidColorProp = (prop) => {
	return validProps.find((currProp) => currProp === prop);
};

export default isValidColorProp;
