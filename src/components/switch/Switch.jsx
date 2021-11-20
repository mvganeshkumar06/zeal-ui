import React from 'react';
import SwitchStyled from './SwitchStyled';

const Switch = ({ trackColor, onChange, checked, ...rest }) => {
	return (
		<SwitchStyled trackColor={trackColor} {...rest}>
			<label className="switch">
				<input type="checkbox" checked={checked} onChange={onChange} />
				<span className="slider"></span>
			</label>
		</SwitchStyled>
	);
};

export default Switch;
