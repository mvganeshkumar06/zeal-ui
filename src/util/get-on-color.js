const getOnColor = (color, customFallback) => {
	if (
		color === 'primary' ||
		color === 'secondary' ||
		color === 'accent' ||
		color === 'error' ||
		color === 'warning' ||
		color === 'success'
	) {
		return `var(--zeal-color-on-${color})`;
	}
	if (customFallback) {
		return customFallback;
	}
	return `var(--zeal-color-on-primary)`;
};

export default getOnColor;
