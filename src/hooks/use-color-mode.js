import { useContext } from 'react';
import ColorModeContext from '../context/color-mode-context';

const useColorMode = () => {
	return useContext(ColorModeContext);
};

export default useColorMode;
