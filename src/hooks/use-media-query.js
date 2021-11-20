import { useEffect, useState } from 'react';

const useMediaQuery = (mediaQuery) => {
	const [mediaMatches, setMediaMatches] = useState([]);

	useEffect(() => {
		const mql = mediaQuery.map((media) => {
			return window.matchMedia(media);
		});
		setMediaMatches(mql);
	}, []);

	useEffect(() => {
		const handleMediaQuery = () => {
			setMediaMatches([...mediaMatches]);
		};

		mediaMatches.forEach((media) => {
			media.addEventListener('change', handleMediaQuery);
		});

		return () => {
			mediaMatches.forEach((media) => {
				media.removeEventListener('change', handleMediaQuery);
			});
		};
	}, [mediaMatches]);

	return mediaMatches.map((media) => media.matches);
};

export default useMediaQuery;
