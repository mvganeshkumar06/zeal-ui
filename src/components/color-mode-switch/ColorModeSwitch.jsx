import React, { useState, useEffect } from 'react';
import { useColorMode, Switch } from '../../index';

const ColorModeSwitch = ({ ...rest }) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		if (colorMode === 'light') {
			setChecked(false);
		} else if (colorMode === 'dark') {
			setChecked(true);
		}
	}, [colorMode]);

	return <Switch onChange={() => toggleColorMode()} checked={checked} {...rest} />;
};

export default ColorModeSwitch;
