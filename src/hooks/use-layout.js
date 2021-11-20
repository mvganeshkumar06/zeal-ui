import { useContext } from 'react';
import LayoutContext from '../context/layout-context';

const useLayout = () => {
	return useContext(LayoutContext);
};

export default useLayout;
