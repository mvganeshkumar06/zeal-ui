const getOnColor = (color, customFallback) => {
	if (color === 'primary' || color === 'secondary' || color === 'accent') {
		return `var(--zeal-color-on-${color}-main)`;
	} else if (color === 'error' || color === 'warning' || color === 'success') {
		return `var(--zeal-color-on-${color})`;
	}
	if (customFallback) {
		return customFallback;
	}
	return `var(--zeal-color-on-primary-main)`;
};

export default getOnColor;
