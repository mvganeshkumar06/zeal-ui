const getBackgroundColor = (color, customFallback) => {
	if (
		color === 'primary' ||
		color === 'secondary' ||
		color === 'accent' ||
		color === 'error' ||
		color === 'warning' ||
		color === 'success'
	) {
		return `var(--zeal-color-${color}-main)`;
	}
	if (customFallback) {
		return customFallback;
	}
	return 'var(--zeal-color-primary-main)';
};

export default getBackgroundColor;
