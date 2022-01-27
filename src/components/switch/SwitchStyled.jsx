import styled from 'styled-components';
import { getBackgroundColor } from '../../util';

const SwitchStyled = styled.span`
	margin: 0.25rem 0.5rem;

	.switch {
		position: relative;
		display: inline-block;
		width: 2.5rem;
		height: 1.5rem;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		cursor: pointer;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 1px solid var(--zeal-color-border-base);
		border-radius: 1.5px;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		width: 0.75rem;
		height: 0.75rem;
		top: 4px;
		left: 4px;
		bottom: 4px;
		border: 1px solid var(--zeal-color-border-base);
		border-radius: 1.5px;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: ${({ trackColor }) =>
			getBackgroundColor(trackColor, 'var(--zeal-color-highlight-base)')};
	}

	input:checked + .slider:before {
		transform: translateX(1rem);
		background-color: var(--zeal-color-white);
	}

	input:disabled + .slider {
		cursor: not-allowed;
	}
`;

export default SwitchStyled;
