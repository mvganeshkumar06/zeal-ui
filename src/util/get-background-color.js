const getBackgroundColor = (color, customFallback) => {
	if (color === 'primary' || color === 'secondary' || color === 'accent') {
		return `var(--zeal-color-${color}-main)`;
	} else if (color === 'error' || color === 'warning' || color === 'success') {
		return `var(--zeal-color-${color})`;
	}
	if (customFallback) {
		return customFallback;
	}
	return 'var(--zeal-color-primary-main)';
};

export default getBackgroundColor;
