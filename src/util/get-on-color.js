import { isValidColorProp } from './index';

const getOnColor = (color, customFallback) => {
	if (isValidColorProp(color)) {
		return `var(--zeal-color-on-${color})`;
	}
	if (customFallback) {
		return customFallback;
	}
	return `var(--zeal-color-on-primary)`;
};

export default getOnColor;
