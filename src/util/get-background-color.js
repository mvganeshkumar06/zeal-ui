import { isValidColorProp } from './index';

const getBackgroundColor = (color, customFallback) => {
	if (isValidColorProp(color)) {
		return `var(--zeal-color-${color}-main)`;
	}
	if (customFallback) {
		return customFallback;
	}
	return 'var(--zeal-color-primary-main)';
};

export default getBackgroundColor;
