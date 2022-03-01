import { useState } from 'react';

const useNotify = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	const onToggle = () => {
		if (isOpen) {
			onClose();
		} else {
			onOpen();
		}
	};

	return { isOpen, onOpen, onClose, onToggle };
};

export default useNotify;
