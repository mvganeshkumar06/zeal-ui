import { isValidColorProp } from './index';

const getHighlightColor = (color, customFallback) => {
	if (isValidColorProp(color)) {
		return `var(--zeal-color-highlight-${color})`;
	}
	if (customFallback) {
		return customFallback;
	}
	return 'var(--zeal-color-highlight-primary)';
};

export default getHighlightColor;
