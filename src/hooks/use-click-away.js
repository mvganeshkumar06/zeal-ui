import { useEffect } from 'react';

const useClickAway = (ref, isOpen, onClickAway) => {
	const handleOnClickAway = (event) => {
		let clickedAway = false;
		if (ref.current) {
			clickedAway = !ref.current.contains(event.target);
		}
		if (clickedAway) {
			onClickAway();
		}
	};
	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', handleOnClickAway);
			return () => document.removeEventListener('click', handleOnClickAway);
		}
	}, [isOpen]);
};

export default useClickAway;
