import theme from './theme';
import { deepMerge } from '../util';

const createCustomTheme = (userTheme) => {
	return deepMerge(theme, userTheme);
};

export default createCustomTheme;
